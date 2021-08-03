# 함수 심화학습

## 객체로써의 함수와 기명 함수 표현식

1. 기명함수가 유용한 경우: 재귀로 사용할 때 유용하다.
왜냐하면 이름으로 호출할 수 있으니까.
2. 자바스크립트 함수의 다형성을 구현하는 방법:

    ```js
    function aa() {

    }

    let bb = function x() {
    
    };

    const cc = () => {
        function a() {
            
        }

        a();
    };

    a(); // error! 

    ```

3. 기명 함수 표현식 사용 이유: 이름을 사용해서 어디서든지 호출하고 싶어서

## new function

1. 장점은? 어떤 문자열도 함수로 바꿀수 있다. 런타임에서 새로운 함수를 만들수 있다.
2. 일반함수와 비교해 차이점은? 렉시컬환경이 전역객체다.

## setTimeout과 setInterval을 이용한 호출 스케줄링

비동기를 설명할 때 가장 많이 나온다.

1. 둘의 차이점은?
    - setTimeout: 일정시간 지난 후에 콜백 함수 실행
    - setInterval: 일정시간 마다 콜백 함수 실행
2. 중첩 setTimeout이 setInterval에 비해 가지는 장점
    - 유용하게 시간을 조절할 수 있다.
3. 스케줄링 메서드에 명시된 시간이 보장되지 않는 경우 세가지는?
    - CPU가 과부하 상태인 경우
    - 브라우저 탭이 백그라운드 모드인 경우
    - 노트북이 배터리에 의존해서 구동 중인 경우

4. 중첩 setTimeout과 setInterval 을 이용하여 1초마다 작업을 수행한다고 했을 때, 차이점은 무엇일까요?
    - 1+실행+1+실행+1 => 중첩 setTimeout
    - 1+1+1 => setInterval

## call/apply와 데코레이터, 포워딩

this 바인딩 메서드 

1. call과 apply 메서드는 무슨 일을 하는가?
    - call은 this를 묶어서 함수 실행을 해준다. 그리고 인수들을 차례로 받는다.  
    - apply은 this를 묶어서 함수 실행을 해준다. 그리고 유사 배열 객체를 인수로 받는다.  

this 자신이 속한 객체를 가리킨다.

- 메서드로서의 this: 자신이 호출된 객체를 가리킨다. 
- 함수의 this: 전역객체를 가리킨다. 

```js
// 메서드의 this
const hello = {
    callThis: function () {
        console.log(this);
    }
};

hello.callThis();  // this => hello

function bye() {
    console.log(this);
}

bye(); //this => 전역객체 

// 메서드 내의 함수의 this 
const helloToo = {
    callThis: function () {

        function a () {
            console.log(this);
        }

        a();
    }
};

helloToo.callThis(); // 전역객체

```

- 다른언어의 this =>  생성자를 가리킨다.
- 요즘에는 화살표 함수를 쓴다. this가 없어서 그냥 무조건 자신의 바로 밖 가장 가까운 this를 사용한다.
- 화살표 함수는 훨씬 직관적이고 간결해진다. () => { };
- 부분 적용 함수

const callArray = {
    1: () => console.log('1'),
    2: () => console.log('2'),
    3: () => console.log('3'),
}

callArray['1'];
