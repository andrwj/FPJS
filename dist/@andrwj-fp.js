/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(10);

var assertThisInitialized = __webpack_require__(11);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(7);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(2);

var setPrototypeOf = __webpack_require__(7);

var isNativeFunction = __webpack_require__(12);

var construct = __webpack_require__(13);

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),
/* 10 */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(7);

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(5);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// CONCATENATED MODULE: ./reduce.js


/* eslint-disable */
var head = function head(iter) {
  return iter.next().value;
};

var empty =
/*#__PURE__*/
regenerator_default.a.mark(function __empty() {
  return regenerator_default.a.wrap(function __empty$(_context) {
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

/* harmony default export */ var reduce = (Reduce);
// CONCATENATED MODULE: ./call.js
/* harmony default export */ var call = (function (value, f) {
  return f(value);
});
// CONCATENATED MODULE: ./run.js


/* harmony default export */ var run = (function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return reduce(call, args);
});
// CONCATENATED MODULE: ./pipe.js


/* harmony default export */ var pipe_0 = (function (f1) {
  for (var _len = arguments.length, funcs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    funcs[_key - 1] = arguments[_key];
  }

  return function () {
    return reduce(call, f1.apply(void 0, arguments), funcs);
  };
});
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(3);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(2);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(4);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(0);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(1);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_isPlaceholder.js
function _isPlaceholder(a) {
       return a != null && typeof a === 'object' && a['@@functional/placeholder'] === true;
}
// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_curry1.js


/**
 * Optimized internal one-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || _isPlaceholder(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
}
// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_arity.js
function _arity(n, fn) {
  /* eslint-disable no-unused-vars */
  switch (n) {
    case 0:
      return function () {
        return fn.apply(this, arguments);
      };
    case 1:
      return function (a0) {
        return fn.apply(this, arguments);
      };
    case 2:
      return function (a0, a1) {
        return fn.apply(this, arguments);
      };
    case 3:
      return function (a0, a1, a2) {
        return fn.apply(this, arguments);
      };
    case 4:
      return function (a0, a1, a2, a3) {
        return fn.apply(this, arguments);
      };
    case 5:
      return function (a0, a1, a2, a3, a4) {
        return fn.apply(this, arguments);
      };
    case 6:
      return function (a0, a1, a2, a3, a4, a5) {
        return fn.apply(this, arguments);
      };
    case 7:
      return function (a0, a1, a2, a3, a4, a5, a6) {
        return fn.apply(this, arguments);
      };
    case 8:
      return function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn.apply(this, arguments);
      };
    case 9:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.apply(this, arguments);
      };
    case 10:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn.apply(this, arguments);
      };
    default:
      throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
  }
}
// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_curry2.js



/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;
      case 1:
        return _isPlaceholder(a) ? f2 : _curry1(function (_b) {
          return fn(a, _b);
        });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function (_a) {
          return fn(_a, b);
        }) : _isPlaceholder(b) ? _curry1(function (_b) {
          return fn(a, _b);
        }) : fn(a, b);
    }
  };
}
// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_curryN.js



/**
 * Internal curryN function.
 *
 * @private
 * @category Function
 * @param {Number} length The arity of the curried function.
 * @param {Array} received An array of arguments received thus far.
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curryN(length, received, fn) {
  return function () {
    var combined = [];
    var argsIdx = 0;
    var left = length;
    var combinedIdx = 0;
    while (combinedIdx < received.length || argsIdx < arguments.length) {
      var result;
      if (combinedIdx < received.length && (!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)) {
        result = received[combinedIdx];
      } else {
        result = arguments[argsIdx];
        argsIdx += 1;
      }
      combined[combinedIdx] = result;
      if (!_isPlaceholder(result)) {
        left -= 1;
      }
      combinedIdx += 1;
    }
    return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length, combined, fn));
  };
}
// CONCATENATED MODULE: ./node_modules/ramda/es/curryN.js





/**
 * Returns a curried equivalent of the provided function, with the specified
 * arity. The curried function has two unusual capabilities. First, its
 * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.5.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curry
 * @example
 *
 *      const sumArgs = (...args) => R.sum(args);
 *
 *      const curriedAddFourNumbers = R.curryN(4, sumArgs);
 *      const f = curriedAddFourNumbers(1, 2);
 *      const g = f(3);
 *      g(4); //=> 10
 */
var curryN_curryN = /*#__PURE__*/_curry2(function curryN(length, fn) {
  if (length === 1) {
    return _curry1(fn);
  }
  return _arity(length, _curryN(length, [], fn));
});
/* harmony default export */ var es_curryN = (curryN_curryN);
// CONCATENATED MODULE: ./node_modules/ramda/es/curry.js



/**
 * Returns a curried equivalent of the provided function. The curried function
 * has two unusual capabilities. First, its arguments needn't be provided one
 * at a time. If `f` is a ternary function and `g` is `R.curry(f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (* -> a) -> (* -> a)
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curryN, R.partial
 * @example
 *
 *      const addFourNumbers = (a, b, c, d) => a + b + c + d;
 *
 *      const curriedAddFourNumbers = R.curry(addFourNumbers);
 *      const f = curriedAddFourNumbers(1, 2);
 *      const g = f(3);
 *      g(4); //=> 10
 */
var curry_curry = /*#__PURE__*/_curry1(function curry(fn) {
  return es_curryN(fn.length, fn);
});
/* harmony default export */ var es_curry = (curry_curry);
// CONCATENATED MODULE: ./maybe.js






var maybe_Maybe =
/*#__PURE__*/
function () {
  function Maybe(v) {
    classCallCheck_default()(this, Maybe);

    this._value = v;
  }

  createClass_default()(Maybe, [{
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
      return new maybe_Just(v);
    }
  }, {
    key: "nothing",
    value: function nothing() {
      return new maybe_Nothing();
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
var maybe_Just =
/*#__PURE__*/
function (_Maybe) {
  inherits_default()(Just, _Maybe);

  function Just(v) {
    classCallCheck_default()(this, Just);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Just).call(this, v));
  }

  createClass_default()(Just, [{
    key: "map",
    value: function map(f) {
      return maybe_Maybe.fromNullable(f(this._value));
    }
  }, {
    key: "getOrElse",
    value: function getOrElse() {
      return this._value;
    }
  }, {
    key: "filter",
    value: function filter(f) {
      return maybe_Maybe.fromNullable(f(this._value)) ? this._value : null;
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
}(maybe_Maybe);
var maybe_Nothing =
/*#__PURE__*/
function (_Maybe2) {
  inherits_default()(Nothing, _Maybe2);

  function Nothing(v) {
    classCallCheck_default()(this, Nothing);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Nothing).call(this, v));
  }

  createClass_default()(Nothing, [{
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
}(maybe_Maybe);
var lift = es_curry(function (f, value) {
  return maybe_Maybe.fromNullable(value).map(f);
});
// CONCATENATED MODULE: ./isFunction.js
function isFunction(f) {
  // eslint-disable-next-line no-var
  var type = Object.prototype.toString.call(f).toLowerCase();
  return type.search(/\bobject\b/g) !== -1 && type.search(/\bfunction\b/g) !== -1;
}
// CONCATENATED MODULE: ./either.js








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
var either_Either =
/*#__PURE__*/
function () {
  function Either(args) {
    classCallCheck_default()(this, Either);

    if (!(this instanceof Either ? this.constructor : void 0) || (this instanceof Either ? this.constructor : void 0) === Either) {
      throw new Error("no instanciation allowed for Abstract Class 'Either'");
    }

    this.value = args;
  }

  createClass_default()(Either, [{
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
    value:
    /*#__PURE__*/
    regenerator_default.a.mark(function value() {
      return regenerator_default.a.wrap(function value$(_context) {
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
;

either_Either.of = function (v, f) {
  var if_true = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : either_Either.right;
  var if_false = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : either_Either.left;
  if (!isFunction(f)) return either_Either.right(v);
  return f(v) ? if_true(v) : if_false(v);
};

either_Either.fromNullable = function (v) {
  return either_Either.of(v, truth);
};

either_Either.filter = function (f) {
  var judge = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : truth;
  var if_true = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : either_Either.right;
  var if_false = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : either_Either["false"];
  var v = f();
  return judge(v) ? if_true(v) : if_false(v);
};

either_Either.right = es_curry(function (v) {
  return new either_Right(v);
});
either_Either.left = es_curry(function (v) {
  return new either_Left(v);
});
/* only '.take()' or '.fold()' handles instance of 'Done' */

either_Either.done = function (v) {
  var functor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : either_Either.right;
  return new either_Done(functor(v));
};

either_Either.doneIf = function (f, v) {
  var functor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : either_Either.right;
  return f(v) ? either_Either.done(v, functor) : functor(v);
};
/* 'v' must be Right or Left. If it is not of Either, Right(v) will be passed. */


either_Either["throw"] = function (v) {
  return new either_Throw(v instanceof either_Either ? v : either_Either.right(v));
};
/* `throw` does not mean "throwing Error" but "to carrying Right or Left" */


either_Either.throwIf = function (f, v) {
  var if_true = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : either_Either.right;
  var if_false = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : either_Either.left;
  return new either_Throw(f(v) ? if_true(v) : if_false(v));
};
/* WARNING: when 'f' contains Promise, beware to have '.catch()' on Promise.
 * Or Be sure to use 'await' to avoid the Error "Unhandled Promise Rejection" */


either_Either["try"] = function (f) {
  try {
    return either_Either.right(f());
  } catch (e) {
    return either_Either.left(e);
  }
};

var either_Right =
/*#__PURE__*/
function (_Either) {
  inherits_default()(Right, _Either);

  function Right() {
    classCallCheck_default()(this, Right);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Right).apply(this, arguments));
  }

  createClass_default()(Right, [{
    key: "of",
    value: function of(v, f) {
      var if_true = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : either_Either.right;
      var if_false = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : either_Either.left;

      /* use this when you want to change the instance's value */
      if (!isFunction(f)) return either_Either.right(v);
      /* if 'f' is given */

      return f(v) ? either_Either.right(v) : either_Either.left(v);
    }
  }, {
    key: "clone",
    value: function clone(v) {
      return either_Either.right(getOrElse(v, this.value));
    }
  }, {
    key: "take",
    value: function take() {
      return this.value;
    }
  }, {
    key: "map",
    value: function map(f) {
      return either_Either.right(f(this.value));
    }
  }, {
    key: "chain",
    value: function chain(f) {
      return f(this.value);
    }
  }, {
    key: "filter",
    value: function filter(f) {
      return either_Either.of(this.value, f);
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
      return either_Either.done(isUndefined(v) ? this.value : v);
    }
  }, {
    key: "doneIf",
    value: function doneIf(f, v) {
      return f(this.value) ? either_Either.done(getOrElse(v, this.value)) : this;
    }
    /* remember that we not pass 'Error' nor 'Exception', but Right or Left.
     * if 'v' is supplied, it will be thrown to '.catch()' instead of instance's value
     * this is useful when we want to pass some other value based on condition.
     */

  }, {
    key: "throwIf",
    value: function throwIf(f, v) {
      var if_true = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : either_Either.right;
      return f(this.value) ? either_Either["throw"](if_true(getOrElse(v, this.value))) : this;
    }
  }, {
    key: 'try',
    value: function _try(f) {
      try {
        return either_Either.right(
        /* if f() returns Promise, be careful to not get 'Unhandled Promise Rejection'
         * you have to attach '.catch()' on Promise when you defined inside f().
         * This is because async function returns Promise always.
         * So this 'try' definition can not be declared as 'async' function.
         */
        f(this.value));
      } catch (e) {
        return either_Either.left(e);
      }
    }
  }, {
    key: 'throw',
    value: function _throw(f) {
      /* optional 'f' could be used before throwing. (e.g notifying, logging..) */
      if (isFunction(f)) f(this.value);
      /* since only Right can throw, passing value must be of Right */

      return either_Either["throw"](either_Either.right(this.value));
    }
  }, {
    key: 'apply',
    value: function apply(o) {
      return o.map(this.value);
    }
  }]);

  return Right;
}(either_Either); // Class Left


var either_Left =
/*#__PURE__*/
function (_Either2) {
  inherits_default()(Left, _Either2);

  function Left(args) {
    classCallCheck_default()(this, Left);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Left).call(this, args));
  }

  createClass_default()(Left, [{
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
}(either_Either); // 'Throw' is not Error nor Exception. It is carrier for the instance of Right to '.catch()'
// and 'Throw' does ignore all but '.catch()'. ONLY Right can throw.
// NOTE: The return value must be of Right or the caller of '.throw()'


var either_Throw =
/*#__PURE__*/
function (_Either3) {
  inherits_default()(Throw, _Either3);

  function Throw(args) {
    classCallCheck_default()(this, Throw);

    if (!(args instanceof either_Either)) throw new Error("Throw(): argument must be of Either");
    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Throw).call(this, args));
  }

  createClass_default()(Throw, [{
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
        return obj && obj instanceof either_Either && obj.value instanceof either_Either ? recur(obj.value) : f(obj.value);
      })(this);

      return this;
    }
  }, {
    key: "inspect",
    value: function inspect(f) {
      var _inspect = function recur(obj) {
        return obj instanceof either_Either ? "".concat(obj.constructor.name, "(").concat(recur(obj.value), ")") : "".concat(obj);
      }(this);

      either_Either.of(f, isFunction).fold(function () {
        return f(_inspect);
      }, function () {
        return console.log(_inspect);
      });
      return this;
    }
  }]);

  return Throw;
}(either_Either);
/* NOTE: Done is another carrier for Right and Left.
 * Only instance of Done will ignore all method but '.take() & .fold()' */


var either_Done =
/*#__PURE__*/
function (_Either4) {
  inherits_default()(Done, _Either4);

  function Done(args) {
    classCallCheck_default()(this, Done);

    if (!(args instanceof either_Either)) throw new Error("Done(): argument must be of Either");
    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Done).call(this, args));
  }

  createClass_default()(Done, [{
    key: "tap",
    value: function tap() {
      var f = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : console.log;

      (function recur(obj) {
        return obj && obj instanceof either_Either && obj.value instanceof either_Either ? recur(obj.value) : f(obj.value);
      })(this);

      return this;
    }
  }, {
    key: "fold",
    value: function fold() {
      var f = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : identity;
      var g = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : identity;
      return function recur(obj) {
        return obj && obj instanceof either_Either && obj.value instanceof either_Either ? recur(obj.value) : obj.fold(f, g);
      }(this);
    }
  }, {
    key: "inspect",
    value: function inspect(f) {
      var _inspect = function recur(obj) {
        return obj instanceof either_Either ? "".concat(obj.constructor.name, "(").concat(recur(obj.value), ")") : "".concat(obj);
      }(this);

      either_Either.of(f, isFunction).fold(function () {
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
        return obj && obj instanceof either_Either && obj.value instanceof either_Either ? recur(obj.value) : obj.value;
      }(this);
    }
  }]);

  return Done;
}(either_Either);
// CONCATENATED MODULE: ./node_modules/ramda/es/unapply.js


/**
 * Takes a function `fn`, which takes a single array argument, and returns a
 * function which:
 *
 *   - takes any number of positional arguments;
 *   - passes these arguments to `fn` as an array; and
 *   - returns the result.
 *
 * In other words, `R.unapply` derives a variadic function from a function which
 * takes an array. `R.unapply` is the inverse of [`R.apply`](#apply).
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Function
 * @sig ([*...] -> a) -> (*... -> a)
 * @param {Function} fn
 * @return {Function}
 * @see R.apply
 * @example
 *
 *      R.unapply(JSON.stringify)(1, 2, 3); //=> '[1,2,3]'
 * @symb R.unapply(f)(a, b) = f([a, b])
 */
var unapply = /*#__PURE__*/_curry1(function unapply(fn) {
  return function () {
    return fn(Array.prototype.slice.call(arguments, 0));
  };
});
/* harmony default export */ var es_unapply = (unapply);
// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_identity.js
function _identity(x) {
  return x;
}
// CONCATENATED MODULE: ./node_modules/ramda/es/identity.js



/**
 * A function that does nothing but return the parameter supplied to it. Good
 * as a default or placeholder function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> a
 * @param {*} x The value to return.
 * @return {*} The input value, `x`.
 * @example
 *
 *      R.identity(1); //=> 1
 *
 *      const obj = {};
 *      R.identity(obj) === obj; //=> true
 * @symb R.identity(a) = a
 */
var identity_identity = /*#__PURE__*/_curry1(_identity);
/* harmony default export */ var es_identity = (identity_identity);
// CONCATENATED MODULE: ./list.js

var list = es_unapply(es_identity);
/* harmony default export */ var list_0 = (list);
// CONCATENATED MODULE: ./utils.js

var isIterable = function isIterable(arg0) {
  return !!(arg0 instanceof Object && arg0[Symbol.iterator]);
};
var ternary = es_curry(function (f0, if_true, if_false, v) {
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
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/wrapNativeSuper.js
var wrapNativeSuper = __webpack_require__(8);
var wrapNativeSuper_default = /*#__PURE__*/__webpack_require__.n(wrapNativeSuper);

// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_isArray.js
/**
 * Tests whether or not an object is an array.
 *
 * @private
 * @param {*} val The object to test.
 * @return {Boolean} `true` if `val` is an array, `false` otherwise.
 * @example
 *
 *      _isArray([]); //=> true
 *      _isArray(null); //=> false
 *      _isArray({}); //=> false
 */
/* harmony default export */ var _isArray = (Array.isArray || function _isArray(val) {
  return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]';
});
// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_isTransformer.js
function _isTransformer(obj) {
  return obj != null && typeof obj['@@transducer/step'] === 'function';
}
// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_dispatchable.js



/**
 * Returns a function that dispatches with different strategies based on the
 * object in list position (last argument). If it is an array, executes [fn].
 * Otherwise, if it has a function with one of the given method names, it will
 * execute that function (functor case). Otherwise, if it is a transformer,
 * uses transducer [xf] to return a new transformer (transducer case).
 * Otherwise, it will default to executing [fn].
 *
 * @private
 * @param {Array} methodNames properties to check for a custom implementation
 * @param {Function} xf transducer to initialize if object is transformer
 * @param {Function} fn default ramda implementation
 * @return {Function} A function that dispatches on object in list position
 */
function _dispatchable(methodNames, xf, fn) {
  return function () {
    if (arguments.length === 0) {
      return fn();
    }
    var args = Array.prototype.slice.call(arguments, 0);
    var obj = args.pop();
    if (!_isArray(obj)) {
      var idx = 0;
      while (idx < methodNames.length) {
        if (typeof obj[methodNames[idx]] === 'function') {
          return obj[methodNames[idx]].apply(obj, args);
        }
        idx += 1;
      }
      if (_isTransformer(obj)) {
        var transducer = xf.apply(null, args);
        return transducer(obj);
      }
    }
    return fn.apply(this, arguments);
  };
}
// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_xfBase.js
/* harmony default export */ var _xfBase = ({
  init: function () {
    return this.xf['@@transducer/init']();
  },
  result: function (result) {
    return this.xf['@@transducer/result'](result);
  }
});
// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_xtap.js



var _xtap_XTap = /*#__PURE__*/function () {
  function XTap(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XTap.prototype['@@transducer/init'] = _xfBase.init;
  XTap.prototype['@@transducer/result'] = _xfBase.result;
  XTap.prototype['@@transducer/step'] = function (result, input) {
    this.f(input);
    return this.xf['@@transducer/step'](result, input);
  };

  return XTap;
}();

var _xtap = /*#__PURE__*/_curry2(function _xtap(f, xf) {
  return new _xtap_XTap(f, xf);
});
/* harmony default export */ var internal_xtap = (_xtap);
// CONCATENATED MODULE: ./node_modules/ramda/es/tap.js




/**
 * Runs the given function with the supplied object, then returns the object.
 *
 * Acts as a transducer if a transformer is given as second parameter.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (a -> *) -> a -> a
 * @param {Function} fn The function to call with `x`. The return value of `fn` will be thrown away.
 * @param {*} x
 * @return {*} `x`.
 * @example
 *
 *      const sayX = x => console.log('x is ' + x);
 *      R.tap(sayX, 100); //=> 100
 *      // logs 'x is 100'
 * @symb R.tap(f, a) = a
 */
var tap_tap = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable([], internal_xtap, function tap(fn, x) {
  fn(x);
  return x;
}));
/* harmony default export */ var es_tap = (tap_tap);
// CONCATENATED MODULE: ./fromise.js










var fromise_Fromise =
/*#__PURE__*/
function (_Promise) {
  inherits_default()(Fromise, _Promise);

  function Fromise() {
    classCallCheck_default()(this, Fromise);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Fromise).apply(this, arguments));
  }

  createClass_default()(Fromise, [{
    key: "pipe",
    value: function pipe() {
      for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
        funcs[_key] = arguments[_key];
      }

      return this.then(function (arg0) {
        return pipe_0.apply(void 0, funcs)(arg0);
      });
    }
  }, {
    key: 'if',
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
        return es_tap(f(value0));
      });
    }
  }, {
    key: "either",
    value: function either(f) {
      return this.then(function (value) {
        return either_Either.of(f, value);
      });
    }
  }, {
    key: "map",
    value: function map(f) {
      return this.then(function (v0) {
        return either_Either.is(v0) ? v0.map(f) : either_Either.of(f, v0);
      });
    }
  }, {
    key: "fold",
    value: function fold(f, g) {
      return this.then(function (v0) {
        return either_Either.is(v0) ? v0.fold(f, g) : v0;
      });
    }
  }, {
    key: "chain",
    value: function chain(f) {
      return this.then(function (v0) {
        return either_Either.is(v0) ? v0.chain(f) : f(v0);
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
}(wrapNativeSuper_default()(Promise));

/* harmony default export */ var fromise = (fromise_Fromise);
// CONCATENATED MODULE: ./semigroup.js
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

var Max = function Max(x) {
  return {
    x: x,
    concat: function concat(_ref3) {
      var y = _ref3.x;
      return Max(x > y ? x : y);
    }
  };
};

Max.empty = function () {
  return Max(-Infinity);
};

var Min = function Min(x) {
  return {
    x: x,
    concat: function concat(_ref4) {
      var y = _ref4.x;
      return Min(x < y ? x : y);
    }
  };
};

Min.empty = function () {
  return Min(Infinity);
};

var Sum = function Sum(x) {
  return {
    x: x,
    concat: function concat(_ref5) {
      var y = _ref5.x;
      return Sum(x + y);
    }
  };
};

Sum.empty = function () {
  return Sum(0);
};

var Product = function Product(x) {
  return {
    x: x,
    concat: function concat(_ref6) {
      var y = _ref6.x;
      return Sum(x * y);
    }
  };
};

Product.empty = function () {
  return Product(1);
}; // export Right = (x) =>
//   ({
//     map: (f) => Right(f(x)),
//     fold: (f, g) => g(x),
//     concat: (o) =>
//       o.fold(e => Left(e),
//              r => Right(x.concat(r)))
//   });
// export Left = (x) =>
//   ({
//     map: (f) => Left(x),
//     fold: (f, g) => f(x),
//     concat: (o) => Left(x)
//   });


var Pair = function Pair(x, y) {
  return {
    x: x,
    y: y,
    concat: function concat(_ref7) {
      var x1 = _ref7.x,
          y1 = _ref7.y;
      return Pair(x.concat(x1), y.concat(y1));
    }
  };
}; // const stats = List.of(
//   {page: 'home', view: 40},
//   {page: 'About', view: 10},
//   {page: 'Blog', view: 4},
// )
// stats.foldMap(x => Either.fromNullable(x.views).map(Sum), Right(Sum(0))); //Right(Sum(54))

/* harmony default export */ var semigroup = ({});
// CONCATENATED MODULE: ./isFalsy.js
var isFalsy = function isFalsy(v) {
  return [null, undefined, NaN].some(function (_) {
    return Object.is(v, _);
  });
};
var isNotFalsy = function isNotFalsy(v) {
  return !isFalsy(v);
};
// CONCATENATED MODULE: ./isFalse.js
/* harmony default export */ var isFalse = (function (v) {
  return [null, undefined, NaN, 0, ''].some(function (_) {
    return Object.is(v, _);
  });
});
// CONCATENATED MODULE: ./true-false.js
var __true = function __true() {
  return true;
};
var __false = function __false() {
  return false;
};
// CONCATENATED MODULE: ./index.js
/* concated harmony reexport reduce */__webpack_require__.d(__webpack_exports__, "reduce", function() { return reduce; });
/* concated harmony reexport run */__webpack_require__.d(__webpack_exports__, "run", function() { return run; });
/* concated harmony reexport pipe */__webpack_require__.d(__webpack_exports__, "pipe", function() { return pipe_0; });
/* concated harmony reexport Maybe */__webpack_require__.d(__webpack_exports__, "Maybe", function() { return maybe_Maybe; });
/* concated harmony reexport Just */__webpack_require__.d(__webpack_exports__, "Just", function() { return maybe_Just; });
/* concated harmony reexport Nothing */__webpack_require__.d(__webpack_exports__, "Nothing", function() { return maybe_Nothing; });
/* concated harmony reexport lift */__webpack_require__.d(__webpack_exports__, "lift", function() { return lift; });
/* concated harmony reexport Either */__webpack_require__.d(__webpack_exports__, "Either", function() { return either_Either; });
/* concated harmony reexport identity */__webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* concated harmony reexport revoke */__webpack_require__.d(__webpack_exports__, "revoke", function() { return revoke; });
/* concated harmony reexport truth */__webpack_require__.d(__webpack_exports__, "truth", function() { return truth; });
/* concated harmony reexport isUndefined */__webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* concated harmony reexport list */__webpack_require__.d(__webpack_exports__, "list", function() { return list_0; });
/* concated harmony reexport isIterable */__webpack_require__.d(__webpack_exports__, "isIterable", function() { return isIterable; });
/* concated harmony reexport ternary */__webpack_require__.d(__webpack_exports__, "ternary", function() { return ternary; });
/* concated harmony reexport sleep */__webpack_require__.d(__webpack_exports__, "sleep", function() { return sleep; });
/* concated harmony reexport mixin */__webpack_require__.d(__webpack_exports__, "mixin", function() { return mixin; });
/* concated harmony reexport attach */__webpack_require__.d(__webpack_exports__, "attach", function() { return attach; });
/* concated harmony reexport Fromise */__webpack_require__.d(__webpack_exports__, "Fromise", function() { return fromise; });
/* concated harmony reexport Any */__webpack_require__.d(__webpack_exports__, "Any", function() { return Any; });
/* concated harmony reexport All */__webpack_require__.d(__webpack_exports__, "All", function() { return All; });
/* concated harmony reexport isFunction */__webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* concated harmony reexport isFalsy */__webpack_require__.d(__webpack_exports__, "isFalsy", function() { return isFalsy; });
/* concated harmony reexport isNotFalsy */__webpack_require__.d(__webpack_exports__, "isNotFalsy", function() { return isNotFalsy; });
/* concated harmony reexport isFalse */__webpack_require__.d(__webpack_exports__, "isFalse", function() { return isFalse; });
/* concated harmony reexport __true */__webpack_require__.d(__webpack_exports__, "__true", function() { return __true; });
/* concated harmony reexport __false */__webpack_require__.d(__webpack_exports__, "__false", function() { return __false; });














/***/ })
/******/ ]);
//# sourceMappingURL=@andrwj-fp.js.map