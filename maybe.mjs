import * as R from 'ramda';

export class Maybe {

  constructor(v) {
    this._value = v;
  }

  static just (v) {
    return new Just(v);
  }

  static nothing () {
    return new Nothing();
  }

  static fromNullable (v) {
    return [null, undefined].some(_=>Object.is(v, _)) ? Maybe.nothing(v) : Maybe.just(v);
  }

  static of (v) {
    return just(v);
  }

  get isNothing () {
    return false;
  }

  get isJust () {
    return true;
  }

}

export class Just extends Maybe {
  constructor (v) {
    super(v);
  }

  get value () {
    return this._value;
  }

  map (f) {
    return Maybe.fromNullable(f(this._value));
  }

  getOrElse () {
    return this._value;
  }

  filter (f) {
    return Maybe.fromNullable(f(this._value)) ? this._value : null;
  }

  chain (f) {
    return f(this._value);
  }

  toString () {
    return `Maybe.Just(${this._value})`;
  }

}

export class Nothing extends Maybe {
  constructor(v) {
    super(v);
  }

  map(f) {
    return this;
  }

  get value () {
    throw new TypeError("It's nothing. You can not get from it");
  }

  getOrElse (v) {
    return v;
  }

  filter (f) {
    return null;
  }

  chain (f) {
    return this;
  }

  toString() {
    return "Maybe.Nothing";
  }

  get isNothing () {
    return true;
  }

  get isJust () {
    return false;
  }

}

export const lift = R.curry((f, value)=> Maybe.fromNullable(value).map(f));

