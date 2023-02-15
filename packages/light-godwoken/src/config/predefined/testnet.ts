import { Layer1Config, LightGodwokenConfig, LightGodwokenConfigMap } from "../types";
import { predefined, createConfig } from "@ckb-lumos/config-manager";
import { predefinedTokens } from "../../tokens";

export const TestnetLayer1Config: Layer1Config = {
  SCRIPTS: {
    omniLock: {
      codeHash: "0x79f90bb5e892d80dd213439eeab551120eb417678824f282b4ffb5f21bad2e1e",
      hashType: "type",
      txHash: "0x9154df4f7336402114d04495175b37390ce86a4906d2d4001cf02c3e6d97f39c",
      index: "0x0",
      depType: "code",
    },
    secp256k1Blake160: {
      codeHash: "0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8",
      hashType: "type",
      txHash: "0xf8de3bb47d055cdf460d93a2a6e1b05f7432f9777c8c474abf4eec1d4aee5d37",
      index: "0x0",
      depType: "depGroup",
    },
    sudt: {
      codeHash: "0xc5e5dcf215925f7ef4dfaf5f4b4f105bc321c02776d6e7d52a1db3fcd9d011a4",
      hashType: "type",
      txHash: "0xe12877ebd2c3c364dc46c5c992bcfaf4fee33fa13eebdf82c591fc9825aab769",
      index: "0x0",
      depType: "code",
    },
  },
  CKB_INDEXER_URL: "https://testnet.ckb.dev/indexer",
  CKB_RPC_URL: "https://testnet.ckb.dev",
  SCANNER_URL: "https://pudge.explorer.nervos.org",
};

export const TestnetLumosConfig = createConfig({
  ...predefined.AGGRON4,
  SCRIPTS: {
    ...predefined.AGGRON4.SCRIPTS,
    OMNILOCK: {
      ...predefined.AGGRON4.SCRIPTS.OMNILOCK,
      CODE_HASH: TestnetLayer1Config.SCRIPTS.omniLock.codeHash,
      TX_HASH: TestnetLayer1Config.SCRIPTS.omniLock.txHash,
      INDEX: TestnetLayer1Config.SCRIPTS.omniLock.index,
    },
  },
});

// https://github.com/nervosnetwork/godwoken-info/blob/69175dff51fb63665abff7cc9640af5bf3409fea/testnet_v0/config/scripts-deploy-result.json
export const TestnetLayer2ConfigV0: LightGodwokenConfig = {
  lumosConfig: TestnetLumosConfig,
  layer1Config: TestnetLayer1Config,
  layer2Config: {
    SCRIPTS: {
      depositLock: {
        scriptTypeHash: "0x5a2506bb68d81a11dcadad4cb7eae62a17c43c619fe47ac8037bc8ce2dd90360",
        cellDep: {
          outPoint: {
            txHash: "0x97614145cdec9ba924001c11cd49f1c424927437b40ed3ca3b82fff358f2e3de",
            index: "0x0",
          },
          depType: "code",
        },
      },
      withdrawalLock: {
        scriptTypeHash: "0x170ef156e9f6132dbca6069dfd3e436f7d91c29d3ac7332c4b33e633b6a299b5",
        cellDep: {
          outPoint: {
            txHash: "0xa8c2fe2aaaf405b2b1fd33dd63adc4c514a3d1f6dd1a64244489ad75c51a5d14",
            index: "0x0",
          },
          depType: "code",
        },
      },
      ethAccountLock: {
        scriptTypeHash: "0xdeec13a7b8e100579541384ccaf4b5223733e4a5483c3aec95ddc4c1d5ea5b22",
      },
    },
    ROLLUP_CONFIG: {
      rollupTypeHash: "0x4cc2e6526204ae6a2e8fcf12f7ad472f41a1606d5b9624beebd215d780809f6a",
      rollupTypeScript: {
        codeHash: "0x5c365147bb6c40e817a2a53e0dec3661f7390cc77f0c02db138303177b12e9fb",
        hashType: "type",
        args: "0x213743d13048e9f36728c547ab736023a7426e15a3d7d1c82f43ec3b5f266df2",
      },
    },
    GW_POLYJUICE_RPC_URL: "https://godwoken-testnet-web3-rpc.ckbapp.dev",
    SCANNER_URL: "https://aggron.gwscan.com",
    SCANNER_API: "https://api.aggron.gwscan.com/api/",
    CHAIN_NAME: "Godwoken Testnet v0",
    FINALITY_BLOCKS: 10000,
    BLOCK_PRODUCE_TIME: 45,
    MIN_CANCEL_DEPOSIT_TIME: 1200, // 20 minutes in seconds
    MULTICALL_ADDRESS: "0xaf98A74b133CD8373EE055b399b0cE19cF8C4523",
  },
  tokenList: predefinedTokens.testnet.v0,
};

// https://github.com/nervosnetwork/godwoken-info/blob/69175dff51fb63665abff7cc9640af5bf3409fea/testnet_v1_1/scripts-deploy-result.json
export const TestnetLayer2ConfigV1: LightGodwokenConfig = {
  lumosConfig: TestnetLumosConfig,
  layer1Config: TestnetLayer1Config,
  layer2Config: {
    SCRIPTS: {
      depositLock: {
        scriptTypeHash: "0x50704b84ecb4c4b12b43c7acb260ddd69171c21b4c0ba15f3c469b7d143f6f18",
        cellDep: {
          outPoint: {
            txHash: "0x9caeec735f3cd2a60b9d12be59bb161f7c61ddab1ac22c4383a94c33ba6404a2",
            index: "0x0",
          },
          depType: "code",
        },
      },
      withdrawalLock: {
        scriptTypeHash: "0x06ae0706bb2d7997d66224741d3ec7c173dbb2854a6d2cf97088796b677269c6",
        cellDep: {
          outPoint: {
            txHash: "0x9c607a9a75ea4699dd01b1c2a478002343998cac8346d2aa582f35b532bd2b93",
            index: "0x0",
          },
          depType: "code",
        },
      },
      ethAccountLock: {
        scriptTypeHash: "0x07521d0aa8e66ef441ebc31204d86bb23fc83e9edc58c19dbb1b0ebe64336ec0",
      },
    },
    ROLLUP_CONFIG: {
      rollupTypeHash: "0x702359ea7f073558921eb50d8c1c77e92f760c8f8656bde4995f26b8963e2dd8",
      rollupTypeScript: {
        codeHash: "0x1e44736436b406f8e48a30dfbddcf044feb0c9eebfe63b0f81cb5bb727d84854",
        hashType: "type",
        args: "0x86c7429247beba7ddd6e4361bcdfc0510b0b644131e2afb7e486375249a01802",
      },
    },
    GW_POLYJUICE_RPC_URL: "https://v1.testnet.godwoken.io/rpc",
    SCANNER_URL: "https://v1.testnet.gwscan.com/",
    SCANNER_API: "https://api.v1.betanet.gwscan.com/api/",
    CHAIN_NAME: "Godwoken Testnet v1",
    FINALITY_BLOCKS: 100,
    BLOCK_PRODUCE_TIME: 8, // L2 average block produce time from GwScan
    MIN_CANCEL_DEPOSIT_TIME: 604800, // 7 days in seconds

    // https://github.com/mds1/multicall/blob/a6ed03f4bb232a573e9f6d4bdeca21a4edd3c1f7/README.md
    MULTICALL_ADDRESS: "0xcA11bde05977b3631167028862bE2a173976CA11",
  },
  tokenList: predefinedTokens.testnet.v1,
};

export const TestnetConfigMap: LightGodwokenConfigMap = {
  v0: TestnetLayer2ConfigV0,
  v1: TestnetLayer2ConfigV1,
};
