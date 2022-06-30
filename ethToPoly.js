const Web3 = require('web3');

let web3 = new Web3('https://goerli.infura.io/v3/3c4e80fa442740b7b852572c1763b2fa');

const Erc20Predicate = "0xdD6596F2029e6233DEFfaCa316e6A95217d4Dc34" //proxy  

const rootchainmanager_abi = [{ "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "userAddress", "type": "address" }, { "indexed": false, "internalType": "address payable", "name": "relayerAddress", "type": "address" }, { "indexed": false, "internalType": "bytes", "name": "functionSignature", "type": "bytes" }], "name": "MetaTransactionExecuted", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "tokenType", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "predicateAddress", "type": "address" }], "name": "PredicateRegistered", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "previousAdminRole", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "newAdminRole", "type": "bytes32" }], "name": "RoleAdminChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }], "name": "RoleGranted", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }], "name": "RoleRevoked", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "rootToken", "type": "address" }, { "indexed": true, "internalType": "address", "name": "childToken", "type": "address" }, { "indexed": true, "internalType": "bytes32", "name": "tokenType", "type": "bytes32" }], "name": "TokenMapped", "type": "event" }, { "inputs": [], "name": "DEFAULT_ADMIN_ROLE", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "DEPOSIT", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "ERC712_VERSION", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "ETHER_ADDRESS", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MAPPER_ROLE", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MAP_TOKEN", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "checkpointManagerAddress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "childChainManagerAddress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "childToRootToken", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "rootToken", "type": "address" }, { "internalType": "address", "name": "childToken", "type": "address" }], "name": "cleanMapToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "depositEtherFor", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }, { "internalType": "address", "name": "rootToken", "type": "address" }, { "internalType": "bytes", "name": "depositData", "type": "bytes" }], "name": "depositFor", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "userAddress", "type": "address" }, { "internalType": "bytes", "name": "functionSignature", "type": "bytes" }, { "internalType": "bytes32", "name": "sigR", "type": "bytes32" }, { "internalType": "bytes32", "name": "sigS", "type": "bytes32" }, { "internalType": "uint8", "name": "sigV", "type": "uint8" }], "name": "executeMetaTransaction", "outputs": [{ "internalType": "bytes", "name": "", "type": "bytes" }], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "bytes", "name": "inputData", "type": "bytes" }], "name": "exit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getChainId", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "getDomainSeperator", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "getNonce", "outputs": [{ "internalType": "uint256", "name": "nonce", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }], "name": "getRoleAdmin", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "getRoleMember", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }], "name": "getRoleMemberCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "grantRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "hasRole", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_owner", "type": "address" }], "name": "initialize", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "initializeEIP712", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "rootToken", "type": "address" }, { "internalType": "address", "name": "childToken", "type": "address" }, { "internalType": "bytes32", "name": "tokenType", "type": "bytes32" }], "name": "mapToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "name": "processedExits", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "tokenType", "type": "bytes32" }, { "internalType": "address", "name": "predicateAddress", "type": "address" }], "name": "registerPredicate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "rootToken", "type": "address" }, { "internalType": "address", "name": "childToken", "type": "address" }, { "internalType": "bytes32", "name": "tokenType", "type": "bytes32" }], "name": "remapToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "renounceRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "revokeRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "rootToChildToken", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newCheckpointManager", "type": "address" }], "name": "setCheckpointManager", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newChildChainManager", "type": "address" }], "name": "setChildChainManagerAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newStateSender", "type": "address" }], "name": "setStateSender", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "setupContractId", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "stateSenderAddress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "tokenToType", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "name": "typeToPredicate", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "stateMutability": "payable", "type": "receive" }]

//const childManagerProxy_abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"address payable","name":"relayerAddress","type":"address"},{"indexed":false,"internalType":"bytes","name":"functionSignature","type":"bytes"}],"name":"MetaTransactionExecuted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"CHILD_CHAIN_ID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CHILD_CHAIN_ID_BYTES","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEPOSITOR_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ERC712_VERSION","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ROOT_CHAIN_ID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ROOT_CHAIN_ID_BYTES","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"bytes","name":"depositData","type":"bytes"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"bytes","name":"functionSignature","type":"bytes"},{"internalType":"bytes32","name":"sigR","type":"bytes32"},{"internalType":"bytes32","name":"sigS","type":"bytes32"},{"internalType":"uint8","name":"sigV","type":"uint8"}],"name":"executeMetaTransaction","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getChainId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"getDomainSeperator","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getNonce","outputs":[{"internalType":"uint256","name":"nonce","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"},{"internalType":"uint8","name":"decimals_","type":"uint8"},{"internalType":"address","name":"childChainManager","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]

const rootchainmanager = '0xBbD7cBFA79faee899Eaf900F13C9065bF03B1A74'

//DIAM CONTRACT ABI
const abi = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }]
//DIAM CONTRACT ADDRESS
const address = "0x78867fD9E8C4A01A7b4d01418799DB96a48ebBAF"

var account1 = "0x92b508777377412ff8BC08A299c8770DE2f57B08"//
//ACCOUNT1 PRIVATE KEY //unsafe declaration //always store it in system env variable 
const pr1 = "7e8d602309e5c3e17437cd80d2ae642553094e491017f182192c387658dad108"

//CONTRACT INSTANCE OF ROOT CHAIN MANAGER
let contract2 = new web3.eth.Contract(rootchainmanager_abi, rootchainmanager); //vesting 

// const r = web3.eth.accounts.privateKeyToAccount(pr1);
// console.log(r.address)

//FIRST APPROVE THE ERC20 PREDICATE TO LOCK THE TOKENS
function Approve(toAddress, value) {
    return new Promise(function (resolve, reject) {
        try {
            web3.eth.getBalance(account1).then(function (bal) {
                console.log("u" + bal)
                var balance = web3.utils.fromWei(bal, 'gwei');
                console.log("U" + balance);
                web3.eth.getBlock("latest", false, (error, result) => {
                    var _gasLimit = result.gasLimit;
                    console.log(_gasLimit);
                    //gas limit
                    let contract = new web3.eth.Contract(abi, address);

                    contract.methods.decimals().call({ from: account1 }).then(function (result) {
                        try {
                            var decimals = result;
                            console.log(value);
                            let amount1 = web3.utils.toWei(value.toString(), 'ether');
                            var amount = web3.utils.toBN(amount1);

                            console.log(decimals);
                            //  let amount = parseFloat(value) * Math.pow(10, decimals);
                            //getting correct amt
                            web3.eth.getGasPrice(function (error, result) {
                                var _gasPrice = result;
                                var cost = _gasPrice * 60000;
                                console.log("p" + _gasPrice);
                                //if (balance >= cost) {

                                console.log(account1);
                                try {
                                    const Tx = require('ethereumjs-tx').Transaction; // require('@ethereumjs/tx').Transaction;
                                    const privateKey = Buffer.from(pr1, 'hex')
                                    // var _hex_gasLimit = web3.utils.toHex((_gasLimit + 1000000).toString());
                                    var _hex_gasPrice = web3.utils.toHex(_gasPrice.toString());
                                    var _hex_value = web3.utils.toHex(amount.toString());
                                    var _hex_Gas = web3.utils.toHex('60000');
                                    console.log(_hex_Gas);

                                    web3.eth.getTransactionCount(account1).then(
                                        nonce => {
                                            var _hex_nonce = web3.utils.toHex(nonce);
                                            console.log(_hex_nonce);

                                            const rawTx =
                                            {
                                                nonce: _hex_nonce,
                                                from: account1, //
                                                to: address, //
                                                gasPrice: _hex_gasPrice,
                                                //gasLimit: _hex_gasLimit,
                                                gas: _hex_Gas,
                                                value: '0x0',
                                                data: contract.methods.approve(toAddress, _hex_value).encodeABI()
                                            };
                                            console.log("catch");
                                            const tx = new Tx(rawTx, { chain: 'goerli' });
                                            tx.sign(privateKey);
                                            //console.log(process.env.private1);
                                            var serializedTx = '0x' + tx.serialize().toString('hex');
                                            web3.eth.sendSignedTransaction(serializedTx, function (err, hash) {
                                                if (err) {
                                                    reject(err);
                                                    console.log("catch3");
                                                }
                                                else {
                                                    resolve(hash);
                                                    console.log("Transaction hash " + hash);
                                                }
                                            })
                                        });
                                } catch (error) {
                                    reject(error);
                                }
                            });
                        } catch (error) {
                            reject(error);
                        }
                    });
                });
            })
        } catch (error) {
            reject(error);
        }
    })
}

function depositFor() {
    const depositData = web3.eth.abi.encodeParameter('uint256', "10000000000000000000000")
    return new Promise(function (resolve, reject) {
        try {
            web3.eth.getBalance(account1).then(function (bal) {
                console.log("u" + bal)
                var balance = web3.utils.fromWei(bal, 'gwei');
                console.log("U" + balance);
                web3.eth.getBlock("latest", false, (error, result) => {
                    var _gasLimit = result.gasLimit;
                    console.log(_gasLimit);
                    //gas limit
                    let contract = new web3.eth.Contract(abi, address);

                    contract.methods.decimals().call({ from: account1 }).then(function (result) {
                        try {
                            var decimals = result;
                            //console.log(value);
                            // let amount1 = web3.utils.toWei(value.toString(), 'ether');
                            // var amount = web3.utils.toBN(amount1);

                            console.log(decimals);
                            //  let amount = parseFloat(value) * Math.pow(10, decimals);
                            //getting correct amt
                            web3.eth.getGasPrice(function (error, result) {
                                var _gasPrice = result;
                                var cost = _gasPrice * 60000;
                                console.log("p" + _gasPrice);
                                //if (balance >= cost) {

                                console.log(account1);
                                try {
                                    const Tx = require('ethereumjs-tx').Transaction; // require('@ethereumjs/tx').Transaction;
                                    const privateKey = Buffer.from(pr1, 'hex')
                                    // var _hex_gasLimit = web3.utils.toHex((_gasLimit + 1000000).toString());
                                    var _hex_gasPrice = web3.utils.toHex(_gasPrice.toString());
                                    //var _hex_value = web3.utils.toHex(amount.toString());
                                    var _hex_Gas = web3.utils.toHex('400000');
                                    console.log(_hex_Gas);

                                    web3.eth.getTransactionCount(account1).then(
                                        nonce => {
                                            var _hex_nonce = web3.utils.toHex(nonce);
                                            console.log(_hex_nonce);

                                            const rawTx =
                                            {
                                                nonce: _hex_nonce,
                                                from: account1, //
                                                to: rootchainmanager, //
                                                gasPrice: _hex_gasPrice,
                                                //gasLimit: _hex_gasLimit,
                                                gas: _hex_Gas,
                                                value: '0x0',
                                                data: contract2.methods.depositFor(account1, address, depositData).encodeABI()
                                            };
                                            console.log("catch");
                                            const tx = new Tx(rawTx, { chain: 'goerli' });
                                            tx.sign(privateKey);
                                            //console.log(process.env.private1);
                                            var serializedTx = '0x' + tx.serialize().toString('hex');
                                            web3.eth.sendSignedTransaction(serializedTx, function (err, hash) {
                                                if (err) {
                                                    reject(err);
                                                    console.log("catch3");
                                                }
                                                else {
                                                    resolve(hash);
                                                    console.log("Transaction hash " + hash);
                                                }
                                            })
                                        });
                                } catch (error) {
                                    reject(error);
                                }
                            });
                        } catch (error) {
                            reject(error);
                        }
                    });
                });
            })
        } catch (error) {
            reject(error);
        }
    })
}



//CURRENTLY IGNORE THIS FUNCTION
function exit() {
    return new Promise(function (resolve, reject) {
        try {
            web3.eth.getBalance(account1).then(function (bal) {
                console.log("u" + bal)
                var balance = web3.utils.fromWei(bal, 'gwei');
                console.log("U" + balance);
                web3.eth.getBlock("latest", false, (error, result) => {
                    var _gasLimit = result.gasLimit;
                    console.log(_gasLimit);
                    //gas limit
                    let contract = new web3.eth.Contract(abi, address);

                    contract.methods.decimals().call({ from: account1 }).then(function (result) {
                        try {
                            var decimals = result;
                            // console.log(value);
                            // let amount1 = web3.utils.toWei(value.toString(), 'ether');
                            // var amount = web3.utils.toBN(amount1);

                            console.log(decimals);
                            //  let amount = parseFloat(value) * Math.pow(10, decimals);
                            //getting correct amt
                            web3.eth.getGasPrice(function (error, result) {
                                var _gasPrice = result;
                                var cost = _gasPrice * 60000;
                                console.log("p" + _gasPrice);
                                //if (balance >= cost) {

                                console.log(account1);
                                try {
                                    const Tx = require('ethereumjs-tx').Transaction; // require('@ethereumjs/tx').Transaction;
                                    const privateKey = Buffer.from(pr1, 'hex')
                                    // var _hex_gasLimit = web3.utils.toHex((_gasLimit + 1000000).toString());
                                    var _hex_gasPrice = web3.utils.toHex(_gasPrice.toString());
                                    // var _hex_value = web3.utils.toHex(amount.toString());
                                    var _hex_Gas = web3.utils.toHex('800000');
                                    console.log(_hex_Gas);

                                    web3.eth.getTransactionCount(account1).then(
                                        nonce => {
                                            var _hex_nonce = web3.utils.toHex(nonce);
                                            console.log(_hex_nonce);

                                            const rawTx =
                                            {
                                                nonce: _hex_nonce,
                                                from: account1, //
                                                to: rootchainmanager, //
                                                gasPrice: _hex_gasPrice,
                                                //gasLimit: _hex_gasLimit,
                                                gas: _hex_Gas,
                                                value: '0x0',
                                                data: contract2.methods.exit(data).encodeABI()
                                            };
                                            console.log("catch");
                                            const tx = new Tx(rawTx, { chain: 'goerli' });
                                            tx.sign(privateKey);
                                            //console.log(process.env.private1);
                                            var serializedTx = '0x' + tx.serialize().toString('hex');
                                            web3.eth.sendSignedTransaction(serializedTx, function (err, hash) {
                                                if (err) {
                                                    reject(err);
                                                    console.log("catch3");
                                                }
                                                else {
                                                    resolve(hash);
                                                    console.log("Transaction hash " + hash);
                                                }
                                            })
                                        });
                                } catch (error) {
                                    reject(error);
                                }
                                // }
                                // else {
                                //     console.log("low ether balance to cover gas price")
                                // }
                            });
                        } catch (error) {
                            reject(error);
                        }
                    });
                });
            })
        } catch (error) {
            reject(error);
        }
    })
}

Approve(Erc20Predicate, tokens)
depositFor()
