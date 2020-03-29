import * as CryptoJS from "crypto-js";

class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    static calculateBlockHash = ( // static function : class 외부, 객체가 생성되기 전에도 호출 가능한 함수로 정의하겠습니다.
        index:number, 
        previousHash:string, 
        timestamp:number,
        data:string
        ):string => { return CryptoJS.SHA256(index + previousHash + timestamp + data).toString();}
        
    constructor( // 생성자 함수 정의. (first run)
        index: number,
        hash: string,
        previousHash: string,
        data: string,
        timestamp: number
    ) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;     
    }
}

// Block.calculateBlockHash(); static 함수여서 여기서 호출 가능해.

const genesisBlock:Block = new Block(0, "FREDSF_30432", "", "first block", 12345);

let blockChain:Block[] = [genesisBlock]; // Block[] means Array of Block(type)

console.log(blockChain);

const getBlockChain = ():Block[] => blockChain; // it means funcName: "getBlockChain",
                                                // parameter: none, return value type: Block[] (블럭타입의 배열), return: blockChain

const getLatestBlock = () : Block => blockChain[blockChain.length -1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data:string) : Block => {
    const previousBlock: Block = getLatestBlock();
    const newIndex: number = previousBlock.index + 1;
    const newTimeStamp: number = getNewTimeStamp();
    const newHash: string = Block.calculateBlockHash(
        newIndex, 
        previousBlock.hash,
        newTimeStamp,
        data
    );
    const newBlock: Block = new Block(
        newIndex,
        newHash,
        previousBlock.hash,
        data,
        newTimeStamp
    );

    blockChain.push(newBlock);
    
    return newBlock;
}

console.log(createNewBlock("hello"), createNewBlock("byebye"));

export{};
