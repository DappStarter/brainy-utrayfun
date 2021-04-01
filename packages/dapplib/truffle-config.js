require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'give narrow fog table name rival spike equip just crisp fortune genius'; 
let testAccounts = [
"0x2558b7d44546f62ff859ff43e7cc8ac5dbca12ebbdf9c1b52de837d4c2c93e41",
"0x03cb06b58b97eaf21997d5603797f3a5862814598a8e76236efdfb8958ade0a5",
"0xf62e6e2f0fa5ce19559565c4848033cc4b236208693e057524cb90d857ab08b7",
"0x8239707342fc3eb125f1a398c767448d7f7042efd060ccf71ab9ff9c6fa92db3",
"0x296ad43677423a6d3d2a0c5a12de6d4405579235aefcc52d41f1f39e0eb603ad",
"0xb5b725519c14d3ff058999f4dfbdc73ceb6d6340318c45f639bbc0024dcc502c",
"0x7f7beb98f661a93a103635071f97d5d59666d917ff9ce1acb47755113dca0d0a",
"0x2b87cb826884f167c623061b444bf7f31ce8513a2be9f48f8173335ad8f6d225",
"0xdfb0696d763a002050edaef8621ffde3f5ca36e776144b52541b086a5a7a36a6",
"0xdccf006a97e2f9a14fb6bc6f1669337f06caa29167be7c88257dda4d4d64679b"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

