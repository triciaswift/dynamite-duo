const database = {
  heroes: [
    {
      id: 1,
      name: "Dynoguy",
      power: "Fire blasts",
    },
    {
      id: 2,
      name: "Hyperspeed",
      power: "Super speed",
    },
  ],
  villains: [
    {
      id: 1,
      name: "Loki",
      power: "Teleport",
    },
    {
      id: 2,
      name: "Magneto",
      power: "Manipulate metal",
    },
    {
      id: 3,
      name: "Ultron",
      power: "Commands machines",
    },
  ],
};

export const getHeroes = () => {
  return database.heroes.map((hero) => ({ ...hero }));
};

export const getVillains = () => {
  return database.villains.map((villain) => ({ ...villain }));
};
