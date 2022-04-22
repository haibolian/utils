import { cloneshallow, clonedeep } from "./clone.js";
import { findChildrens, findInObjArr } from "./find.js";
import { n2c, c2n } from "./format.js";
import { isOddNumber, isEvenNumber } from "./math.js";
import { toFixedPlus } from "./number.js";
import { getType, isNumeralString } from "./type.js";

const _ = {
  // clone
  cloneshallow,
  clonedeep,

  // find
  findChildrens,
  findInObjArr,

  // format
  n2c,
  c2n,
   
  // math
  isOddNumber,
  isEvenNumber,

  // number
  toFixedPlus,

  // type
  getType,
  isNumeralString,
}

export default _