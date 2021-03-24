import * as CryptoJS from 'crypto-js';

class Block {
    static calculateBlockHash = (
        index : number, 
        previousHash : string, 
        timestamp : number, 
        data : string
        ) : string => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();


    static validateStructure = (aBlock : Block) : boolean => 
    typeof aBlock.index === "number" && 
    typeof aBlock.hash === "string" && 
    typeof aBlock.previousHash === "string" &&
    typeof aBlock.timestamp === "number" &&
    typeof aBlock.data === "string";

    public index : number;
    public hash : string;
    public previousHash : string;
    public data : string;
    public timestamp : number;

    constructor(
        index : number,
        hash : string,
        previousHash : string,
        data : string,
        timestamp : number
    ) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}


const genesisBlock : Block = new Block(0, "20202020", "", "Hello", 123456);

// 쉽게 설명하면, 블록체인은 하나의 장부입니다.
// 거래를 할 때마다 장부 안의 내역을 기록하는데,
// 장부 안의 거래 내역을 블록이라고 합니다.
// 새로운 거래가 생길때 마다 하나의 블록이 생기는데,
// 이러한 블록으로 이루어진 장부를 다른 사람들과 공유하는 것이 블록체인입니다.

let blockchain : Block[] = [genesisBlock];

const getBlockchain = () : Block[] => blockchain;

const getLatestBlock = () : Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = () : number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data : string) : Block => {
    const previousBlock : Block = getLatestBlock();
    const newIndex : number = previousBlock.index + 1;
    const newTimestamp : number = getNewTimeStamp();
    const newHash : string = Block.calculateBlockHash(
        newIndex, 
        previousBlock.hash, 
        newTimestamp,
        data 
    );
    const newBlock : Block = new Block(
        newIndex, 
        newHash, 
        previousBlock.hash, 
        data, 
        newTimestamp
    );
    addBlock(newBlock);
    return newBlock;
};

const getHashforBlock = (aBlock : Block) : string => Block.calculateBlockHash(aBlock.index, aBlock.previousHash, aBlock.timestamp, aBlock.data);

const isBlockValid = (candidateBlock : Block, previousBlock : Block) : boolean => {
    if(!Block.validateStructure(candidateBlock)) {
        return false;
    }
    else if(previousBlock.index + 1 !== candidateBlock.index) {
        return false;
    }
    else if(previousBlock.hash !== candidateBlock.previousHash) {
        return false;
    }
    else if(getHashforBlock(candidateBlock) !== candidateBlock.hash) {
        return false;
    }
    else {
        return true;
    }
};

const addBlock = (candidateBlock : Block) : void => {
    if(isBlockValid(candidateBlock, getLatestBlock())) {
        blockchain.push(candidateBlock);
    }
};

createNewBlock("second block");
createNewBlock("third block");
createNewBlock("fourth block");

console.log(blockchain);
export {};