// printObject(123);
// printObject("Nothing");
// printObject({
//   name: "foo",
//   age: 123,
// });
// printObject(new Date());

import { genericArrowFn } from "../generics/generics";
import { Villain } from "../interfaces";

// const helloWorld: string = "hello world";

// console.log(genericArrowFn(3.1225465).toFixed(2));
// console.log(genericArrowFn(helloWorld));
// console.log(genericArrowFn(new Date()));

const deadpool = {
  name: "Deadpool",
  realName: "Wade Winston Wilson",
  dengerLevel: 130,
};

console.log(genericArrowFn<Villain>(deadpool).dengerLevel);
