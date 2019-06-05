import reduce from './reduce';
import call from './call';

export default (...args) => reduce(call, args);

