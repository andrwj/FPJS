import R from 'ramda';

export {curry, map, filter, partial} from 'ramda';
export { run, pipe } from './run';
export { Maybe, Just, Nothing, lift } from './maybe';
export const ifelse = R.curry((cond, IfTrue, orElse, value) => {
  return cond(value) ? IfTrue(value) : orElse(value);
});
