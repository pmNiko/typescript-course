(() => {
  const fullName = (firsName: string, lastName?: string): string => {
    // return `${firsName} ${lastName || "no lastname"}`;
    return `${firsName} ${lastName}`;
  };

  const name = fullName("Tony");

  console.log({ name });
})();
