const initNodes = [
  {
    id: "a",
    type: "custom",
    data: {
      name: "Esther",
      job: "Me",
      emoji: "🐥",
      color: "",
      email: ["lampmaa22@gmail.com"],
    },
    position: { x: 325, y: 70 },
  },
  {
    id: "b",
    type: "custom",
    data: {
      name: "Tianhui",
      job: "Single mom",
      emoji: "🏃🏻‍♀️",
      color: "",
      // email: ["yung-hsuan@uni.minerva.edu"],
      email: ["tianhui_xu@uni.minerva.edu"],
    },
    position: { x: 100, y: -20 },
  },
  {
    id: "c",
    type: "custom",
    data: {
      name: "Diana",
      job: "Loyal Christian",
      emoji: "⛪️",
      color: "",
      email: ["ruyun@uni.minerva.edu"],
    },
    position: { x: 500, y: -20 },
  },
  {
    id: "d",
    type: "custom",
    data: {
      name: "Ramen",
      job: "From Japan",
      emoji: "🍜",
      color: "",
      // email: ["yung-hsuan@uni.minerva.edu"],
      email: ["ryoga6.jmarka@gmail.com"],
    },
    position: { x: -150, y: -20 },
  },
  {
    id: "e",
    type: "custom",
    data: {
      name: "Aniket",
      job: "A Indian",
      emoji: "🇮🇳",
      color: "",
      email: ["aniket@uni.minerva.edu"],
    },
    position: { x: 750, y: -20 },
  },
  {
    id: "f",
    type: "custom",
    data: {
      name: "Charlotte",
      job: "Matcha",
      emoji: "🍵",
      color: "",
      email: ["charlottejuan@uni.minerva.edu"],
    },
    position: { x: 500, y: 200 },
  },
  {
    id: "g",
    type: "custom",
    data: {
      name: "A white dude",
      job: "A white dude",
      emoji: "👋🏻",
      color: "",
      email: [""],
    },
    position: { x: 750, y: 200 },
  },
  {
    id: "h",
    type: "custom",
    data: {
      name: "Phuong",
      job: "Startup founder",
      emoji: "👷🏻‍♀️",
      color: "",
      email: ["dophuong@uni.minerva.edu"],
    },
    position: { x: 100, y: 200 },
  },
  {
    id: "i",
    type: "custom",
    data: {
      name: "Tung",
      job: "Her co-founder",
      emoji: "🙌🏻",
      color: "",
      email: [""],
    },
    position: { x: -150, y: 200 },
  },
];

const initEdges = [
  {
    id: "a-b",
    source: "b",
    target: "a",
    animated: true,
  },
  {
    id: "b-d",
    source: "d",
    target: "b",
  },
  {
    id: "a-c",
    source: "a",
    target: "c",
  },
  {
    id: "c-e",
    source: "c",
    target: "e",
  },
  {
    id: "a-f",
    source: "a",
    target: "f",
  },
  {
    id: "g-f",
    source: "f",
    target: "g",
  },
  {
    id: "i-h",
    source: "i",
    target: "h",
  },
  {
    id: "a-h",
    source: "h",
    target: "a",
  },
];

export { initNodes, initEdges };
