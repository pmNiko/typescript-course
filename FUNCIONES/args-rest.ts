(() => {
  const fullName = (firstName: string, ...rest: string[]) => {
    return `${firstName} ${rest.join(" ")}}`;
  };

  const superman = fullName("Clark", "Super", "Kent", "Joseph");

  console.log({ superman });
})();
