import R from 'ramda';
import pipe from './pipe';

class Fromise extends Promise {
  constructor(...args) {
    super(...args);
  }
  
  static resolve(arg0) {
    return new Fromise((resolv, reject)=> resolv(arg0))
  }
  
  static reject(arg0) {
    return new Fromise((resolv, reject)=> reject(arg0))
  }
  
  pipe (...funcs) {
     return this.then((arg0) => pipe(...funcs)(arg0));
  }
  
  ternary(f0, if_true, if_false) {
     return this.then((value0) => f0(value0) ? if_true(value0) : if_false(value0));
  }
  
  fold () {
    return this.then(([arg0]) => arg0);
  }
  
  log (f0) {
    return this.then(value0 => f0 ? R.tap(f0(value0)) : R.tap(console.log(value0)));
  }
}

export default Fromise;
