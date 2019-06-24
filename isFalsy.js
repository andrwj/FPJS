export const isFalsy = v => [null, undefined, NaN].some(_=>Object.is(v, _));
export const isNotFalsy = v => !isFalsy(v);
