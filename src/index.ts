// sayHi(parameter?) <<== 처럼 파라미터 뒤에 ? 붙이면 선택적(넣어도 되고, 안넣어도 되고~)
//                    arguments의 유형                         반환의 유형
const sayHi = (name : string, age : number, gender : string) : string => {
    return `Hello ${name}, you are ${age}, you are a ${gender}`;
};

// void는 빈 공간 같은거
console.log(sayHi("Youngjun", 28, "male"));

export {};