import * as R from 'ramda';

const isFalsy = v => [null, undefined].some(_=>Object.is(v, _));

export class Either {
  constructor(args) {
    if(!new.target || new.target === Either) {
      throw new Error(`no instanciation allowed for Abstract Class 'Either'`);
    }
    this.value = args;
  }

  static right(v) {
    // eslint-disable-next-line no-use-before-define
    return new Right(v);
  }

  static left(v) {
    // eslint-disable-next-line no-use-before-define
    return new Left(v);
  }

  static fromNullable (v) {
    return isFalsy(v) ? Either.left(v) : Either.right(v);
  }

  // eslint-disable-next-line class-methods-use-this
  inspect () {
    return `Either implementation`;
  }

  static is(v) {
    return (!isFalsy(v) && (v instanceof Either));
  }

  *[Symbol.iterator]() {
    yield this.value;
  }
};
Either.of = R.curry((cond, v) =>  cond(v) ? Either.right(v) : Either.left(v));


class Right extends Either {

  // eslint-disable-next-line no-useless-constructor
  constructor(args) {
    super(args);
  }

  map (f) {
    return new this.constructor(f(this.value));
  }

  fold (_, right_f) {
    return right_f(this.value);
  }

  chain (f) {
    return f(this.value);
  }

  filter(f) {
    return Either.of(f, this.value);
  }

  inspect() {
    return `Right(${JSON.stringify(this.value)})`;
  }
}

class Left extends Either {

  // eslint-disable-next-line no-useless-constructor
  constructor(args) {
    super(args);
  }

  map () {
    return new this.constructor(this.value);
  }

  fold (left_f, _) {
    return left_f(this.value);
  }

  chain () {
    return this;
  }

  filter () {
    return this;
  }

  inspect () {
    return `Left(${JSON.stringify(this.value)})`;
  }
}

export const tryCatch = R.curry((f, v) => {
  try {
    return new Right(f(v));
  } catch(e) {
    return new Left(e);
  }
});
