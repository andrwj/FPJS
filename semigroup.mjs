
export const Any = x => ({x, concat: ({x: y})=>Any(x || y)}); Any.empty = () => Any(false);
export const All = x => ({x, concat: ({x: y})=>Any(x && y)}); All.empty = () => All(true);
export const Max = x => ({x, concat: ({x: y})=>Max(x>y ? x: y)}); Max.empty = () => Max(-Infinity);
export const Min = x => ({x, concat: ({x: y})=>Min(x<y ? x: y)}); Min.empty = () => Min(Infinity);
export const Sum = x => ({x, concat: ({x: y})=>Sum(x+y)}); Sum.empty = () => Sum(0);
export const Product = x => ({x, concat: ({x: y})=>Sum(x*y)}); Product.empty = () => Product(1);
// export Right = (x) =>
//   ({
//     map: (f) => Right(f(x)),
//     fold: (f, g) => g(x),
//     concat: (o) =>
//       o.fold(e => Left(e),
//              r => Right(x.concat(r)))
//   });
// export Left = (x) =>
//   ({
//     map: (f) => Left(x),
//     fold: (f, g) => f(x),
//     concat: (o) => Left(x)
//   });

export const Pair = (x, y) => ({x, y, concat: ({x: x1, y: y1}) => Pair(x.concat(x1), y.concat(y1))});
// const stats = List.of(
//   {page: 'home', view: 40},
//   {page: 'About', view: 10},
//   {page: 'Blog', view: 4},
// )
// stats.foldMap(x => Either.fromNullable(x.views).map(Sum), Right(Sum(0))); //Right(Sum(54))

export default {

};
