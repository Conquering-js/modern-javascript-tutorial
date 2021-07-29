## 순회용 반복문과 메소드
1. foreach
```js
[10, 20, 30].forEach((value, index, array)=>{ 
    console.log(`${index} : ${value}`); // 0 : 10, 1 : 20, 2: 30  
})
```
- 배열 순회 전용 메소드(Map, Set 등에서도 지원)
- 콜백함수의 매개변수로 `value에 요소값, index에 인덱스, array에 원본 배열`이 들어온다.

2. for...in
```js
const obj = { 
    name: 'kyeongwoo', 
    job: 'developer' 
} 
    
for (const key in obj){ 
    console.log(`${key} : ${obj[key]}`); 
} // name : kyeongwoo // job : developer
```
- 객체의 프로퍼티 키 열거 전용
- [[Enumerable]] 값이 `true`인 `열거형 속성`만 반복한다.

3. for...of
```js
const arr = [10, 20, 30]; 

for (const item of arr){ 
    console.log(item); 
    // 10, 20, 30 출력 
}
```
- `[Symbol.iterator]` 속성을 가지는 컬렉션 전용
- 이터러블에는 `String, Array, Map, Set, DOM컬렉션(HTMLColletion, NodeList)` 등이 있다.


4. Object 객체 Method - `객체 순회 전용`

    - Object.keys(객체) - 객체의 프로퍼티 키를 배열로 반환
    - Object.values(객체) - 객체의 프로퍼티 값을 배열로 반환
    - Object.entries(객체) - 객체의 프로퍼티 [키, 값]을 배열로 반환