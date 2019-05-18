const head = (iter) => (iter.next()).value;
const empty = (function* (){})();
const ensure = (iter) => (iter && iter[Symbol.iterator]) ? iter[Symbol.iterator]() : empty;
const call0 = (value, f) => f(value);
const branchBy = (value, f) => (value instanceof Promise) ? value.then(f) : f(value);
const accumulate = (acc, el, f) => (el instanceof Promise) ? el.then(v => f(acc, v), e=>Promise.reject(e)) : f(acc, el);
const Reduce = function (f, acc, iter) {
	if(arguments.length === 1) return (...iter) => Reduce(f, ...iter);
	if(arguments.length === 2) return Reduce(f, head(iter=ensure(acc)), iter);
	iter = ensure(iter); 
	let el;
	return branchBy(acc, function recursively(acc) {
		while(!(el=iter.next()).done) {
			acc = accumulate(acc, el.value, f);
			if(acc instanceof Promise) {
				return acc.then(recursively); 
			}
		}
		return acc;
	});
};

export default /*pipeline */(...args) => Reduce(call0, args);
