export default v => [null, undefined, NaN, 0, ""].some(_=>Object.is(v, _));
