const Gates = {
  NOT(a) { return !a; },
  OR(a, b) { return a || b; },
  AND(a, b) { return a && b; },
  NAND(a, b) { return this.NOT(a && b); },
  NOR(a, b) { return this.NOT(this.OR(a, b)); },
  XOR(a, b) { return this.AND(this.NAND(a,b), this.OR(a,b)); },
  XNOR(a, b) { return this.NOT(this.NOR(a, b)); }
};

const varies = [ { a: 0, b: 0 }, { a: 0, b: 1 }, { a: 1,	b: 0 }, { a: 1,	b: 1 } ];

export const Charts = Object.keys(Gates).map(gate => varies.map((test) => {
  const result = (({ a, b }) => Gates[gate](a, b))(test);
  const desc = JSON.stringify(test)
    .replace(/a":|b":/g, '')
    .replace(/:|"|\{|\}/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/,/g, ' |')
    .replace(/true/g, '1 ')
    .replace(/false/g, '0 ');
  return `${gate}:${desc} ➜ ${result ? 1 : 0}\n`;
}).join('')).join('\n');

export default Gates;

/**
   NOT: 0 | 0  ➜ 1
   NOT: 0 | 1  ➜ 1
   NOT: 1 | 0  ➜ 0
   NOT: 1 | 1  ➜ 0

   OR: 0 | 0  ➜ 0
   OR: 0 | 1  ➜ 1
   OR: 1 | 0  ➜ 1
   OR: 1 | 1  ➜ 1

   AND: 0 | 0  ➜ 0
   AND: 0 | 1  ➜ 0
   AND: 1 | 0  ➜ 0
   AND: 1 | 1  ➜ 1

   NAND: 0 | 0  ➜ 1
   NAND: 0 | 1  ➜ 1
   NAND: 1 | 0  ➜ 1
   NAND: 1 | 1  ➜ 0

   NOR: 0 | 0  ➜ 1
   NOR: 0 | 1  ➜ 0
   NOR: 1 | 0  ➜ 0
   NOR: 1 | 1  ➜ 0

   XOR: 0 | 0  ➜ 0
   XOR: 0 | 1  ➜ 1
   XOR: 1 | 0  ➜ 1
   XOR: 1 | 1  ➜ 0

   XNOR: 0 | 0  ➜ 0
   XNOR: 0 | 1  ➜ 1
   XNOR: 1 | 0  ➜ 1
   XNOR: 1 | 1  ➜ 1
*/
