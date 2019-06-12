export default v => [null, undefined, NaN].some(_=>Object.is(v, _));
