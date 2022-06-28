import { LightGodwokenTokenType } from "./configTypes";

// https://github.com/nervosnetwork/godwoken-info/blob/main/mainnet_v0/ERC20TokenList.json
export const TOKEN_LIST_V0_MAINNET: LightGodwokenTokenType[] = [
  {
    id: 0,
    symbol: "CKB",
    name: "CKB",
    decimals: 8,
    tokenURI: "https://cryptologos.cc/logos/nervos-network-ckb-logo.svg?v=002",
    address: "0x9D9599c41383D7009C2093319d576AA6F89A4449",
    l1LockArgs: "0x0000000000000000000000000000000000000000000000000000000000000000",
  },
  {
    id: 0,
    symbol: "dCKB",
    name: "dCKB",
    decimals: 8,
    tokenURI: "https://cryptologos.cc/logos/nervos-network-ckb-logo.svg?v=002",
    address: "0x53A1964a163f64Da59eFE6A802e35b5529d078E2",
    l1LockArgs: "0xe5451c05231e1df43e4b199b5d12dbed820dfbea2769943bb593f874526eeb55",
  },
  {
    id: 0,
    symbol: "TAI",
    name: "TAI",
    decimals: 8,
    tokenURI: "https://cryptologos.cc/logos/nervos-network-ckb-logo.svg?v=002",
    address: "0xf4187511D43B90751a28b6811d13AFB49BeF8452",
    l1LockArgs: "0x08430183dda1cbd81912c4762a3006a59e2291d5bd43b48bb7fa7544cace9e4a",
  },
  {
    id: 19,
    symbol: "ETH",
    name: "ETH",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=002",
    address: "0x48aA6F7bEe4C0d3e7d918833894ee83357ae0d4C",
    l1LockArgs: "0x9657b32fcdc463e13ec9205914fd91c443822a949937ae94add9869e7f2e1de8",
  },
  {
    id: 172,
    symbol: "USDT",
    name: "USDT",
    decimals: 6,
    tokenURI: "https://cryptologos.cc/logos/tether-usdt-logo.svg?v=002",
    address: "0x07a388453944bB54BE709AE505F14aEb5d5cbB2C",
    l1LockArgs: "0x1b89ae72b96c4f02fa7667ab46febcedf9b495737752176303ddd215d66a615a",
  },
  {
    id: 177,
    symbol: "DAI",
    name: "DAI",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.svg?v=002",
    address: "0x128BEc17A6D527cdA1Fab65958F0D7bda17e4Aef",
    l1LockArgs: "0xdd97fe4f673ed231af188855f4ca8b1034153c8d4e40f5b4fae2afd5d3f53ccc",
  },
  {
    id: 178,
    symbol: "LINK",
    name: "LINK",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/chainlink-link-logo.svg?v=002",
    address: "0xdDb9265c0bfdd3076336F314f7636B03AC6333c7",
    l1LockArgs: "0xb4f59ca5a3e1b8bdbce38ca8742bcd922c2201d61090cddd4a053b3f786e3275",
  },
  {
    id: 179,
    symbol: "BAND",
    name: "BAND",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/band-protocol-band-logo.svg?v=013",
    address: "0x8Ea9E9b797e9497ab044EeE9Aa286A780fEC1911",
    l1LockArgs: "0xf7d2b6a5e6c9ec564ce11e30e845d7e4ed9fd873eb3a426e9991d4a780d7c35b",
  },
  {
    id: 180,
    symbol: "BAT",
    name: "BAT",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/basic-attention-token-bat-logo.svg?v=002",
    address: "0xDA65D41BA72bDeDB7f7180025797cC9f531dF3CC",
    l1LockArgs: "0xe183387147be24ecb3ba04eb480b6042803b1c93954f9c5a0e5a506cd5571b6b",
  },
  {
    id: 181,
    symbol: "SNX",
    name: "SNX",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/synthetix-network-token-snx-logo.svg?v=002",
    address: "0x97d4d6dD8fFA0E4F7D0b883E7f9B4E71a9AbEb58",
    l1LockArgs: "0xb31800b3c908eaf217a982cb2a0fb8df7ac047485c432634a079a8c158339020",
  },
  {
    id: 182,
    symbol: "UNI",
    name: "UNI",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/uniswap-uni-logo.svg?v=013",
    address: "0x9673Ad4D1a57aaE106e49659Cd35d81A6A4ca70C",
    l1LockArgs: "0xb52927f7f444eb178461d0fa8b62b67c4a043add18e36248c7e9734d8d077a7e",
  },
  {
    id: 183,
    symbol: "YFI",
    name: "YFI",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/yearn-finance-yfi-logo.svg?v=013",
    address: "0xe7c12fB824BBdDD99ffb810bBEF9Fc87bfC84959",
    l1LockArgs: "0x7658a43a8ae5f3f9d24c2001815617a31c29a4131bf2d2a67a4006f553116e11",
  },
  {
    id: 184,
    symbol: "BUSD",
    name: "BUSD",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/binance-usd-busd-logo.svg?v=002",
    address: "0xdAFc31040624D70B2381E59C1AD0AD28112CE79A",
    l1LockArgs: "0x232678824938dfd87a049122c4e244af88dad7faa79a262362f5bc5356ee4c64",
  },
  {
    id: 185,
    symbol: "COMP",
    name: "COMP",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/compound-comp-logo.svg?v=013",
    address: "0xE0f817Ef8DeD91BfBafc50AB3ec34C30b2c62A6a",
    l1LockArgs: "0x82a6b63b13d9980c98b17810eb2599dc94c144c0ddd24fd24e8a7881d93323ff",
  },
  {
    id: 186,
    symbol: "MKR",
    name: "MKR",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/maker-mkr-logo.svg?v=002",
    address: "0xF128da0AE9242a4aAebfeE892aCEdE31Cf286D55",
    l1LockArgs: "0xbfe64426d24c81113125b33d092655913c8c759e475403a418f4eab47f405dd9",
  },
  {
    id: 187,
    symbol: "IOTX",
    name: "IOTX",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/iotex-iotx-logo.svg?v=002",
    address: "0xBa4C164CE191522B1eF3FD851e436d8b8d5F178B",
    l1LockArgs: "0x8049b09170892d1b04b24c9c185704149d915ab29d6640a1c74bf85e823738f5",
  },
  {
    id: 188,
    symbol: "BEL",
    name: "BEL",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/belacoin-bela-logo.svg?v=013",
    address: "0x1f8d3551984A2C89030FFcc15BCe2C24878b0c6b",
    l1LockArgs: "0xbceed8fd2b30c9e246035890196fed4218e5bff472786f74c19d9b156607070b",
  },
  {
    id: 189,
    symbol: "PAX",
    name: "PAX",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/paxos-standard-pax-logo.svg?v=002",
    address: "0x653239a754B167E8967fE8A3d1444e0Aa6Cd004e",
    l1LockArgs: "0x160093179296127b43624ab641e2561540e18b1f1b8025d8d6830485201a16a1",
  },
  {
    id: 190,
    symbol: "USDC",
    name: "USDC",
    decimals: 6,
    tokenURI: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=002",
    address: "0xC3b946c53E2e62200515d284249f2a91d9DF7954",
    l1LockArgs: "0x5c4ac961a2428137f27271cf2af205e5c55156d26d9ac285ed3170e8c4cc1501",
  },
  {
    id: 191,
    symbol: "SXP",
    name: "SXP",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/swipe-sxp-logo.svg?v=002",
    address: "0x7ab542aB5A31b29D9cB34eC2aa64356C3A36023F",
    l1LockArgs: "0xf49a7d57cd50907d28c0e2ae57b559165ce08aa0ff074fb3b277f6dc5eb285ee",
  },
  {
    id: 193,
    symbol: "SUSHI",
    name: "SUSHI",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/sushiswap-sushi-logo.svg?v=013",
    address: "0x8cbBE0A31D4330B96641Ff3D66a4d5Baae3E3348",
    l1LockArgs: "0xd7a79519d220983c703fd90083c481fc3144daad7ea05728832cbc021f27c017",
  },
  {
    id: 194,
    symbol: "AAVE",
    name: "AAVE",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/aave-aave-logo.svg?v=013",
    address: "0xc04e95A95DA3507B70D6d150321AeFBf44048462",
    l1LockArgs: "0xaf47fbc88c924f720fd8d4c0aea5dca8bd00ceecd9f8c2ab45415f6a5dd2ee97",
  },
  {
    id: 195,
    symbol: "1INCH",
    name: "1INCH",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/1inch-1inch-logo.svg?v=013",
    address: "0x5e6242f8730dcFF116D1324043FbeE8106AcC3B9",
    l1LockArgs: "0x5bea7b77283ac8a20bd4e848a67c68349a3880b67278a5565bbbc242a26d3e29",
  },
  {
    id: 196,
    symbol: "LTO",
    name: "LTO",
    decimals: 8,
    tokenURI: "https://cryptologos.cc/logos/lto-network-lto-logo.svg?v=002",
    address: "0x572136Bfd2c85877CF53EE65D8F2b367bF52DC5E",
    l1LockArgs: "0x33e2afa67434322b1368bf5064b31dc20021bcccc871aa5cc6a5380aa58c59f6",
  },
  {
    id: 197,
    symbol: "MATIC",
    name: "MATIC",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/matic-network-matic-logo.svg?v=002",
    address: "0x6DC6fCCB161c2eA8fD9C7647AE7b636e7a6EBCDF",
    l1LockArgs: "0xb571d967797059352785a0297b3ff740f17df1b97315c311b2c0e0107a0db5a8",
  },
  {
    id: 198,
    symbol: "BNT",
    name: "BNT",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/bancor-bnt-logo.svg?v=002",
    address: "0x3C5b9fAFe6C369aF00007e6324a356109216DeFC",
    l1LockArgs: "0x4192873b0a0aaeaa04372aa46ff2cd94a90ac1acaa7569458226febec4d6d5ed",
  },
  {
    id: 199,
    symbol: "BZRX",
    name: "BZRX",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/bzx-protocol-bzrx-logo.svg?v=013",
    address: "0xc52f7775FDF32b8a97b1160A4BD2688714f589B0",
    l1LockArgs: "0xc0ddc82e1a24ccdf637bf19424dfcaa79ccb0dd7bdb1f4fdc7be3457214aee44",
  },
  {
    id: 200,
    symbol: "MDT",
    name: "MDT",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/measurable-data-token-mdt-logo.svg?v=013",
    address: "0x71d5931a8dFab62d00d58E42230aAECa970711e0",
    l1LockArgs: "0xe5738a780a759d2f7a1a4b33999d1a7e05d55e0a88efb6068a963aa84531fdbc",
  },
  {
    id: 201,
    symbol: "PNT",
    name: "PNT",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/pnetwork-pnt-logo.svg?v=013",
    address: "0xD0C94845f8FFEDCCFbdB5446eEf2F4B6a366e00B",
    l1LockArgs: "0xbdfe9436470e847122230ec5119eed76ace9a99cca1db628cf8d42d334cc16f5",
  },
  {
    id: 202,
    symbol: "PERL",
    name: "PERL",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/perlin-perl-logo.svg?v=002",
    address: "0xC5c6676EFc356629Dd0736a79Ba98c0A96d854c6",
    l1LockArgs: "0x34ae46f1112be6a0f3d17bdf34d64e8508c4e6a6c23ae352d0915e24ac767224",
  },
  {
    id: 203,
    symbol: "BAL",
    name: "BAL",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/balancer-bal-logo.svg?v=013",
    address: "0x195DC187402959717DAc878e95D93130a62d16fE",
    l1LockArgs: "0xcce6d0ac83d2491f8b8bd3875f3577b9e77f08a0396cd2e9274f339eb76e08a4",
  },
  {
    id: 204,
    symbol: "BLZ",
    name: "BLZ",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/bluzelle-blz-logo.svg?v=002",
    address: "0xf0948768ab0E64c649cBdf910eE7F10b4B11bd12",
    l1LockArgs: "0xda58dca6d334b837dbeb1da27e3ee45039890555bbcadbbd59fa1f32faaa5d5b",
  },
  {
    id: 205,
    symbol: "COTI",
    name: "COTI",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/coti-coti-logo.svg?v=013",
    address: "0x2F354Ad6b31E3E3F631B3CbBe61a262F5139C7fd",
    l1LockArgs: "0x70746eb3aeeefb93c7024332e3b129ac09dbdfd238e9a0ff7763ae1b2cd8193e",
  },
  {
    id: 206,
    symbol: "TRX",
    name: "TRX",
    decimals: 6,
    tokenURI: "https://cryptologos.cc/logos/tron-trx-logo.svg?v=002",
    address: "0xAA0e6C6Dea0119CDD78666b1e8192bb4583DfF40",
    l1LockArgs: "0xff7eb7296b2e6896274c37bdf949442f8cbb3f89f60d21d39367e2c93d917ad9",
  },
  {
    id: 207,
    symbol: "TUSD",
    name: "TUSD",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/trueusd-tusd-logo.svg?v=002",
    address: "0x9417475FC822a1e4677E2689d73579448B341418",
    l1LockArgs: "0xeb83e2d417474fb5aeaf3ab13be413e445159ade6865bd28834c34f680b9339a",
  },
  {
    id: 0,
    symbol: "BNB|bsc",
    name: "Wrapped BNB (ForceBridge from BSC)",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/binance-coin-bnb-logo.svg?v=002",
    address: "0xF818146b3abaA7830B94A47C2703eEDE5971D055",
    l1LockArgs: "0x578cd6ab8c0800e6fbc17b58633857dac5626883af89f842e79cb8f7af24de75",
  },
  {
    id: 0,
    symbol: "BUSD|bsc",
    name: "Wrapped BUSD (ForceBridge from BSC)",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/binance-usd-busd-logo.svg?v=002",
    address: "0xC61BC16E5199E4988d517a08Fa3133194EEdd9fB",
    l1LockArgs: "0x69c215249102308356778d58259c91c0f1988f6f5b07aa614921ee1803ea0059",
  },
  {
    id: 0,
    symbol: "USDT|bsc",
    name: "Wrapped USDT (ForceBridge from BSC)",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/tether-usdt-logo.svg?v=002",
    address: "0x5C30d9396a97f2279737E63B2bf64CC823046591",
    l1LockArgs: "0xfd6f1818fe746687ef5268f82ce1835ba1a94fdccee5f098a389aeed0067eb57",
  },
  {
    id: 0,
    symbol: "ETH|bsc",
    name: "Wrapped ETH (ForceBridge from BSC)",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=002",
    address: "0x6c9A86CF7b9065CefBf9110D8585514c4D304dc3",
    l1LockArgs: "0xd61ddc3184767d677be0d741883779aa9513293c4eaa4e0687b5b1caf845edfe",
  },
  {
    id: 0,
    symbol: "BTCB|bsc",
    name: "Wrapped BTCB (ForceBridge from BSC)",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=002",
    address: "0x3f8d2b24C6fa7b190f368C3701FfCb2bd919Af37",
    l1LockArgs: "0x9ea7beb4a36469e00bb30dbac75e93672441b483d519556ba9d1424b9294eae5",
  },
  {
    id: 0,
    symbol: "WBNB|bsc",
    name: "Wrapped WBNB (ForceBridge from BSC)",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/binance-coin-bnb-logo.svg?v=002",
    address: "0x0F0C07a45F3c33898bD307541E01f34C6d054ed6",
    l1LockArgs: "0x29f425f897896c15ca11fd154d8e22ac56b5f49e683d0c88979ad44752fcd520",
  },
  {
    id: 0,
    symbol: "USDC|bsc",
    name: "Wrapped USDC (ForceBridge from BSC)",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=002",
    address: "0xA21B19d660917C1DE263Ad040Ba552737cfcEf50",
    l1LockArgs: "0xcedd0f67f2d218ab992284ab343c2e729d2a124a1612592deaa9f8b8f8a581dd",
  },
  {
    id: 0,
    symbol: "SFP|bsc",
    name: "Wrapped SFP (ForceBridge from BSC)",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/safepal-sfp-logo.svg?v=017",
    address: "0x7554dc828c3f28093940BcBE33F438788043408b",
    l1LockArgs: "0xc66b8a7f4869272e1fd0565535cb444c319b6baafd386c5857f08d87e396cfd5",
  },
  {
    id: 0,
    symbol: "iBFR|bsc",
    name: "Wrapped iBFR (ForceBridge from BSC)",
    decimals: 18,
    tokenURI: "https://assets.coingecko.com/coins/images/18540/large/buffer.png",
    address: "0xB5b12d26592cdEa10e056a8557Cb85B01B93F337",
    l1LockArgs: "0x5e945aa680b40d9388d4988aee0aebdd2ad9185b6c0ebfd408fa974818de8b6a",
  },
  {
    id: 0,
    symbol: "WBTC|eth",
    name: "Wrapped WBTC (ForceBridge from Ethereum)",
    decimals: 8,
    tokenURI: "https://cryptologos.cc/logos/wrapped-bitcoin-wbtc-logo.svg?v=002",
    address: "0x7818FA4C71dC3b60049FB0b6066f18ff8c720f33",
    l1LockArgs: "0x0a2117bce7a84cac80e7c5971919d12987e4da58f79e010c6c2f58c7d6e687e1",
  },
];
