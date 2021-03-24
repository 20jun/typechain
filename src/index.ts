// 인터페이스는 Javascript에서는 작동하지 않고, Typescript에서만 작동함!
// interface Human {
//     name : string;
//     age : number;
//     gender : string;
// }

import { Z_HUFFMAN_ONLY } from "zlib";

class Human {
    public name : string; // 이 클래스 속성의 이름인 name은
    public age : number;
    public gender : string;
    // constructor(method) : class 내에서 객체를 생성하고 초기화하기 위한 특별한 method
    // 클래스가 시작할 때마다 호출(클래스로부터 객체를 만들 때 마다)
    constructor(name : string, age : number, gender : string) {
        // 같은 속성의 이름을 argument로 줌
        // 클래스 속성의 이름인 name은 생성자(constructor)의 name과 같다
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const lynn = new Human('Lynn', 18, 'female');
const jun = new Human('jun', 20, 'male');
// sayHi(parameter?) <<== 처럼 파라미터 뒤에 ? 붙이면 선택적(넣어도 되고, 안넣어도 되고~)
//                    arguments의 유형                         반환의 유형
const sayHi = (person : Human) : string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
};

// void는 빈 공간 같은거
console.log(sayHi(jun));

export {};