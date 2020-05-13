import curry from "./curry";

export const isIterable = arg0 =>
!!(arg0 instanceof Object && arg0[Symbol.iterator]);

export const ternary = curry((f0, if_true, if_false, v) =>
   f0(v) ? if_true(v) : if_false(v)
);

export const sleep = (msec, value = msec) =>
new Promise(resolv => setTimeout(() => resolv(value), msec));

export const mixin = (...mixins) => (function wapper() {
   const base = function base() {};
   return Object.assign(base.prototype, ...mixins);
})();

export const attach = (scope, from, ...methods) => methods.reduce((mixin, m) => {
   mixin[m] = from[m];
   return mixin;
}, scope);

export const if_then_else = (condition, if_true, if_false = Noop) =>
condition() ? if_true() : if_false();

export const hasIn = (constraints = [], target = []) => {
   return constraints.reduce((acc, el) => {
      return acc === true ? true : target.includes(el);
   }, false);
};

export const Noop = () => {};

export const arrayfy = value => (Array.isArray(value) ? value : [value]);
