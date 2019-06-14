import * as R from 'ramda';
import isFunction from './isFunction';
import isFalsy from './isFalsy';

export const identity = v => v;
export const revoke = () => undefined;
export const truth = v => !!v;
export const isUndefined = v => isUndefined(v);

// TODO: .bind(thiisUndefined(v) ? s)
export class Either {
  constructor(args) {
    if(!new.target || new.target === Either) {
      throw new Error(`no instanciation allowed for Abstract Class 'Either'`);
    }
    this.value = args;

    this.throw = () => this;
    this.catch = () => this;
    this.clone = () => this;
  }

  inspect (f) {const _inspect=`${this.constructor.name}(${this.value})`; return isFunction(f) ? f(_inspect) : _inspect;}

  *[Symbol.iterator]() {yield this.value;}

  tap (f=console.log) {f(this.value); return this;}

  take () {return this;}

  map () {return this;}

  chain () {return this;}

  filter() {return this;}

  fold () {return this;}

  done () {return this;}

  doneIf() {return this;}

  throwIf () { return this; }
};

Either.of = R.curry((cond, v) =>  cond(v) ? Either.right(v) : Either.left(v));
Either.fromNullable = v => Either.of(isFalsy, v);
Either.filter = (f, cond=truth) => {
  const v = f();
  return cond(v) ? Either.right(v) : Either.left(v);
};
Either.right = R.curry(v => new Right(v));
Either.left = R.curry(v => new Left(v));
Either.done = v => new Done(Either.right(v));
Either.throw = v => new Throw(Either.right(v));


class Right extends Either {

  constructor(args) {
    super(args);

    this.throw = () => Either.throw(this.value);
    this.clone = v => Either.right(isUndefined(v) ? this.value : v);

  }


  take () {return this.value;}

  map (f) {return Either.right(f(this.value));}

  chain (f) {return f(this.value);}

  filter (f) { return Either.of(f, this.value);}

  fold (no_use, f=identity) {return f(this.value);}

  done (v) { return Either.done(isUndefined(v) ? this.value : v); }

  doneIf (f, v) {return f(this.value) ? Either.done(isUndefined(v) ? this.value : v) : this;}

  throwIf (f, v) { return f(this.value) ? Either.throw(isUndefined(v) ? this.value : v) : this; }
}

// Class Left
class Left extends Either {

  constructor(args) {
    super(args);

  }

  take () {return this.value;}

  fold (f=identity) {return f(this.value);}
}

// 'Throw' is not Error nor Exception. It is carrier for the instance of Right to '.catch()'
// and 'Throw' does ignore all but '.catch()'. ONLY Right can throw.
// NOTE: The return value must be of Right or the caller of '.throw()'
class Throw extends Either {
  constructor(args) {
    if(!(args instanceof Either)) throw new Error(`Throw() needs instance of Either`);
    super(args);

    this.catch = (handler=identity, cond=truth) => {
      if(!isFunction(handler))  return this;
      return Either.of(truth, handler(this.value.take()));
    };
  }

}

// NOTE: Done is another carrier for Right and Left. Only instance of Done will ignore all method but '.take() & .fold()'
class Done extends Either {

  constructor(args) {
    if(!(args instanceof Either)) throw new Error(`argument must be of Either`);
    super(args);

  }

  // for DEBUGGING
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

  take () {
    return (function recur(obj) {
      return (obj && (obj instanceof Either) && (obj.value instanceof Either)) ? recur(obj.value) : obj.value;
    })(this);
  }
}
