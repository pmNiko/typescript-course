namespace Validations {
  export const checkText = (text: string): boolean => text.length > 3;

  export const checkDate = (date: Date): boolean => !isNaN(date.valueOf());
}

console.log(Validations.checkText("test"));
