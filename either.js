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

    // eslint-disable-next-line no-use-before-define
    this.throw = v => Throw.create(v||this.value);

    this.catch = (handler=identity) => {
      // eslint-disable-next-line no-use-before-define
      if(!(this instanceof Throw)) return this;

      // When Throw object meet '.catch()', Must throw 'this.value' IF no functional given.
      if(!isFunction(handler)) throw new Error(this.value);

      try {
        return Either.fromNullable(handler(this.value));
      } catch(e) {
        // if we meet exception inside .catch() we have to pass next catch
        // eslint-disable-next-line no-use-before-define
        return Throw.create(e);
      }
    };

    // eslint-disable-next-line no-use-before-define
    this.try = curry(f => f(this.value) ? this.throw() : this);

  }

  // eslint-disable-next-line class-methods-use-this
  inspect () {return `class Either`;}

  map () {return this;}

  chain () {return this;}

  filter() {return this;}

  static is(v) {return (!isFalsy(v) && (v instanceof Either));}

  *[Symbol.iterator]() {yield this.value;}

  fold () {return this.value;}

  tap (f=console.log) {f(this.value); return this;}

  // eslint-disable-next-line no-use-before-define
  done () { return (this instanceof Done) ? this : Either.done( this ); }

  take () { return this.value; }

  rightIf() {return this;}
  leftIf() {return this;}
  doneIf() {return this;}
  chainIf() {return this;}
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
Either.try = R.curry(f => {
  try {
    return Either.right(f());
  } catch(e) {
    return Either.throw(e);
  }
});

// //////////////////
// Class Right
// //////////////////
class Right extends Either {

  constructor(args) {
    super(args);

    this.map = R.curry((f) => {return new this.constructor(f(this.value));});

    this.filter = R.curry(f => Either.of(f, this.value));

  }

  fold (no_use, f=identity) {return f(this.value);}

  chain (f=Either.right) {return f(this.value);}

  inspect() {return `Right(${JSON.stringify(this.value)})`;}
}

// Class Left
class Left extends Either {

  // eslint-disable-next-line no-useless-constructor
  constructor(args) {super(args);}

  fold (f=identity) {return f(this.value);}

  inspect () {return `Left(${JSON.stringify(this.value)})`;}
}

// class Throw
class Throw extends Either {

  // eslint-disable-next-line no-useless-constructor
  constructor(args) {
    super(args);

    this.throw = () => this;
  }

  // To make stack trace, use try-catch
  static create(v) {
    try {
      throw new Throw(v);
    } catch(th) {
      return th;
    }
  }

  fold () {throw new Error(this.value);}

  inspect() {return `Throw(${JSON.stringify(this.value)})`;}

  throwIf() { return this;}

  take () {throw new Error(this.value);}
}

// class Done
class Done extends Either {

  // eslint-disable-next-line no-useless-constructor
  constructor(args) {
    if(!(args instanceof Either)) throw new Error(`argument must be of Either`);
    super(args);

    this.throw = () => this;
    this.cath = () => this;
  }

  throwIf() { return this;}

  fold (f=identity, g=identity) {
    return (function recur(obj) {
      return (obj && (obj instanceof Either) && (obj.value instanceof Either)) ? recur(obj.value) : obj.fold(f, g);
    })(this);
  }

  inspect() {
    return (function recur(obj) {
      return (obj instanceof Either) ? `${obj.constructor.name}(${recur(obj.value)})` : `${obj}`;
    })(this);
  }

  // Done 객체는 오직 take() 메소드에 의해서만 처리된다
  // 아무리 중첩된 객체라고 해도, 원래의 값을 리턴하게 한다
  take () {
    return (function recur(obj) {
      return (obj && (obj instanceof Either) && (obj.value instanceof Either)) ? recur(obj.value) : obj.value;
    })(this);
  }
}

export const tryCatch = R.curry((f, v) => {
  try {
    return new Right(f(v));
  } catch(e) {
    return new Left(e);
  }
});
