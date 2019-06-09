import R from 'ramda';

export { curry, map, filter, partial } from 'ramda';
export { default as reduce } from './reduce';
export { default as run } from './run';
export { default as pipe } from './pipe';
export { Maybe, Just, Nothing, lift } from './maybe';
export { Either, tryCatch } from './either';
export const ifelse = R.curry((cond, IfTrue, orElse, value) => {
  return cond(value) ? IfTrue(value) : orElse(value);
});
export { default as list } from './list';
export { isIterable, ternary } from './utils';
export { default as Fromise } from './fromise';
export { Any, All } from './semigroup';
