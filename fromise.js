import * as R from 'ramda';
import pipe from './pipe';
import { Either } from './either';

class Fromise extends Promise {

  static resolve(arg0) {
    return new Fromise(resolve => resolve(arg0));
  }

  static reject(arg0) {
    return new Fromise((_, reject)=> reject(arg0));
  }

  static isPromise (v) {
    return (v instanceof Promise) || (v instanceof Fromise);
  }

  pipe (...funcs) {
    return this.then(arg0 => pipe(...funcs)(arg0));
  }

  ['if'](f, if_true, if_false) {
    return this.then(value0 => (f(value0) ? if_true(value0) : if_false(value0)));
  }

  tap (f=console.log) {
    return this.then(value0 => R.tap(f(value0)));
  }

  either (f) {
    return this.then( value => Either.of(f, value) );
  }

  map (f) {
    return this.then( v0 => Either.is(v0) ? v0.map(f) : Either.of(f, v0));
  }

  fold (f, g) {
    return this.then( v0 => Either.is(v0) ? v0.fold(f, g) : v0, e0 => Either.is(e0) ? e0.fold(f, g) : e0 );
  }

  chain (f) {
    return this.then( v0 => Either.is(v0) ? v0.chain(f) : f(v0) );
  }

}

export default Fromise;
