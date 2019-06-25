import * as R from 'ramda';
import isFunction from './isFunction';

export const identity = v => v;
export const revoke = () => undefined;
export const truth = v => !!v;
export const isUndefined = v => Object.is(v, undefined);

export class Either {
  constructor(args) {
    if(!new.target || new.target === Either) {
      throw new Error(`no instanciation allowed for Abstract Class 'Either'`);
    }
    this.value = args;
  }

  inspect (f) {
    const _inspect=`${this.constructor.name}(${this.value})`;
    Either.of(f, isFunction).fold(() => f(_inspect), () => console.log(_inspect));
    return this;
  }

  *[Symbol.iterator]() {yield this.value;}

  ['try'] () {return this;}

  ['throw'] () {return this;}

  ['catch'] () {return this;}

  ['clone'] () {return this;}

  ['apply'] () {return this;}

  tap (f=console.log) {f(this.value); return this;}

  of () {return this;}

  take () {return this;}

  map () {return this;}

  chain () {return this;}

  filter() {return this;}

  fold () {return this;}

  done () {return this;}

  doneIf() {return this;}

  throwIf () { return this; }
};

Either.of = (v, f) =>  isFunction(f) ? (f(v) ? Either.right(v) : Either.left(v)) : Either.right(v);
Either.fromNullable = v => Either.of(v, truth);
Either.filter = (f, cond=truth) => {
  const v = f();
  return cond(v) ? Either.right(v) : Either.left(v);
};
Either.right = R.curry(v => new Right(v));
Either.left = R.curry(v => new Left(v));
Either.done = v => new Done(Either.right(v));
Either.doneIf = (f, v) => {return f(v) ? Either.done(v) : Either.right(v); };
Either.throw = v => new Throw(Either.right(v));
Either.throwIf = (f, v) => f(v) ? new Throw(Either.right(v)) : Either.right(v);
Either.try = (f)  => {
  try {return Either.right(f());} catch(e) {return Either.left(e);}
};


class Right extends Either {

  constructor(args) {
    super(args);

  }

  ['try'] (f) { try {return Either.right(f(this.value));} catch(e) {return Either.left(e);} }

  ['throw'] () {return Either.throw(this.value);}

  ['clone'] (v) {return Either.right(isUndefined(v) ? this.value : v);}

  ['apply'] (o) {return o.map(this.value);}

  of (v, f) {return isFunction(f) ? (f(v) ? Either.right(v) : Either.left(v)) : Either.right(v);}

  take () {return this.value;}

  map (f) {return Either.right(f(this.value));}

  chain (f) {return f(this.value);}

  filter (f) { return Either.of(this.value, f);}

  fold (f=identity, no_use) {return f(this.value);}

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

  fold (no_use, f=identity) {return f(this.value);}
}

// 'Throw' is not Error nor Exception. It is carrier for the instance of Right to '.catch()'
// and 'Throw' does ignore all but '.catch()'. ONLY Right can throw.
// NOTE: The return value must be of Right or the caller of '.throw()'
class Throw extends Either {
  constructor(args) {
    if(!(args instanceof Either)) throw new Error(`Throw() needs instance of Either`);
    super(args);

  }

  ['catch'] (handler) {
    return isFunction(handler) ? this.value.map(handler) : this.value;
  }

  tap (f=console.log) {
    (function recur(obj) {
      return (obj && (obj instanceof Either) && (obj.value instanceof Either)) ? recur(obj.value) : f(obj.value);
    })(this);
    return this;
  }

  inspect (f) {
    const _inspect = (function recur(obj) {
      return (obj instanceof Either) ? `${obj.constructor.name}(${recur(obj.value)})` : `${obj}`;
    })(this);
    Either.of(f, isFunction).fold(() => f(_inspect), () => console.log(_inspect));
    return this;
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

  inspect (f) {
    const _inspect = (function recur(obj) {
      return (obj instanceof Either) ? `${obj.constructor.name}(${recur(obj.value)})` : `${obj}`;
    })(this);
    Either.of(f, isFunction).fold(() => f(_inspect), () => console.log(_inspect));
    return this;
  }

  take () {
    return (function recur(obj) {
      return (obj && (obj instanceof Either) && (obj.value instanceof Either)) ? recur(obj.value) : obj.value;
    })(this);
  }
}