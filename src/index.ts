const name ="Hyunsoo",
    age = 28,
    gender = "female";

// 함수 표현식
const sayHi = (name:string, age:number, gender?:string): string => { // this means gender parameter is optional.
    return `Hello, ${name}! You are ${age}, and you are a ${gender}.`;
};

sayHi(name, age, gender);
// const sayHi: (name: any, age: any, gender?: any) => void(어떤 유형의 값을 리턴하는지 설정)
// const sayHi: (name: string, age: number, gender?: string) => void

// 함수표현식과 호이스팅. (결론 : 함수표현식은 호이스팅되지 않으므로 사용이 권장된다.)
// 함수 표현식은 호이스팅이 되지 않는다. -> 함수가 정의되기 전에 실행 불가능.
// 함수 선언으로 선언된 함수는 호이스팅 된다. -> 함수가 정의되기 전에 실행이 가능.
// 이러한 함수 호이스팅은 함수를 사용하기 전에 반드시 함수를 선언해야한다는 규칙을 무시하므로 
// 코드 구조를 엉성하게 만들 수 도 있으므로 함수 표현식을 권장한다고 한다. 
// 이러한 내용은 구글에서 만든 자바스크립트 스타일 가이드에도 나와있는데 여기는 함수 표현식도 bad이며 함수 이름이 있는 함수 표현식을 권장한다.

export {}; // typescript 규칙. 이 파일이 (index.ts) 모듈이 된다는걸 이해할 수 있도록 함.   
            // 생략 시 변수의 이름을 설정할 수 없다.