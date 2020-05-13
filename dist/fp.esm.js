import _regeneratorRuntime from '@babel/runtime/regenerator';
import _inherits from '@babel/runtime/helpers/inherits';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _wrapNativeSuper from '@babel/runtime/helpers/wrapNativeSuper';

/* eslint-disable */
var head = function head(iter) {
  return iter.next().value;
};

var empty = /*#__PURE__*/_regeneratorRuntime.mark(function __empty() {
  return _regeneratorRuntime.wrap(function __empty$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
        case "end":
          return _context.stop();
      }
    }
  }, __empty);
})();

var ensure = function ensure(iter) {
  return iter && iter[Symbol.iterator] ? iter[Symbol.iterator]() : empty;
};

var branchBy = function branchBy(value, f) {
  return value instanceof Promise ? value.then(f) : f(value);
};

var accumulate = function accumulate(acc, el, f) {
  return el instanceof Promise ? el.then(function (v) {
    return f(acc, v);
  }, function (e) {
    return Promise.reject(e);
  }) : f(acc, el);
};

var Reduce = function __reduce(f, acc, iter) {
  if (arguments.length === 1) return function () {
    for (var _len = arguments.length, iter = new Array(_len), _key = 0; _key < _len; _key++) {
      iter[_key] = arguments[_key];
    }

    return Reduce.apply(void 0, [f].concat(iter));
  };
  if (arguments.length === 2) return Reduce(f, head(iter = ensure(acc)), iter);
  iter = ensure(iter);
  var el;
  return branchBy(acc, function recursively(acc) {
    while (!(el = iter.next()).done) {
      acc = accumulate(acc, el.value, f);

      if (acc instanceof Promise) {
        return acc.then(recursively);
      }
    }

    return acc;
  });
};

var call = (function (value, f) {
  return f(value);
});

var run = (function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Reduce(call, args);
});

var _pipe = (function (f1) {
  for (var _len = arguments.length, funcs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    funcs[_key - 1] = arguments[_key];
  }

  return function () {
    return Reduce(call, f1.apply(void 0, arguments), funcs);
  };
});

var curry = (function () {
  var _curry1 = function _curry1(fn
  /* variadic number of args */
  ) {
    var args = Array.from(arguments).slice(1);
    return function curried() {
      return fn.apply(this, args.concat(Array.from(arguments)));
    };
  };

  return function curryN(fn, numArgs) {
    numArgs = numArgs || fn.length;
    return function curried() {
      if (arguments.length < numArgs) {
        return numArgs - arguments.length > 0 ? curryN(_curry1.apply(this, [fn].concat(Array.from(arguments))), numArgs - arguments.length) : _curry1.apply(this, [fn].concat(Array.from(arguments)));
      }

      return fn.apply(this, arguments);
    };
  };
})();

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var Maybe = /*#__PURE__*/function () {
  function Maybe(v) {
    _classCallCheck(this, Maybe);

    this._value = v;
  }

  _createClass(Maybe, [{
    key: "isNothing",
    get: function get() {
      return false;
    }
  }, {
    key: "isJust",
    get: function get() {
      return true;
    }
  }], [{
    key: "just",
    value: function just(v) {
      return new Just(v);
    }
  }, {
    key: "nothing",
    value: function nothing() {
      return new Nothing();
    }
  }, {
    key: "fromNullable",
    value: function fromNullable(v) {
      return [null, undefined].some(function (_) {
        return Object.is(v, _);
      }) ? Maybe.nothing(v) : Maybe.just(v);
    }
  }, {
    key: "of",
    value: function of(v) {
      return just(v);
    }
  }]);

  return Maybe;
}();
var Just = /*#__PURE__*/function (_Maybe) {
  _inherits(Just, _Maybe);

  var _super = _createSuper(Just);

  function Just() {
    _classCallCheck(this, Just);

    return _super.apply(this, arguments);
  }

  _createClass(Just, [{
    key: "map",
    value: function map(f) {
      return Maybe.fromNullable(f(this._value));
    }
  }, {
    key: "getOrElse",
    value: function getOrElse() {
      return this._value;
    }
  }, {
    key: "filter",
    value: function filter(f) {
      return Maybe.fromNullable(f(this._value)) ? this._value : null;
    }
  }, {
    key: "chain",
    value: function chain(f) {
      return f(this._value);
    }
  }, {
    key: "toString",
    value: function toString() {
      return "Maybe.Just(".concat(this._value, ")");
    }
  }, {
    key: "value",
    get: function get() {
      return this._value;
    }
  }]);

  return Just;
}(Maybe);
var Nothing = /*#__PURE__*/function (_Maybe2) {
  _inherits(Nothing, _Maybe2);

  var _super2 = _createSuper(Nothing);

  function Nothing() {
    _classCallCheck(this, Nothing);

    return _super2.apply(this, arguments);
  }

  _createClass(Nothing, [{
    key: "map",
    value: function map(f) {
      return this;
    }
  }, {
    key: "getOrElse",
    value: function getOrElse(v) {
      return v;
    }
  }, {
    key: "filter",
    value: function filter(f) {
      return null;
    }
  }, {
    key: "chain",
    value: function chain(f) {
      return this;
    }
  }, {
    key: "toString",
    value: function toString() {
      return "Maybe.Nothing";
    }
  }, {
    key: "value",
    get: function get() {
      throw new TypeError("It's nothing. You can not get from it");
    }
  }, {
    key: "isNothing",
    get: function get() {
      return true;
    }
  }, {
    key: "isJust",
    get: function get() {
      return false;
    }
  }]);

  return Nothing;
}(Maybe);
var lift = curry(function (f, value) {
  return Maybe.fromNullable(value).map(f);
});

function isFunction(f) {
  // eslint-disable-next-line no-var
  var type = Object.prototype.toString.call(f).toLowerCase();
  return type.search(/\bobject\b/g) !== -1 && type.search(/\bfunction\b/g) !== -1;
}

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var identity = function identity(v) {
  return v;
};
var revoke = function revoke() {
  return undefined;
};
var truth = function truth(v) {
  return !!v;
};
var isUndefined = function isUndefined(v) {
  return Object.is(v, undefined);
};
var getOrElse = function getOrElse(value, if_undefined) {
  return isUndefined(value) ? if_undefined : value;
};
var Either = /*#__PURE__*/function () {
  function Either(args) {
    _classCallCheck(this, Either);

    if (!(this instanceof Either ? this.constructor : void 0) || (this instanceof Either ? this.constructor : void 0) === Either) {
      throw new Error("no instanciation allowed for Abstract Class 'Either'");
    }

    this.value = args;
  }

  _createClass(Either, [{
    key: "inspect",
    value: function inspect(f) {
      var _inspect = "".concat(this.constructor.name, "(").concat(this.value, ")");

      Either.of(f, isFunction).fold(function () {
        return f(_inspect);
      }, function () {
        return console.log(_inspect);
      });
      return this;
    }
  }, {
    key: Symbol.iterator,
    value: /*#__PURE__*/_regeneratorRuntime.mark(function value() {
      return _regeneratorRuntime.wrap(function value$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.value;

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, value, this);
    })
  }, {
    key: 'try',
    value: function _try() {
      return this;
    }
  }, {
    key: 'throw',
    value: function _throw() {
      return this;
    }
  }, {
    key: 'catch',
    value: function _catch() {
      return this;
    }
  }, {
    key: 'apply',
    value: function apply() {
      return this;
    }
  }, {
    key: "clone",
    value: function clone() {
      return this;
    }
  }, {
    key: "tap",
    value: function tap() {
      var f = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : console.log;
      f(this.value);
      return this;
    }
  }, {
    key: "of",
    value: function of() {
      return this;
    }
  }, {
    key: "take",
    value: function take() {
      return this;
    }
  }, {
    key: "map",
    value: function map() {
      return this;
    }
  }, {
    key: "chain",
    value: function chain() {
      return this;
    }
  }, {
    key: "filter",
    value: function filter() {
      return this;
    }
  }, {
    key: "fold",
    value: function fold() {
      return this;
    }
  }, {
    key: "done",
    value: function done() {
      return this;
    }
  }, {
    key: "doneIf",
    value: function doneIf() {
      return this;
    }
  }, {
    key: "throwIf",
    value: function throwIf() {
      return this;
    }
  }]);

  return Either;
}();

var Right = /*#__PURE__*/function (_Either) {
  _inherits(Right, _Either);

  var _super = _createSuper$1(Right);

  function Right() {
    _classCallCheck(this, Right);

    return _super.apply(this, arguments);
  }

  _createClass(Right, [{
    key: "of",
    value: function of(v, f) {
      /* use this when you want to change the instance's value */
      if (!isFunction(f)) return Either.right(v);
      /* if 'f' is given */

      return f(v) ? Either.right(v) : Either.left(v);
    }
  }, {
    key: "clone",
    value: function clone(v) {
      return Either.right(getOrElse(v, this.value));
    }
  }, {
    key: "take",
    value: function take() {
      return this.value;
    }
  }, {
    key: "map",
    value: function map(f) {
      return Either.right(f(this.value));
    }
  }, {
    key: "chain",
    value: function chain(f) {
      return f(this.value);
    }
  }, {
    key: "filter",
    value: function filter(f) {
      return Either.of(this.value, f);
    }
  }, {
    key: "fold",
    value: function fold()
    /* for Left, but no_use */
    {
      var f = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : identity;
      return f(this.value);
    }
  }, {
    key: "done",
    value: function done(v) {
      return Either.done(isUndefined(v) ? this.value : v);
    }
  }, {
    key: "doneIf",
    value: function doneIf(f, v) {
      return f(this.value) ? Either.done(getOrElse(v, this.value)) : this;
    }
    /* remember that we not pass 'Error' nor 'Exception', but Right or Left.
     * if 'v' is supplied, it will be thrown to '.catch()' instead of instance's value
     * this is useful when we want to pass some other value based on condition.
     */

  }, {
    key: "throwIf",
    value: function throwIf(f, v) {
      var if_true = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Either.right;
      return f(this.value) ? Either["throw"](if_true(getOrElse(v, this.value))) : this;
    }
  }, {
    key: 'try',
    value: function _try(f) {
      try {
        return Either.right(
        /* if f() returns Promise, be careful to not get 'Unhandled Promise Rejection'
         * you have to attach '.catch()' on Promise when you defined inside f().
         * This is because async function returns Promise always.
         * So this 'try' definition can not be declared as 'async' function.
         */
        f(this.value));
      } catch (e) {
        return Either.left(e);
      }
    }
  }, {
    key: 'throw',
    value: function _throw(f) {
      /* optional 'f' could be used before throwing. (e.g notifying, logging..) */
      if (isFunction(f)) f(this.value);
      /* since only Right can throw, passing value must be of Right */

      return Either["throw"](Either.right(this.value));
    }
  }, {
    key: 'apply',
    value: function apply(o) {
      return o.map(this.value);
    }
  }]);

  return Right;
}(Either); // Class Left


var Left = /*#__PURE__*/function (_Either2) {
  _inherits(Left, _Either2);

  var _super2 = _createSuper$1(Left);

  function Left() {
    _classCallCheck(this, Left);

    return _super2.apply(this, arguments);
  }

  _createClass(Left, [{
    key: "take",
    value: function take() {
      return this.value;
    }
  }, {
    key: "fold",
    value: function fold(no_use) {
      var f = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : identity;
      return f(this.value);
    }
  }]);

  return Left;
}(Either); // 'Throw' is not Error nor Exception. It is carrier for the instance of Right to '.catch()'
// and 'Throw' does ignore all but '.catch()'. ONLY Right can throw.
// NOTE: The return value must be of Right or the caller of '.throw()'


var Throw = /*#__PURE__*/function (_Either3) {
  _inherits(Throw, _Either3);

  var _super3 = _createSuper$1(Throw);

  function Throw(args) {
    _classCallCheck(this, Throw);

    if (!(args instanceof Either)) throw new Error("Throw(): argument must be of Either");
    return _super3.call(this, args);
  }

  _createClass(Throw, [{
    key: 'catch',
    value: function _catch(handler) {
      /* WARNING: Be careful in handler. If 'handler' is omitted, there will be no problem.
       * but if it is given, it must return Right or Left. Otherwiase, chain will be broken. */
      return isFunction(handler) ? handler(this.value) : this.value;
    }
  }, {
    key: "tap",
    value: function tap() {
      var f = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : console.log;

      (function recur(obj) {
        return obj && obj instanceof Either && obj.value instanceof Either ? recur(obj.value) : f(obj.value);
      })(this);

      return this;
    }
  }, {
    key: "inspect",
    value: function inspect(f) {
      var _inspect = function recur(obj) {
        return obj instanceof Either ? "".concat(obj.constructor.name, "(").concat(recur(obj.value), ")") : "".concat(obj);
      }(this);

      Either.of(f, isFunction).fold(function () {
        return f(_inspect);
      }, function () {
        return console.log(_inspect);
      });
      return this;
    }
  }]);

  return Throw;
}(Either);
/* NOTE: Done is another carrier for Right and Left.
 * Only instance of Done will ignore all method but '.take() & .fold()' */


var Done = /*#__PURE__*/function (_Either4) {
  _inherits(Done, _Either4);

  var _super4 = _createSuper$1(Done);

  function Done(args) {
    _classCallCheck(this, Done);

    if (!(args instanceof Either)) throw new Error("Done(): argument must be of Either");
    return _super4.call(this, args);
  }

  _createClass(Done, [{
    key: "tap",
    value: function tap() {
      var f = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : console.log;

      (function recur(obj) {
        return obj && obj instanceof Either && obj.value instanceof Either ? recur(obj.value) : f(obj.value);
      })(this);

      return this;
    }
  }, {
    key: "fold",
    value: function fold() {
      var f = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : identity;
      var g = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : identity;
      return function recur(obj) {
        return obj && obj instanceof Either && obj.value instanceof Either ? recur(obj.value) : obj.fold(f, g);
      }(this);
    }
  }, {
    key: "inspect",
    value: function inspect(f) {
      var _inspect = function recur(obj) {
        return obj instanceof Either ? "".concat(obj.constructor.name, "(").concat(recur(obj.value), ")") : "".concat(obj);
      }(this);

      Either.of(f, isFunction).fold(function () {
        return f(_inspect);
      }, function () {
        return console.log(_inspect);
      });
      return this;
    }
  }, {
    key: "take",
    value: function take() {
      return function recur(obj) {
        return obj && obj instanceof Either && obj.value instanceof Either ? recur(obj.value) : obj.value;
      }(this);
    }
  }]);

  return Done;
}(Either);

Either.of = function (v, f) {
  var if_true = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Either.right;
  var if_false = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Either.left;
  if (!isFunction(f)) return Either.right(v);
  return f(v) ? if_true(v) : if_false(v);
};

Either.fromNullable = function (v) {
  return Either.of(v, truth);
};

Either.right = curry(function (v) {
  return new Right(v);
});
Either.left = curry(function (v) {
  return new Left(v);
});

Either.filter = function (f) {
  var judge = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : truth;
  var if_true = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Either.right;
  var if_false = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Either.left;
  var v = f();
  return judge(v) ? if_true(v) : if_false(v);
};
/* only '.take()' or '.fold()' handles instance of 'Done' */


Either.done = function (v) {
  var functor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Either.right;
  return new Done(functor(v));
};

Either.doneIf = function (f, v) {
  var functor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Either.right;
  return f(v) ? Either.done(v, functor) : functor(v);
};
/* 'v' must be Right or Left. If it is not of Either, Right(v) will be passed. */


Either["throw"] = function (v) {
  return new Throw(v instanceof Either ? v : Either.right(v));
};
/* `throw` does not mean "throwing Error" but "to carrying Right or Left" */


Either.throwIf = function (f, v) {
  var if_true = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Either.right;
  var if_false = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Either.left;
  return new Throw(f(v) ? if_true(v) : if_false(v));
};
/* WARNING: when 'f' contains Promise, beware to have '.catch()' on Promise.
 * Or Be sure to use 'await' to avoid the Error "Unhandled Promise Rejection" */


Either["try"] = function (f) {
  try {
    return Either.right(f());
  } catch (e) {
    return Either.left(e);
  }
};

Either.is = function (value) {
  return value instanceof Either;
};

var isIterable = function isIterable(arg0) {
  return !!(arg0 instanceof Object && arg0[Symbol.iterator]);
};
var ternary = curry(function (f0, if_true, if_false, v) {
  return f0(v) ? if_true(v) : if_false(v);
});
var sleep = function sleep(msec) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : msec;
  return new Promise(function (resolv) {
    return setTimeout(function () {
      return resolv(value);
    }, msec);
  });
};
var mixin = function mixin() {
  for (var _len = arguments.length, mixins = new Array(_len), _key = 0; _key < _len; _key++) {
    mixins[_key] = arguments[_key];
  }

  return function wapper() {
    var base = function base() {};

    return Object.assign.apply(Object, [base.prototype].concat(mixins));
  }();
};
var attach = function attach(scope, from) {
  for (var _len2 = arguments.length, methods = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    methods[_key2 - 2] = arguments[_key2];
  }

  return methods.reduce(function (mixin, m) {
    mixin[m] = from[m];
    return mixin;
  }, scope);
};
var if_then_else = function if_then_else(condition, if_true) {
  var if_false = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Noop;
  return condition() ? if_true() : if_false();
};
var hasIn = function hasIn() {
  var constraints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return constraints.reduce(function (acc, el) {
    return acc === true ? true : target.includes(el);
  }, false);
};
var Noop = function Noop() {};
var arrayfy = function arrayfy(value) {
  return Array.isArray(value) ? value : [value];
};

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Fromise = /*#__PURE__*/function (_Promise) {
  _inherits(Fromise, _Promise);

  var _super = _createSuper$2(Fromise);

  function Fromise() {
    _classCallCheck(this, Fromise);

    return _super.apply(this, arguments);
  }

  _createClass(Fromise, [{
    key: "pipe",
    value: function pipe() {
      for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
        funcs[_key] = arguments[_key];
      }

      return this.then(function (arg0) {
        return _pipe.apply(void 0, funcs)(arg0);
      });
    }
  }, {
    key: "if",
    value: function _if(f, if_true, if_false) {
      return this.then(function (value0) {
        return f(value0) ? if_true(value0) : if_false(value0);
      });
    }
  }, {
    key: "tap",
    value: function tap() {
      var f = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : console.log;
      return this.then(function (value0) {
        return f(value0), value0;
      });
    }
  }, {
    key: "either",
    value: function either(f) {
      return this.then(function (value) {
        return Either.of(f, value);
      });
    }
  }, {
    key: "map",
    value: function map(f) {
      return this.then(function (v0) {
        return Either.is(v0) ? v0.map(f) : Either.of(f, v0);
      });
    }
  }, {
    key: "fold",
    value: function fold(f, g) {
      return this.then(function (v0) {
        return Either.is(v0) ? v0.fold(f, g) : v0;
      }, function (e0) {
        return Either.is(e0) ? e0.fold(f, g) : e0;
      });
    }
  }, {
    key: "chain",
    value: function chain(f) {
      return this.then(function (v0) {
        return Either.is(v0) ? v0.chain(f) : f(v0);
      });
    }
  }], [{
    key: "resolve",
    value: function resolve(arg0) {
      return new Fromise(function (resolve) {
        return resolve(arg0);
      });
    }
  }, {
    key: "reject",
    value: function reject(arg0) {
      return new Fromise(function (_, reject) {
        return reject(arg0);
      });
    }
  }, {
    key: "isPromise",
    value: function isPromise(v) {
      return v instanceof Promise || v instanceof Fromise;
    }
  }]);

  return Fromise;
}( /*#__PURE__*/_wrapNativeSuper(Promise));

var Any = function Any(x) {
  return {
    x: x,
    concat: function concat(_ref) {
      var y = _ref.x;
      return Any(x || y);
    }
  };
};

Any.empty = function () {
  return Any(false);
};

var All = function All(x) {
  return {
    x: x,
    concat: function concat(_ref2) {
      var y = _ref2.x;
      return Any(x && y);
    }
  };
};

All.empty = function () {
  return All(true);
};

var isFalsy = function isFalsy(v) {
  return [null, undefined, NaN].some(function (_) {
    return Object.is(v, _);
  });
};
var isNotFalsy = function isNotFalsy(v) {
  return !isFalsy(v);
};

var isFalse = (function (v) {
  return [null, undefined, NaN, 0, ""].some(function (_) {
    return Object.is(v, _);
  });
});

var __true = function __true() {
  return true;
};
var __false = function __false() {
  return false;
};

var NOT = function NOT(a) {
  return !a;
};
var OR = function OR(a, b) {
  return a || b;
};
var AND = function AND(a, b) {
  return a && b;
};
var NAND = function NAND(a, b) {
  return !AND(a, b);
};
var NOR = function NOR(a, b) {
  return !OR(a, b);
};
var XOR = function XOR(a, b) {
  return AND(NAND(a, b), OR(a, b));
};
var XNOR = function XNOR(a, b) {
  return !NOR(a, b);
};
var logics = [NOT, OR, AND, NAND, NOR, XOR, XNOR];
var varies = [{
  a: 0,
  b: 0
}, {
  a: 0,
  b: 1
}, {
  a: 1,
  b: 0
}, {
  a: 1,
  b: 1
}];
var chart_dump = logics.map(function (gate) {
  return varies.map(function (test) {
    var result = function (_ref) {
      var a = _ref.a,
          b = _ref.b;
      return gate(a, b);
    }(test);

    var desc = JSON.stringify(test).replace(/a":|b":/g, "").replace(/:|"|\{|\}/g, " ").replace(/\s+/g, " ").replace(/,/g, " |").replace(/true/g, "1 ").replace(/false/g, "0 ");
    return "".concat(gate.name, ":").concat(desc, " \u279C ").concat(result ? 1 : 0, "\n");
  }).join("");
}).join("\n");
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

export { AND, All, Any, Either, Fromise, Just, Maybe, NAND, NOR, NOT, Noop, Nothing, OR, XNOR, XOR, __false, __true, arrayfy, attach, chart_dump, curry, hasIn, identity, if_then_else, isFalse, isFalsy, isFunction, isIterable, isNotFalsy, isUndefined, lift, mixin, _pipe as pipe, Reduce as reduce, revoke, run, sleep, ternary, truth };
//# sourceMappingURL=fp.esm.js.map
