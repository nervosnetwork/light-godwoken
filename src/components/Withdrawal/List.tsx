import { useClock } from "../../hooks/useClock";
import { useLightGodwoken } from "../../hooks/useLightGodwoken";
import { useQuery } from "react-query";
import styled from "styled-components";
import { LoadingOutlined } from "@ant-design/icons";
import WithdrawalRequestCard from "./WithdrawalRequestCard";
import { Cell } from "@ckb-lumos/base";

const WithdrawalListDiv = styled.div`
  max-height: 500px;
  min-height: 50px;
  overflow-y: auto;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  & > div {
    margin-bottom: 16px;
  }
`;
interface Props {
  unlockButton?: (cell: Cell) => JSX.Element;
}
export const WithdrawalList: React.FC<Props> = ({ unlockButton }: Props) => {
  const lightGodwoken = useLightGodwoken();
  const now = useClock();
  const { data: withdrawalList } = useQuery(
    ["queryWithdrawList", { version: lightGodwoken?.getVersion() }],
    () => {
      return lightGodwoken?.listWithdraw();
    },
    {
      enabled: !!lightGodwoken,
    },
  );

  if (!withdrawalList) {
    return (
      <WithdrawalListDiv>
        <LoadingOutlined />
      </WithdrawalListDiv>
    );
  }
  return (
    <WithdrawalListDiv>
      {withdrawalList.length === 0 && "There is no withdrawal request here"}
      {withdrawalList.map((withdraw, index) => (
        <WithdrawalRequestCard now={now} {...withdraw} key={index} unlockButton={unlockButton}></WithdrawalRequestCard>
      ))}
    </WithdrawalListDiv>
  );
};
