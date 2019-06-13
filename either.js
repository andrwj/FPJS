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

    this.try = () => this;
    this.throw = () => this;
    this.catch = () => this;

  }

  inspect (f) {const _inspect=`${this.constructor.name}(${this.value})`; return isFunction(f) ? f(_inspect) : _inspect;}

  map () {return this;}

  chain () {return this;}

  filter() {return this;}

  *[Symbol.iterator]() {yield this.value;}

  fold () {return this;}

  tap (f=console.log) {f(this.value); return this;}

  take () { return this.value; }

  done () {return this;}

  doneIf() {return this;}

  throwIf () { return this; }
};

Either.of = R.curry((cond, v) =>  cond(v) ? Either.right(v) : Either.left(v));
Either.filter = (f) => {
  const v = f();
  return v ? Either.right(v) : Either.left(v);
};
Either.right = R.curry(v => new Right(v));
Either.left = R.curry(v => new Left(v));
Either.done = (o) => {
  if(o instanceof Either) return new Done(o);
  throw new Error(`Either.done() needs instance of Either class`);
}
Either.throw = (v) => new Throw(v); // 절대 직접 호출하지 말 것
Either.excepsion = (v) => new Excepsion(v);
Either.fromNullable = (v) => isFalsy(v) ? Either.left(v) : Either.right(v);
Either.rightIf = R.curry((f, v) => f(v) ? Either.right(v) : Either.left(v));
Either.leftIf = R.curry((f, v) => f(v) ? Either.left(v) : Either.right(v));
Either.doneIf = R.curry((f, v) => f(v) ? Either.done(Either.right(v)) : Either.right(v));
Either.throwIf = R.curry((f, v) => f(v) ? Either.throw(Either.right(v)) : Either.right(v));
Either.try = (f) => {
  try {return Either.right(f());} catch(e) {return Either.excepsion(e);}
};

// //////////////////
// Class Right
// //////////////////
class Right extends Either {

  constructor(args) {
    super(args);

    this.try = (f) => {
      try {return Either.right(f(this.value));} catch(e) {return Either.excepsion(e);}
    };
    this.throw = () => Either.throw(this.value);
  }


  map (f) {return Either.right(f(this.value));}

  chain (f) {return f(this.value);}

  filter (f) { return Either.of(f, this.value);}

  fold (no_use, f=identity) {return f(this.value);}

  done () { return Either.done( this ); }

  doneIf (f) {return f(this.value) ? Either.done(this) : this;}

  throwIf (f) { return f(this.value) ? Either.throw(Either.right(this.value)) : Either.right(this.value); }
}

// Class Left
class Left extends Either {

  constructor(args) {
    super(args);

    this.throw = () => this;
  }

  fold (f=identity) {return f(this.value);}

  done () { return Either.done( this ); }

  doneIf (f) {return f(this.value) ? Either.done(this) : this;}
}

// class Throw.
class Throw extends Either {
  constructor(args) {
    super(args);

    this.try = () => this;
    this.throw = () => this;
    this.catch = (handler=identity, cond=truth) => {
      if(!isFunction(handler))  return this;
      try {
        return Either.of(truth, handler(this.value.take()));
      } catch(e) {
        return Either.excepsion(e);
      }
    };

  }

  throwIf() { return this;}
}

// class Excepsion
class Excepsion extends Either {
  constructor(args) {
    super(args);

    this.catch = (handler=identity, cond=truth) => {
      if(!isFunction(handler)) throw new Error(this.value);
      try {
        return Either.of(truth, handler(this.value));
      } catch(e) {
        // if we meet exception inside .catch() we have to pass next catch
        return Either.excepsion(e);
      }
    };

  }

  take  () {throw new Error(this.value);}
}

// class Done
class Done extends Either {

  // eslint-disable-next-line no-useless-constructor
  constructor(args) {
    if(!(args instanceof Either)) throw new Error(`argument must be of Either`);
    super(args);

  }

  tap (f=console.log) {
    (function recur(obj) {
      return (obj && (obj instanceof Either) && (obj.value instanceof Either)) ? recur(obj.value) : f(obj.value);
    })(this);
    return this;
  }

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
