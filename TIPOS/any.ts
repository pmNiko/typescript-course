(() => {
  let avenger: any = 123;

  avenger = "Dr Strange";

  console.log("Primera letra: " + (avenger as string).charAt(0));

  avenger = 150.32543525;

  console.log(<number>avenger.toFixed(2));
})();
