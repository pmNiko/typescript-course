(() => {
  const numbers = [1, 2, 3, "4", 5, 6, 7, "foo"];

  const converted = numbers.reduce(
    (acc: number[], curr) => {
      const item = parseFloat(<string>curr);
      !isNaN(item) && acc.push(item);

      return acc;
    },
    [0, 10]
  );

  console.log(converted);

  const villians = ["Omega Red", "Dormammu", "Duende Verde", "Wason"];

  villians.forEach((v) => console.log(v.toUpperCase()));
})();
