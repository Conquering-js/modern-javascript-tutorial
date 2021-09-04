# 에러 핸들링

1. try, catch, finally 가 어떻게 동작하는가?

- try 안에 코드를 실행하고 만약 에러가 발생한다면 catch에서 에러를 인자로 받아서 어떤 형식으로 보여줄까를 정하고 반환해준다. finally 마지막에 무조건 실행하는 코드를 정의한다.

```js
function func() {
  try {
    return 1;
  } catch (e) {
    /* ... */
  } finally {
    alert( 'finally' );
  }
}

alert( func() );
```

2. 에러객체에서 중요한 프로퍼티 2개는?

- message, name

3. try catch 는 컴파일 타임에 동작한다. O,X

- X
