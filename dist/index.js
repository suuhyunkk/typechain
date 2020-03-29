"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
class Block {
    constructor(// 생성자 함수 정의. (first run)
    index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
Block.calculateBlockHash = (// static function : class 외부, 객체가 생성되기 전에도 호출 가능한 함수로 정의하겠습니다.
index, previousHash, timestamp, data) => { return CryptoJS.SHA256(index + previousHash + timestamp + data).toString(); };
// Block.calculateBlockHash(); static 함수여서 여기서 호출 가능해.
const genesisBlock = new Block(0, "FREDSF_30432", "", "first block", 12345);
let blockChain = [genesisBlock]; // Block[] means Array of Block(type)
console.log(blockChain);
const getBlockChain = () => blockChain; // it means funcName: "getBlockChain",
// parameter: none, return value type: Block[] (블럭타입의 배열), return: blockChain
const getLatestBlock = () => blockChain[blockChain.length - 1];
const getNewTimeStamp = () => Math.round(new Date().getTime() / 1000);
const createNewBlock = (data) => {
    const previousBlock = getLatestBlock();
    const newIndex = previousBlock.index + 1;
    const newTimeStamp = getNewTimeStamp();
    const newHash = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimeStamp, data);
    const newBlock = new Block(newIndex, newHash, previousBlock.hash, data, newTimeStamp);
    blockChain.push(newBlock);
    return newBlock;
};
console.log(createNewBlock("hello"), createNewBlock("byebye"));
//# sourceMappingURL=index.js.map