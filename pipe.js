import reduce from './reduce';
import call from './call';

export default (f1, ...funcs) => (...args) => reduce(call, f1(...args), funcs)
