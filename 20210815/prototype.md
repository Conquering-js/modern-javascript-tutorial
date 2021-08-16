# 프로토타입과 프로토타입 상속

## 프로토타입

1. object에서 프로퍼티를 읽을 때 해당 프로퍼티가 없다면?
    - 객체에 __proto__를 사용해서 프로퍼티를 읽는다.
2. __proto__는 표준인가?
    - 브라우저에서 표준으로 동작하지 않는다.
    - [[prototype]]을 정식 표준이다. -> ES6+
3. new F()를 이용해서 새로운 객체를 만들었을 때 F.prototype은 어떤 역할을 하나요? 
    - 새롭게 생성된 객체를 설정한다. -> Function -> Object
4. prototype 체인 상에서 중복된 메서드가 있을 때, 메서드를 호출하면 어떤 메서드가 실행되나요?

```js
const a = {
    hi: function() {
        console.log('1');
    }
}

const d = {
    __proto__: a,
    hi: function() {
        console.log('2');
    }
};

d.hi();
```

```js
function User(name) {
    this.name = name;

    constructor (name) {
        this.name = name;
    }
}
User.prototype = {};

let user = new User('hi');
let user2 = new user.constructor('wow');

console.log(user2.name); // undefined
console.log(user2); // hi
```

- 폴리필이란?
  - 브라우저에서 동작을 할 때 구현되지 않은 문법을 구현 가능하도록 만들어주는것

5. 내장 객체의 메서드는 각 내장 객체의 프로토타입에 저장된다.
6. 모든 내장 객체는 Object.prototype을 상속 받는다.
7. 무엇과 무엇은 레퍼 객체가 없나요? null, undefined
