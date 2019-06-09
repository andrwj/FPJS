## FPJS

함수형 프로그래밍을 학습하기 위한 짜집기된 유틸리티 패키지.



## 설치

`npm install @andrwj/fp`



## 사용

### Either

```javascript
import _ from 'lodash';
immport R from 'ramda';
import { Either } from '@andrwj/fp';


const value = 10;

const e = Either.of(_.isNumber, value)
  .map(x => x - 12983)
  .map(x => x / 12983)
  .chain(Either.of(x => x>0))
  .map(x => x * 1000)
  .fold(() => 0, R.identity)   

console.log(e); // 0

```

아래와 동일

```javascript
const value = 10;

if( _isNumber(value) ) {
  let x = value - 12983;
  x = x / 12983;
  if( x > 0 ) {
    return x * 1000;
  } else {
    return 0;
  }
} else {
  return 0;
}

```


### Fromise (Promimse + Either)

```javascript
import { Fromise } from '@andrwj/fp';

const value = 10;

Fromise.resolve(value)
  .either(_.isNumber)       // Right(10)
  .map(x => x - 1)          // Right(9)
  .map(x => x / 10)         // Right(0.9)
  .pipe(
      x => x + 0.1,         // Right(1.0)
      x => x + 999)         // Right(1000.0)
  .either(x => x < 1000)    // Left(1000)
  .fold(() => 0, () => 999) // 0
  .then(x => x + 1)         // 1
  .if( x => !!x, 
      () => 'ok', 
      () => 'error')        // true
  .log()                    // 'ok'
  .catch( e => console.log(`Error: ${e}`));


const sleep = (sec, value=sec) => new Fromise((resolve, reject) => {
  setTimeout(() => resolve(value), sec * 1000);
});
sleep(1).then(R.tap(console.log)); // 1
```

### tryCatch  (return Either)

```javascript

tryCatch(x => x / 0, 10)
  .fold(() => 'error', () => 'ok');  // 'error'

```


### run


### pipe


## Utilities

### list
`list(1,2,3,4,5)` // [1,2,3,4,5]


### isIterable( o )

`isIterable([ ]);` // true

### ternary( condition, ifTrue, ifFalse )


### sleep(msec, value)


### mixin


### attach



