'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/* eslint-disable */
const head = iter => (iter.next()).value;
const empty = (function* __empty(){})();
const ensure = iter => (iter && iter[Symbol.iterator]) ? iter[Symbol.iterator]() : empty;
const branchBy = (value, f) => (value instanceof Promise) ? value.then(f) : f(value);
const accumulate = (acc, el, f) => (el instanceof Promise) ? el.then(v => f(acc, v), e=>Promise.reject(e)) : f(acc, el);
const Reduce = function __reduce(f, acc, iter) {
  if(arguments.length === 1) return (...iter) => Reduce(f, ...iter);
  if(arguments.length === 2) return Reduce(f, head(iter=ensure(acc)), iter);
  iter = ensure(iter);
  let el;
  return branchBy(acc, function recursively(acc) {
    while(!(el=iter.next()).done) {
	    acc = accumulate(acc, el.value, f);
	    if(acc instanceof Promise) {
        return acc.then(recursively);
      }
    }
    return acc;
  });
};

var call = (value, f) => f(value);

var run = (...args) => Reduce(call, args);

var pipe = (f1, ...funcs) => (...args) => Reduce(call, f1(...args), funcs);

var curry = (function () {
   const _curry1 = function (fn /* variadic number of args */) {
      const args = Array.from(arguments).slice(1);
      return function curried() {
         return fn.apply(this, args.concat(Array.from(arguments)));
      };
   };
   return function curryN(fn, numArgs) {
      numArgs = numArgs || fn.length;
      return function curried() {
         if (arguments.length < numArgs) {
            return numArgs - arguments.length > 0
               ? curryN(
                    _curry1.apply(this, [fn].concat(Array.from(arguments))),
                    numArgs - arguments.length
                 )
               : _curry1.apply(this, [fn].concat(Array.from(arguments)));
         }
         return fn.apply(this, arguments);
      };
   };
})();

class Maybe {
   constructor(v) {
      this._value = v;
   }

   static just(v) {
      return new Just(v);
   }

   static nothing() {
      return new Nothing();
   }

   static fromNullable(v) {
      return [null, undefined].some((_) => Object.is(v, _))
         ? Maybe.nothing(v)
         : Maybe.just(v);
   }

   static of(v) {
      return just(v);
   }

   get isNothing() {
      return false;
   }

   get isJust() {
      return true;
   }
}

class Just extends Maybe {
   constructor(v) {
      super(v);
   }

   get value() {
      return this._value;
   }

   map(f) {
      return Maybe.fromNullable(f(this._value));
   }

   getOrElse() {
      return this._value;
   }

   filter(f) {
      return Maybe.fromNullable(f(this._value)) ? this._value : null;
   }

   chain(f) {
      return f(this._value);
   }

   toString() {
      return `Maybe.Just(${this._value})`;
   }
}

class Nothing extends Maybe {
   constructor(v) {
      super(v);
   }

   map(f) {
      return this;
   }

   get value() {
      throw new TypeError("It's nothing. You can not get from it");
   }

   getOrElse(v) {
      return v;
   }

   filter(f) {
      return null;
   }

   chain(f) {
      return this;
   }

   toString() {
      return "Maybe.Nothing";
   }

   get isNothing() {
      return true;
   }

   get isJust() {
      return false;
   }
}

const lift = curry((f, value) => Maybe.fromNullable(value).map(f));

function isFunction(f) {
  // eslint-disable-next-line no-var
  var type = Object.prototype.toString.call(f).toLowerCase();
  return (type.search(/\bobject\b/g) !== -1 && type.search(/\bfunction\b/g) !== -1);
}

const identity = v => v;
const revoke = () => undefined;
const truth = v => !!v;
const isUndefined = v => Object.is(v, undefined);
const getOrElse = (value, if_undefined) => isUndefined(value) ? if_undefined : value;

class Either {
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

  ['apply'] () {return this;}

  clone () {return this;}

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
}
Either.of = (v, f, if_true=Either.right, if_false=Either.left) => {
  if( !isFunction(f) ) return Either.right(v);
  return f(v) ? if_true(v) : if_false(v);
};

Either.fromNullable = v => Either.of(v, truth);

Either.right = curry( v => new Right(v) );

Either.left = curry( v => new Left(v) );

Either.filter = (f, judge=truth, if_true=Either.right, if_false=Either.left) => {
  const v = f();
  return judge(v) ? if_true(v) : if_false(v);
};

/* only '.take()' or '.fold()' handles instance of 'Done' */
Either.done = (v, functor=Either.right) => new Done( functor(v) );

Either.doneIf = (f, v, functor=Either.right) => { return f(v) ? Either.done(v, functor) : functor(v); };

/* 'v' must be Right or Left. If it is not of Either, Right(v) will be passed. */
Either.throw = v => new Throw( (v instanceof Either) ? v : Either.right(v) );

/* `throw` does not mean "throwing Error" but "to carrying Right or Left" */
Either.throwIf = (f, v, if_true=Either.right, if_false=Either.left) => new Throw(f(v) ? if_true(v) : if_false(v));

/* WARNING: when 'f' contains Promise, beware to have '.catch()' on Promise.
 * Or Be sure to use 'await' to avoid the Error "Unhandled Promise Rejection" */
Either.try = (f)  => {
  try {
    return Either.right(f());
  } catch(e) {
    return Either.left(e);
  }
};

Either.is = value => (value instanceof Either);

class Right extends Either {

  of (v, f, if_true=Either.right, if_false=Either.left) {
    /* use this when you want to change the instance's value */
    if( !isFunction(f) ) return Either.right(v);

    /* if 'f' is given */
    return f(v) ? Either.right(v) : Either.left(v);
  }

  clone (v) {return Either.right( getOrElse(v, this.value) );}

  take () {return this.value;}

  map (f) {return Either.right( f(this.value) );}

  chain (f) {return f(this.value);}

  filter (f) {return Either.of( this.value, f );}

  fold ( /* for Right */f=identity /* for Left, but no_use */) { return f(this.value); }

  done (v) { return Either.done(isUndefined(v) ? this.value : v); }

  doneIf (f, v) { return f(this.value) ? Either.done( getOrElse(v, this.value) ) : this;}

  /* remember that we not pass 'Error' nor 'Exception', but Right or Left.
   * if 'v' is supplied, it will be thrown to '.catch()' instead of instance's value
   * this is useful when we want to pass some other value based on condition.
   */
  throwIf (f, v, if_true=Either.right) {
    return f(this.value) ? Either.throw( if_true(getOrElse(v, this.value)) ) : this;
  }

  ['try'] (f) {
    try {
      return Either.right(
        /* if f() returns Promise, be careful to not get 'Unhandled Promise Rejection'
         * you have to attach '.catch()' on Promise when you defined inside f().
         * This is because async function returns Promise always.
         * So this 'try' definition can not be declared as 'async' function.
         */
        f(this.value)
      );
    } catch(e) {
      return Either.left(e);
    }
  }

  ['throw'] (f) {
    /* optional 'f' could be used before throwing. (e.g notifying, logging..) */
    if( isFunction(f) ) f(this.value);

    /* since only Right can throw, passing value must be of Right */
    return Either.throw( Either.right(this.value) );
  }

  ['apply'] (o) {
    return o.map(this.value);
  }

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
    if(!(args instanceof Either)) throw new Error(`Throw(): argument must be of Either`);
    super(args);
  }

  ['catch'] (handler) {
    /* WARNING: Be careful in handler. If 'handler' is omitted, there will be no problem.
     * but if it is given, it must return Right or Left. Otherwiase, chain will be broken. */
    return isFunction(handler) ? handler(this.value) : this.value;
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

/* NOTE: Done is another carrier for Right and Left.
 * Only instance of Done will ignore all method but '.take() & .fold()' */
class Done extends Either {

  constructor(args) {
    if(!(args instanceof Either)) throw new Error(`Done(): argument must be of Either`);
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

const isIterable = (arg0) =>
   !!(arg0 instanceof Object && arg0[Symbol.iterator]);

const ternary = curry((f0, if_true, if_false, v) =>
   f0(v) ? if_true(v) : if_false(v)
);

const sleep = (msec, value = msec) =>
   new Promise((resolv) => setTimeout(() => resolv(value), msec));

const mixin = (...mixins) =>
   (function wapper() {
      const base = function base() {};
      return Object.assign(base.prototype, ...mixins);
   })();

const attach = (scope, from, ...methods) =>
   methods.reduce((mixin, m) => {
      mixin[m] = from[m];
      return mixin;
   }, scope);

const if_then_else = (condition, if_true, if_false = Noop) =>
   condition() ? if_true() : if_false();

const hasIn = (constraints = [], target = []) => {
   return constraints.reduce((acc, el) => {
      return acc === true ? true : target.includes(el);
   }, false);
};

const Noop = () => {};

const arrayfy = (value) => (Array.isArray(value) ? value : [value]);

class Fromise extends Promise {
   static resolve(arg0) {
      return new Fromise((resolve) => resolve(arg0));
   }

   static reject(arg0) {
      return new Fromise((_, reject) => reject(arg0));
   }

   static isPromise(v) {
      return v instanceof Promise || v instanceof Fromise;
   }

   pipe(...funcs) {
      return this.then((arg0) => pipe(...funcs)(arg0));
   }

   ["if"](f, if_true, if_false) {
      return this.then((value0) =>
         f(value0) ? if_true(value0) : if_false(value0)
      );
   }

   tap(f = console.log) {
      return this.then((value0) => (f(value0), value0));
   }

   either(f) {
      return this.then((value) => Either.of(f, value));
   }

   map(f) {
      return this.then((v0) => (Either.is(v0) ? v0.map(f) : Either.of(f, v0)));
   }

   fold(f, g) {
      return this.then(
         (v0) => (Either.is(v0) ? v0.fold(f, g) : v0),
         (e0) => (Either.is(e0) ? e0.fold(f, g) : e0)
      );
   }

   chain(f) {
      return this.then((v0) => (Either.is(v0) ? v0.chain(f) : f(v0)));
   }
}

const Any = x => ({x, concat: ({x: y})=>Any(x || y)}); Any.empty = () => Any(false);
const All = x => ({x, concat: ({x: y})=>Any(x && y)}); All.empty = () => All(true);

const isFalsy = v => [null, undefined, NaN].some(_=>Object.is(v, _));
const isNotFalsy = v => !isFalsy(v);

var isFalse = v => [null, undefined, NaN, 0, ''].some(_=>Object.is(v, _));

const __true = () => true;
const __false = () => false;

const NOT = (a) => !a;
const OR = (a, b) => a || b;
const AND = (a, b) => a && b;
const NAND = (a, b) => !AND(a, b);
const NOR = (a, b) => !OR(a, b);
const XOR = (a, b) => AND(NAND(a,b), OR(a,b));
const XNOR = (a, b) => !NOR(a, b);

const logics = [NOT, OR, AND, NAND, NOR, XOR, XNOR];
const varies = [ { a: 0, b: 0 }, { a: 0, b: 1 }, { a: 1,	b: 0 }, { a: 1,	b: 1 } ];
const chart_dump = logics.map(gate => varies.map((test) => {
  const result = (({ a, b }) => gate(a, b))(test);
  const desc = JSON.stringify(test)
        .replace(/a":|b":/g, '')
        .replace(/:|"|\{|\}/g, ' ')
        .replace(/\s+/g, ' ')
        .replace(/,/g, ' |')
        .replace(/true/g, '1 ')
        .replace(/false/g, '0 ');
  return `${gate.name}:${desc} ➜ ${result ? 1 : 0}\n`;
}).join('')).join('\n');


/**
   NOT: 0 | 0  ➜ 1
   NOT: 0 | 1  ➜ 1
   NOT: 1 | 0  ➜ 0
   NOT: 1 | 1  ➜ 0

   OR: 0 | 0  ➜ 0
   OR: 0 | 1  ➜ 1
   OR: 1 | 0  ➜ 1
   OR: 1 | 1  ➜ 1

   AND: 0 | 0  ➜ 0
   AND: 0 | 1  ➜ 0
   AND: 1 | 0  ➜ 0
   AND: 1 | 1  ➜ 1

   NAND: 0 | 0  ➜ 1
   NAND: 0 | 1  ➜ 1
   NAND: 1 | 0  ➜ 1
   NAND: 1 | 1  ➜ 0

   NOR: 0 | 0  ➜ 1
   NOR: 0 | 1  ➜ 0
   NOR: 1 | 0  ➜ 0
   NOR: 1 | 1  ➜ 0

   XOR: 0 | 0  ➜ 0
   XOR: 0 | 1  ➜ 1
   XOR: 1 | 0  ➜ 1
   XOR: 1 | 1  ➜ 0

   XNOR: 0 | 0  ➜ 0
   XNOR: 0 | 1  ➜ 1
   XNOR: 1 | 0  ➜ 1
   XNOR: 1 | 1  ➜ 1
*/

exports.AND = AND;
exports.All = All;
exports.Any = Any;
exports.Either = Either;
exports.Fromise = Fromise;
exports.Just = Just;
exports.Maybe = Maybe;
exports.NAND = NAND;
exports.NOR = NOR;
exports.NOT = NOT;
exports.Noop = Noop;
exports.Nothing = Nothing;
exports.OR = OR;
exports.XNOR = XNOR;
exports.XOR = XOR;
exports.__false = __false;
exports.__true = __true;
exports.arrayfy = arrayfy;
exports.attach = attach;
exports.chart_dump = chart_dump;
exports.curry = curry;
exports.hasIn = hasIn;
exports.identity = identity;
exports.if_then_else = if_then_else;
exports.isFalse = isFalse;
exports.isFalsy = isFalsy;
exports.isFunction = isFunction;
exports.isIterable = isIterable;
exports.isNotFalsy = isNotFalsy;
exports.isUndefined = isUndefined;
exports.lift = lift;
exports.mixin = mixin;
exports.pipe = pipe;
exports.reduce = Reduce;
exports.revoke = revoke;
exports.run = run;
exports.sleep = sleep;
exports.ternary = ternary;
exports.truth = truth;
//# sourceMappingURL=fp.cjs.js.map
