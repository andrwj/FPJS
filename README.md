## FPJS

A Functional tool set for my own learning FP style.
Implemented by referring many other's source.

Introduced the beginning of this repository in [Medium post](https://medium.com/@andrwj/either-implementation-that-is-throwable-and-catchable-5b0015f4b6e3)


## Installation

`npm install @andrwj/fp`



## Either
### static methods
* `Either.of(value, f)`
* `Either.fromNullable(value)`
* `Either.filter(f, condition_f=truth)` - `condition_f` is optional
* `Either.right(value)`
* `Either.left(value)`
* `Either.done(value)`
* `Either.doneIf(f, value)`
* `Either.throw(value)` - this throws `Right(value)` not Error instnace !!! and then only .`catch()` handle the passed `Right`
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
  * `throw()` does not throw Error. It is deliver of `Right` to `.catch()`.
  * If you `throw()`, execution flow goes until find `.catch()`
  * If you `done()`, execution flow goes until find `.fold()` or `.take()`
  * If there is no exception in `try(f)`, return value will be of **Right**. If Exception occurs, then the return value will be of **Left**.
  * If you do not want to get **Unhandled Promise Rejection Error** in `.try(f)`, you HAVE TO deal with its logic of `f` yourself. The unhandled error is not because of `.try()` but because of your misunderstanding of Promise chain.

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

## Logic Gates
 * `import {NOT, OR, AND, NAND, NOR, XOR, XNOR, chart_dump} from FPJS;`

## Test Source Codes with RunJS


```
// use loader.js for local developing
// for example:
import {Either} from '/Users/andrwj/Develops/FPJS/FPJS/loader';


```


## Changes

### `v0.2.4` Published compiled source by Babel7

### `v0.2.0` break changes to version of `0.1.*`
* changed arguments order and way: `Either.of(f, value)` ➡ `Either.of(value, f)` - if `f` is not given, it just returns `Right(value)`. Otherwise, it returns `Right(value)` or `Left(value)` depends on the boolean result of `f(value)`
* changed arguments: `.catch(f, condition_f)` ➡ `.catch(f)` - if `f` is not given, it returns the instance of thrown from `.throw()`. Otherwise it returns `.map(f)`
* added: `.of(value, f)` - same as `Either.of(value, f)`
* added: `isNotFalsy(v) : boolean `
