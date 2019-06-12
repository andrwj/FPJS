import * as R from 'ramda';
import {Either} from './either';

export default R.curry(f => {
  try {
    return Either.right(f());
  } catch(e) {
    return Either.throw(e);
  }
});

