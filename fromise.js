import * as R from 'ramda';
import pipe from './pipe';
import { Either } from './either';

class Fromise extends Promise {
  //eslint-disable-next-line no-useless-constructor
  constructor(...args) {
    super(...args);
  }

  static resolve(arg0) {
    return new Fromise(resolv => resolv(arg0));
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

  ['if'](f0, if_true, if_false) {
    return this.then(value0 => (f0(value0) ? if_true(value0) : if_false(value0)));
  }

  log (f0) {
    return this.then(value0 => f0 ? R.tap(f0(value0)) : R.tap(console.log(value0)));
  }

  either (f0) {
    return this.then( v0 => Either.is(v0) ? Either.of(f0, v0.chain(R.identity)) : Either.of(f0, v0) );
  }

  map (f0) {
    return this.then( v0 => Either.is(v0) ? v0.map(f0) : Either.of(f0, v0));
  }

  fold (f, g) {
    return this.then( v0 => Either.is(v0) ? v0.fold(f, g) : v0 );
  }

  chain (f) {
    return this.then( v0 => Either.is(v0) ? v0.chain(f) : f(v0) );
  }

}

export default Fromise;
