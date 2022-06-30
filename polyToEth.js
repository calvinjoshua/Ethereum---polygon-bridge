"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var maticjs_1 = require("@maticnetwork/maticjs");
var maticjs_web3_1 = require("@maticnetwork/maticjs-web3");
var hdwallet_provider_1 = require("@truffle/hdwallet-provider");
//import HDWalletProvider from "@truffle/hdwallet-provider"
// install web3 plugin
(0, maticjs_1.use)(maticjs_web3_1.Web3ClientPlugin);
var getc = function () { return __awaiter(void 0, void 0, void 0, function () {
    var posClient, childERC20Token, balance, erc20Token, _balance, result1, BurnTxHash, txReceipt1, erc20RootToken, result, txHash, txReceipt;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                posClient = new maticjs_1.POSClient();
                return [4 /*yield*/, posClient.init({
                        network: 'testnet',
                        version: 'mumbai',
                        parent: {
                            provider: new hdwallet_provider_1("9457ec3e596960284cfc70fc7587524a4ef9c613648638df65f58377488209bd", "https://goerli.infura.io/v3/3c4e80fa442740b7b852572c1763b2fa"),
                            defaultConfig: {
                                from: "0x427b3007aa2E26A17F6D3Bc4bd1E4c50350Ca446"
                            }
                        },
                        child: {
                            provider: new hdwallet_provider_1("9457ec3e596960284cfc70fc7587524a4ef9c613648638df65f58377488209bd", "https://matic-mumbai.chainstacklabs.com"),
                            defaultConfig: {
                                from: "0x427b3007aa2E26A17F6D3Bc4bd1E4c50350Ca446"
                            }
                        }
                    })];
            case 1:
                _a.sent();
                childERC20Token = posClient.erc20("0xd8e5e6b2527ac88d2d0509c8de706d0e9abebf87");
                return [4 /*yield*/, childERC20Token.getBalance("0x427b3007aa2e26a17f6d3bc4bd1e4c50350ca446")];
            case 2:
                balance = _a.sent();
                console.log(balance);
                erc20Token = posClient.erc20("0xd8e5e6b2527ac88d2d0509c8de706d0e9abebf87");
                console.log("Erc20 connection positive");
                return [4 /*yield*/, erc20Token.getBalance("0x427b3007aa2e26a17f6d3bc4bd1e4c50350ca446")];
            case 3:
                _balance = _a.sent();
                console.log(_balance);
                // const amountBN = web3.utils.toBN(amount)
                // console.log("ampuntBN positive", amountBN)
                // const amountWei = web3.utils.toWei(amountBN, 'ether')
                console.log("amount", 1000);
                return [4 /*yield*/, erc20Token.withdrawStart(1000)];
            case 4:
                result1 = _a.sent();
                console.log("winthdraw positive");
                return [4 /*yield*/, result1.getTransactionHash()];
            case 5:
                BurnTxHash = _a.sent();
                console.log("burnHash positive", BurnTxHash);
                return [4 /*yield*/, result1.getReceipt()];
            case 6:
                txReceipt1 = _a.sent();
                console.log("recepit", txReceipt1);
                console.log("1");
                erc20RootToken = posClient.erc20("0x78867fD9E8C4A01A7b4d01418799DB96a48ebBAF", true);
                console.log("2");
                return [4 /*yield*/, erc20RootToken.withdrawExit("0x315baf21592913ae82507bbfcdffcadf96a338238754372833b64516dc52bec4")];
            case 7:
                result = _a.sent();
                //const result = await erc20RootToken.withdrawExit("0xf4f429933fd4de76492a856b0ced4a7d4c876ad701f2a4c753974bcc957b576e");
                console.log("3");
                return [4 /*yield*/, result.getTransactionHash()];
            case 8:
                txHash = _a.sent();
                console.log("4");
                return [4 /*yield*/, result.getReceipt()];
            case 9:
                txReceipt = _a.sent();
                console.log("5");
                return [2 /*return*/];
        }
    });
}); };
getc();
