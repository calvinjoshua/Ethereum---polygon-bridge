import { POSClient,use } from "@maticnetwork/maticjs"
import { Web3ClientPlugin } from '@maticnetwork/maticjs-web3'
import HDWalletProvider from "@truffle/hdwallet-provider"
//import HDWalletProvider from "@truffle/hdwallet-provider"


// install web3 plugin
use(Web3ClientPlugin);


const getc = async() => {


const posClient = new POSClient();
await posClient.init({
    network: 'testnet',
    version: 'mumbai',
     parent: {
        provider: new HDWalletProvider("9457ec3e596960284cfc70fc7587524a4ef9c613648638df65f58377488209bd", "https://goerli.infura.io/v3/3c4e80fa442740b7b852572c1763b2fa"),
        defaultConfig: {
            from: "0x92b508777377412ff8BC08A299c8770DE2f57B08"
        }
    },
    child: {
        provider: new HDWalletProvider("9457ec3e596960284cfc70fc7587524a4ef9c613648638df65f58377488209bd",  "https://matic-mumbai.chainstacklabs.com"),
        defaultConfig: {
            from: "0x92b508777377412ff8BC08A299c8770DE2f57B08"
        }
    }
});

const childERC20Token = posClient.erc20("0xd8e5e6b2527ac88d2d0509c8de706d0e9abebf87");
const balance = await childERC20Token.getBalance("0x427b3007aa2e26a17f6d3bc4bd1e4c50350ca446");
console.log(balance)

const erc20Token = posClient.erc20("0xd8e5e6b2527ac88d2d0509c8de706d0e9abebf87");
console.log("Erc20 connection positive")
const _balance = await erc20Token.getBalance("0x427b3007aa2e26a17f6d3bc4bd1e4c50350ca446");
console.log(_balance)

// const amountBN = web3.utils.toBN(amount)
// console.log("ampuntBN positive", amountBN)
// const amountWei = web3.utils.toWei(amountBN, 'ether')
console.log("amount", 1000)

const result1 = await erc20Token.withdrawStart(1000);
console.log("winthdraw positive")
const BurnTxHash = await result1.getTransactionHash();
console.log("burnHash positive", BurnTxHash)
const txReceipt1 = await result1.getReceipt();
console.log("recepit", txReceipt1)

console.log("1")
const erc20RootToken = posClient.erc20("0x78867fD9E8C4A01A7b4d01418799DB96a48ebBAF", true);
console.log("2")
const result = await erc20RootToken.withdrawExit(BurnTxHash.toString());

//const result = await erc20RootToken.withdrawExit("0xf4f429933fd4de76492a856b0ced4a7d4c876ad701f2a4c753974bcc957b576e");
console.log("3")
const txHash = await result.getTransactionHash();
console.log("4")
const txReceipt = await result.getReceipt();
console.log("5")
//console.log("thanks you jesus", txHash)
}

getc()