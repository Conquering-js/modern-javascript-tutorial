# 함수 바인딩

## this란 무엇인가?

### 메서드의 this

메서드가 실행되는 객체

```js
const 객체 = {
    callFunc: function () {
        // 이 부분의 this는 "객체"
    }
}

    객체.callFunc(); // 객체가 메서드의 this
```

### 함수의 this

전역 객체

```js
const hi = "bye"

 function 함수 () {
     console.log(this.hi);
 }

    함수(); // 전역 객체가 호출된다. => bye
```

### 메서드 내의 함수의 this

```js
const hi = 'no Bye';

const 객체 = {
    hi: 'bye',
    callFunc: function () {
        console.log(this.hi);

        function sayBye() {
            console.log(this.hi);
        }

        sayBye();
    }
}

    객체.callFunc(); // 객체가 메서드의 this => 'bye' 'no Bye'
```

### 화살표 함수의 this

화살표 함수는 this가 존재하지 않는다.
만약에 화살표 함수 내에서 this를 호출한다면 가장 가까운 this를 호출해요.

```js
const 객체 = {
    hi: 'bye',
    callFunc: function () {
        console.log(this.hi);

        const sayBye = () => {
            console.log(this.hi);
        }

        sayBye();
    }
}

    객체.callFunc(); // 객체가 메서드의 this => 'bye';
```

## this 바인딩

this를 명시적으로 설정해서 함수를 호출하는 것

```js
const 객체 = {
    hi: 'bye',
    }
}

 function 함수 () {
     console.log(this.hi);
 }

    함수.call(객체, ...인자들); // bye  => 바로 함수실행이 됨
    함수.apply(객체, [...인자들]); // bye  => 바로 함수실행이 됨
    const 새로운함수 = 함수.bind(객체); // 새로운 함수를 반환

    새로운함수(); // bye
```


## 부분적용함수

```js
const 객체 = {
    hi: function(a,b,c) {
        return a + b + c;
    },
}

 function 함수 (a,b,c) {
     console.log(this.hi(a,b,c));
 }

    const 새로운함수 = 함수.bind(객체); // 새로운 함수를 반환

    const a = 1;
    const b = 5;
    const c = 3;

    새로운함수(a,b,c); // 9

    const 부분적용함수 = 함수.bind(객체, 2, 8); // 새로운 함수를 반환

    부분적용함수(a);  // 11

    // function 부분적용함수(a) {
    //     return 새로운함수(2,8,a);
    // }
```

### 화살표함수는 arguments가 없다

유사 배열 객체 arguments가 없다.
부모 스코프의 arguments를 참조한다.

```js 
const winner = () => {
     const winName = arguments[0];
     console.log(`${winName} was the winner`);
};

//이렇게 작성하면 
//arguments is not defined 오류 

const winner = (...args) => {
     const winName = args[0];
     console.log(`${winName} was the winner`);
};

const winner = function()  {
     const winName = arguments[0];
     console.log(`${winName} was the winner`);
};

```
