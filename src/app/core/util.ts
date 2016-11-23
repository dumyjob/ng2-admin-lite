export class Util {

  static isEmpty(x: String): boolean;
  static isEmpty<T>(x: T[]): boolean;

  static isEmpty(x): boolean {

    let isEmpty = false;

    if (undefined === x || null === x) {

      isEmpty = true;
    } else {

      if (typeof x === "String") {
        isEmpty = "" === x;
      } else if (typeof x === "Array") {
        isEmpty = 0 === x.length;
      }
    }


    return isEmpty;
  }
}
