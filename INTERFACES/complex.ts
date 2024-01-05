(() => {
  interface Client {
    name: string;
    age?: number;
    address?: Address;
    getFullAddress(id: string): void;
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: "Nikolas",
    age: 34,
    address: {
      id: 125,
      zip: "KGB 569",
      city: "Ottawa",
    },

    getFullAddress() {
      return this.address?.city;
    },
  };

  const client2: Client = {
    name: "Melissa",
    age: 30,
    getFullAddress() {
      return this.address?.city || "No address available";
    },
  };

  console.log(client2.getFullAddress("125"));
})();
