(() => {
  const fullName = (
    firsName: string,
    lastName?: string,
    upper: boolean = false
  ): string => {
    // return `${firsName} ${lastName || "no lastname"}`;
    return upper
      ? `${firsName} ${lastName}`.toUpperCase()
      : `${lastName || "-----"}`;
  };

  const name = fullName("Tony", "", true);

  console.log({ name });
})();
