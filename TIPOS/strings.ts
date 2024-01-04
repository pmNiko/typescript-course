(() => {
  const batman: string = "Batman";

  console.log(`I'm ${batman}`);

  console.log(batman.toUpperCase());

  console.log(batman[10]?.toUpperCase() || "No está presente!");
})();
