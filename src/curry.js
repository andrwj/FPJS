export default (function () {
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
            return numArgs - arguments.length > 0 ? curryN(_curry1.apply(this, [fn].concat(Array.from(arguments))), numArgs - arguments.length) : _curry1.apply(this, [fn].concat(Array.from(arguments)));
         }
         return fn.apply(this, arguments);
      };
   };
})();
