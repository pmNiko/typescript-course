export const printObject = (arg: any) => {
  console.log(arg);
};

export function genericFn<T>(arg: T): T {
  return arg;
}

export const genericArrowFn = <T>(arg: T): T => arg;
