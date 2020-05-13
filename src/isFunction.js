export default function isFunction(f) {
   // eslint-disable-next-line no-var
   var type = Object.prototype.toString.call(f).toLowerCase();
   return (type.search(/\bobject\b/g) !== -1 && type.search(/\bfunction\b/g) !== -1);
}
