let str = "str"; // string
let number = 123; // number
let boolean = true; // boolean
//? литеральный тип
//? const boolean = true //true

//? number[] || Array<number>
const arr = [1, 2, 3];

//? кортеж [string, number, ...unknown[]]
const tuple: [string, number, ...unknown[]] = ["str", 12, {}, [], 31];

//? unknown
let unknown: unknown = "i am string";
//?unknown.toUpperCase() Object is of type 'unknown'
if (typeof unknown === "string") {
  let str = unknown.toUpperCase(); // string
} else if (typeof unknown === "boolean") {
  let boolean = unknown; // boolean
}
//? any
let any: any = {};
any.map((el: any) => ({ ...el, result: "123" }));

//? void
function f(): void {
  console.log("hello");
  //Type 'string' is not assignable to type 'void'
  //   return '2'
}
//? null & undefined
let u: undefined = undefined;
let n: null = null;

//? never
function fail(): never {
  throw new Error("Something failed");
}
//? Object object {}
let obj_1: Object = {};
obj_1 = "3";
obj_1 = new String("3");
obj_1 = new Number(3);
obj_1 = new Boolean(true);
obj_1 = 3;
obj_1 = { fsf: "324" };
obj_1 = null;
obj_1 = undefined;
obj_1 = true;
obj_1 = () => {};
obj_1 = [];

let obj_2: object = {};
obj_2 = "3";
obj_2 = 3;
obj_2 = { fsf: "324" };
obj_2 = new String("3");
obj_2 = new Number(3);
obj_2 = new Boolean(true);
obj_2 = null;
obj_2 = undefined;
obj_2 = true;
obj_2 = () => {};
obj_2 = [];

let obj_3: {} = {};
obj_3 = "3";
obj_3 = 3;
obj_3 = new String("3");
obj_3 = new Number(3);
obj_3 = new Boolean(true);
obj_3 = { fsf: "324" };
obj_3 = null;
obj_3 = undefined;
obj_3 = true;
obj_3 = () => {};
obj_3 = [];


