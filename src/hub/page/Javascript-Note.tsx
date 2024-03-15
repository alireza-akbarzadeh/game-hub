// what type of null
let data: any = null;
typeof data; //h "object"
data = [];
typeof data; //h "object"

data = function name() {};

typeof data; //h function

//? emptiness

//* when we declare a variable and assign nothing to it it's undeclared

//* when we declare a variable and assign undefined it's undefined

//* and when value is uninitialized mean it's of limit and you don't have access to it

function convert(args1: unknown, args2: unknown) {
  let xNegZero = iSNegetiveZero(args1);
  let yNegZero = iSNegetiveZero(args2);
  if (xNegZero || yNegZero) {
    return xNegZero && yNegZero;
  } else if (isItNan(args1) && isItNan(args2)) {
    return true;
  } else {
    return args1 === args2;
  }
  function isItNan(v: unknown) {
    return v != v;
  }
  function iSNegetiveZero(v: any) {
    return v == 0 && 1 / v == -Infinity;
  }
}

//<>  Fundamental Objects
/*
 * // Use New With

 ? @Object()
 ? @Array()
 ? @Fuction()
 ? @Date()
 ? @RegExp()
 ? @Error()

 * //! Dont Use New

 ? @String()
 ? @Number()
 ? @Boolean()
 */

//* Abstrack Operator

//<> ToBoolean & ToNumber & ToString
/* 
 Falsy          Truthy
 0,-0          "foo"
 null          23
 NaN           {a:1}
 false        [1,3]
 undefined    true
             fucntion(){...} 
             and list gose on an on  when it's not falsy
             then it's truthy value 
 */

//<> Coercion

/* 




*/
