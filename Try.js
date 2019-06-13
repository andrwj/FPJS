import * as R from 'ramda';
import {Either, truth} from './either';

export default R.curry((f, cond=truth)  => {
  try {
    return Either.of(cond, f());
  } catch(e) {
    return Either.excepsion(e);
  }
});

