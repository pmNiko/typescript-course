function printToConsole(constructor: Function) {
  console.log(constructor);
}

const printToConsoleConditional = (print: boolean = false): Function => {
  return print ? printToConsole : () => {};
};

const blockPrototype = function (constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

function CheckValidPokemonId() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = (id: number) => {
      if (id < 1 || id > 800) {
        return console.error("InvalidPokemonId");
      } else {
        return originalMethod(id);
      }
    };
  };
}

function readonly(isWritable: boolean = true): Function {
  return function (target: any, propertyKey: string) {
    const descriptor: PropertyDescriptor = {
      get() {
        console.log(this);

        return "Nikolas";
      },
      set(this, val) {
        // console.log(this, val);
        Object.defineProperty(this, propertyKey, {
          value: val,
          writable: !isWritable,
          enumerable: false,
        });
      },
    };

    return descriptor;
  };
}

// @blockPrototype
// @printToConsoleConditional(true)
export class Pokemon {
  @readonly(true)
  public publicApi: string = "https://pokeapi.co/";

  constructor(public name: string) {}

  // @CheckValidPokemonId()
  savePokemon(id: number) {
    console.log(`Pokemon saved to ${id}`);
  }
}
