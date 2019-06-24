## FPJS

A simple package for learning functional programming.

Introduce in [Medium post](https://medium.com/@andrwj/either-implementation-that-is-throwable-and-catchable-5b0015f4b6e3)


## Installation

`npm install @andrwj/fp`


## Usage (Not fully documented yet)
* In command line:
`node -r esm --harmony ./index.js`

* In ReactJS/VueJS: `import * as FP from '@andrwj/fp/FP'`

## Either
### static methods
* `Either.of(value, f)` - `f` is optional
* `Either.fromNullable(value)`
* `Either.filter(f, condition_f=truth)` - `condition_f` is optional
* `Either.right(value)`
* `Either.left(value)`
* `Either.done(value)`
* `Either.doneIf(f, value)`
* `Either.throw(value)`
* `Either.throwIf(f, value)`
* `Either.try(f)`

### instance methods for Right
  * `.inspect(f)`
  * `.try(f)`
  * `.throw()`
  * `.tap(f=console.log)`
  * `.take(f)`
  * `.map(f)`
  * `.chain(f)`
  * `.filter(f)`
  * `.fold(_right, _left)`
  * `.done()`
  * `.doneIf(f)`
  * `.throwIf(f, value)`
  * `.apply( instance_of_Either )`

### instance methods for Left
  * `.inspect(f)`
  * `.tap(f=console.log)`
  * `.take(f)`
  * `.fold(_right, _left)`

### NOTE
  * All methods work for Right only.
  * Only Right can `.throw()` or `.done()`
  * Basically Left will skip most methods except `inspect, tap, take, fold`
  * If you `throw()`, execution flow goes until find `.catch()`
  * If you `done()`, execution flow goes until find `.fold()` or `.take()`
  * If there is no exception in `try(f)`, return value will be of **Right**. If Exception occurs, then the return value will be of **Left**.

## Fromise (Experimental; Promimse + Either)
  * `Fromise.resolve (expr)`
  * `Fromise.reject (expr)`
  * `Fromise.isPromise (value)`
  * `.pipe (...funcs)`
  * `.if (f_condition, if_true, if_false)`
  * `.tap (f)`
  * `.either (f)`
  * `.map (f)`
  * `.fold (f, g)`
  * `.chain (f)`

## High Order Functions (Not fully documented yet)
 * `run(v, f1, f2, f3, ... ) : value`
 * `pipe(f1, f2, f3, ...) : function`
 
## Utilities (Not fully documented yet)
 * `isFunction (v)` - return true if `v` is function
 * `isFalsy (v)` - true if `v` is one of `undefined`, `NaN`, `null`
 * `isFalse (v)` - true if `v` is one of `undefined`, `NaN`, `null`, `0`, `""`
 * `identity (v)` - returns `v`, always.

## Changes

### `v0.2.0` (break changes to version of `0.1.*` )
* changed arguments order and way: `Either.of(f, value)` ➡ `Either.of(value, f)` - if `f` is not given, it just returns `Right(value)`. Otherwise, it returns `Right(value)` or `Left(value)` depends on the boolean result of `f(value)`
* changed arguments: `.catch(f, condition_f)` ➡ `.catch(f)` - if `f` is not given, it returns the instance of thrown from `.throw()`. Otherwise it returns `.map(f)`
* added: `.of(value, f)` - same as `Either.of(value, f)`
* added: `isNotFalsy(v) : boolean `
