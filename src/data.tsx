const initNodes = [
  {
    id: "a",
    type: "custom",
    data: { name: "Esther", job: "Me", emoji: "🐥", color: "" },
    position: { x: 325, y: 70 },
  },
  {
    id: "b",
    type: "custom",
    data: { name: "Tianhui", job: "Single mom", emoji: "🏃🏻‍♀️", color: "" },
    position: { x: 100, y: -20 },
  },
  {
    id: "c",
    type: "custom",
    data: { name: "Diana", job: "Loyal Christian", emoji: "⛪️", color: "" },
    position: { x: 500, y: -20 },
  },
  {
    id: "d",
    type: "custom",
    data: { name: "??", job: "Chocolate uncle", emoji: "🌚", color: "" },
    position: { x: -150, y: -20 },
  },
  {
    id: "e",
    type: "custom",
    data: { name: "Aniket", job: "A Indian", emoji: "🇮🇳", color: "" },
    position: { x: 750, y: -20 },
  },
  {
    id: "f",
    type: "custom",
    data: { name: "Charlotte", job: "Matcha", emoji: "🍵", color: "" },
    position: { x: 500, y: 200 },
  },
  {
    id: "g",
    type: "custom",
    data: { name: "A white dude", job: "A white dude", emoji: "👋🏻", color: "" },
    position: { x: 750, y: 200 },
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
];

export { initNodes, initEdges };
