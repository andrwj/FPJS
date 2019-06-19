## FPJS

A simple package for learning functional programming.

Introduce in [Medium post](https://medium.com/@andrwj/either-implementation-that-is-throwable-and-catchable-5b0015f4b6e3)


## Installation

`npm install @andrwj/fp`


## Usage (Not fully documented yet)


### Either
  * map(f)
  * chain(f)
  * tap(f)
  * filter(f)
  * clone(v)
  * take(f)
  * fold(f, g)
  * done(f)
  * doneIf(f)
  * try()
  * throwIf(f)
  * inspect(f)
  * tap(f)

### 주의사항
	* `done()`을 쓰면 반드시 어딘가에 `take()` 혹은 `fold()`를 써야 한다

### Fromise (Promimse + Either)

### run
### pipe
### Utilities
