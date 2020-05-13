export const NOT = a => !a;
export const OR = (a, b) => a || b;
export const AND = (a, b) => a && b;
export const NAND = (a, b) => !AND(a, b);
export const NOR = (a, b) => !OR(a, b);
export const XOR = (a, b) => AND(NAND(a,b), OR(a,b));
export const XNOR = (a, b) => !NOR(a, b);

const logics = [NOT, OR, AND, NAND, NOR, XOR, XNOR];
const varies = [ { a: 0, b: 0 }, { a: 0, b: 1 }, { a: 1,	b: 0 }, { a: 1,	b: 1 } ];
export const chart_dump = logics.map(gate => varies.map((test) => {
   const result = (({ a, b }) => gate(a, b))(test);
   const desc = JSON.stringify(test)
         .replace(/a":|b":/g, "")
         .replace(/:|"|\{|\}/g, " ")
         .replace(/\s+/g, " ")
         .replace(/,/g, " |")
         .replace(/true/g, "1 ")
         .replace(/false/g, "0 ");
   return `${gate.name}:${desc} ➜ ${result ? 1 : 0}\n`;
}).join("")).join("\n");


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
