/* eslint-disable @typescript-eslint/no-useless-constructor */
const addAttribute = (cls) => {
  cls.prototype.log = () => {
    console.log("Hello World!");
  };
};

@addAttribute
class MyClass {
  constructor() {}
}

export const decorator = new MyClass();
