require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock bridge silver normal note right protect guess arm bubble genre'; 
let testAccounts = [
"0x11581e8374c6ea5c6dcafff3bff1c050f8184e4df7a63d8d33216ad2d42766f3",
"0xe285f50480dd2ca1621279211f47d6a7d2a3ad926ad5d0014f36d7ccfe4ed51d",
"0x6c6fd90734f69b90f1f8ed656b6aa96503fb664da32bf57c84414d9e0ed044be",
"0xfd28491793484a4b1a7d9b28d33d15e614abb3df3b2a9d456f6eba4eef7136bc",
"0x75ddef528918d210ed6287da5e7aec072733c265e3adf8dfd3e4931b59f2e75a",
"0x74e2c26160c913026b215fcad31745e62d58a2d7a67c7657b689983717489dd0",
"0x44fe21038c738fd0a7753f2066a9ad61b81314efae356b1bae4b27ae3a5eedba",
"0xe417b7b279d957915c56a0cb59110d41c595fd8198ab33c1ae1ce839ce3607f2",
"0xddb0bf39022dd020accfc7ee61627322f6c305e0138e1751b82a86b20d970452",
"0xc9166e5fe5ba41adef43df3fb352c33813461dff37044bf9f9c9fd20c1b1be1d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

