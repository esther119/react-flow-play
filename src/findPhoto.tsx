export default function findImage(node_id: string) {
  const randomNumber = Math.floor(Math.random() * 2) + 1;
  console.log("find image node_id", node_id, "length", node_id.length);
  if (node_id.length > 3) {
    return "That's not a ethical baby creation process.";
  }
  if (node_id.includes("b") && node_id.includes("d")) {
    // Randomly choose between 1 or 2
    return `public/images/royga.${randomNumber}.png`;
  } else if (node_id.includes("c") && node_id.includes("e")) {
    return `public/images/diana.${randomNumber}.png`;
  } else return "This is called an affair.";
}
