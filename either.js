import * as R from 'ramda';
import isFunction from './isFunction';
import isFalsy from './isFalsy';

export const identity = v => v;

export const revoke = () => undefined;

export const truth = v => !!v;

// TODO: .bind(this)
export class Either {
  constructor(args) {
    if(!new.target || new.target === Either) {
      throw new Error(`no instanciation allowed for Abstract Class 'Either'`);
    }
    this.value = args;

    this.try = curry(f => f(this.value) ? this.throw() : this).bind(this);
    this.throw = v => Either.throw(v||this.value);
    this.catch = (handler=identity) => {
      if(!(this instanceof Throw)) return this;
      if(!isFunction(handler)) throw new Error(this.value);

      try {
        return Either.fromNullable(handler(this.value));
      } catch(e) {
        // if we meet exception inside .catch() we have to pass next catch
        return Either.throw(e);
      }
    };

  }

  inspect (f) {const _inspect=`${this.constructor.name}(${this.value})`; return isFunction(f) ? f(_inspect) : _inspect;}

  map () {return this;}

  chain () {return this;}

  filter() {return this;}

  *[Symbol.iterator]() {yield this.value;}

  fold () {return this.value;}

  tap (f=console.log) {f(this.value); return this;}

  // eslint-disable-next-line no-use-before-define
  done () { return (this instanceof Done) ? this : Either.done( this ); }

  take () { return this.value; }

  rightIf() {return this;}

  leftIf() {return this;}

  doneIf() {return this;}

};

Either.of = R.curry((cond, v) =>  cond(v) ? Either.right(v) : Either.left(v));
Either.right = R.curry(v => new Right(v));
Either.left = R.curry(v => new Left(v));
Either.done = R.curry(v => new Done(v));
Either.throw = R.curry(v => new Throw(v));
Either.fromNullable = R.curry(v => isFalsy(v) ? Either.left(v) : Either.right(v));
Either.rightIf = R.curry((f, v) => f(v) ? Either.right(v) : Either.left(v));
Either.leftIf = R.curry((f, v) => f(v) ? Either.left(v) : Either.right(v));
Either.doneIf = R.curry((f, v) => f(v) ? Either.done(Either.right(v)) : Either.right(v));
Either.throwIf = R.curry((f, v) => f(v) ? Either.throw(Either.right(v)) : Either.right(v));
Either.try = R.curry(f => {try {return Either.right(f());} catch(e) {return Either.throw(e);}});

// //////////////////
// Class Right
// //////////////////
class Right extends Either {

  constructor(args) {
    super(args);

  }

  map (f) {return Either.right(f(this.value));}

  filter (f) { return Either.of(f, this.value);}

  fold (no_use, f=identity) {return f(this.value);}

  chain (f) {return f(this.value);}

  leftIf (f) {return f(this.value) ? Either.left(this.value) : this;}

  doneIf (f) {return f(this.value) ? Either.done(this.value) : this;}

}

// Class Left
class Left extends Either {

  constructor(args) {
    super(args);

  }

  fold (f=identity) {return f(this.value);}

  rightIf (f) {return f(this.value) ? Either.right(this.value) : this;}

  doneIf (f) {return f(this.value) ? Either.done(this.value) : this;}
}

// class Throw
class Throw extends Either {

  // eslint-disable-next-line no-useless-constructor
  constructor(args) {
    super(args);

    this.try = () => this;
    this.throw = () => this;
  }

  fold () {throw new Error(this.value);}

  throwIf() { return this;}

  take () {throw new Error(this.value);}
}

// class Done
class Done extends Either {

  // eslint-disable-next-line no-useless-constructor
  constructor(args) {
    if(!(args instanceof Either)) throw new Error(`argument must be of Either`);
    super(args);

    this.try = () => this;
    this.throw = () => this;
    this.catch = () => this;
  }

  throwIf() { return this;}

  fold (f=identity, g=identity) {
    return (function recur(obj) {
      return (obj && (obj instanceof Either) && (obj.value instanceof Either)) ? recur(obj.value) : obj.fold(f, g);
    })(this);
  }

  inspect(f) {
    const _inspect = (function recur(obj) {
      return (obj instanceof Either) ? `${obj.constructor.name}(${recur(obj.value)})` : `${obj}`;
    })(this);
    return isFunction(f) ? f(_inspect) : _inspect;
  }

  // Done 객체는 오직 take() 메소드에 의해서만 처리된다
  // 아무리 중첩된 객체라고 해도, 원래의 값을 리턴하게 한다
  take () {
    return (function recur(obj) {
      return (obj && (obj instanceof Either) && (obj.value instanceof Either)) ? recur(obj.value) : obj.value;
    })(this);
  }
}

