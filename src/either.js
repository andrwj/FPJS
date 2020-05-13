import curry from './curry';
import isFunction from './isFunction';

export const identity = v => v;
export const revoke = () => undefined;
export const truth = v => !!v;
export const isUndefined = v => Object.is(v, undefined);
export const getOrElse = (value, if_undefined) => isUndefined(value) ? if_undefined : value;

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
};

class Right extends Either {

   of (v, f) {
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
