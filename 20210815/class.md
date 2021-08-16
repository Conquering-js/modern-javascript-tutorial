# 클래스

## 클래스와 기본문법

1. 클래스가 단순한 편의 문법이 아닌 이유는 무엇인가요?
    - 특수 내부 프로퍼티인 [[FunctionKind]]:"classConstructor"가 붙는다.
    - 클래스 메서드는 열거가 안된다.
    - 클래스는 항상 엄격 모드로 실행된다.
2. class가 객체 기반
3. class는 fuction 타입
4. 순수 함수란?  동일한 인풋일때 동일한 출력, 사이드 이펙트가 존재하지 않는것
 
5. 일반 함수와 클래스 키워드를 사용하여 new 했을 때 차이점은?
    - class는 new 생성자로 만들어주지 않으면 오류가 난다.
    - 일반함수는 내부 프로퍼티로 저장되는데 class는 constructor로 저장된다.


```js
class AA {
    constructor (name) {
        this.name = name
    }

    changeName () {
        this.name = 'hi'
    }
}

class BB extends AA {
    constructor () {
        super();
    }

    changeName () {
        this.name = ''
    }
}


const bb = new BB();
BB.changeName();
console.log(BB.name);

```