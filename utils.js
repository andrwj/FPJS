import * as R from 'ramda';

export const isIterable = (arg0) => !!(arg0 instanceof Object && arg0[Symbol.iterator]);
export const ternary = R.curry((f0, if_true, if_false, v) => f0(v) ? if_true(v) : if_false(v));
export const sleep = (msec, value=msec) => new Promise((resolv, reject) => setTimeout(() => resolv(value), msec));
export const mixin = (...mixins) => (function() { const base = function(){}; return Object.assign(base.prototype, ...mixins);})();
export const attach = (scope, from, ...methods) => methods.reduce((mixin, m)=> { mixin[m] = from[m]; return mixin;}, scope);



