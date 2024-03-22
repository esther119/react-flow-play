export default function findImage(node_id: string) {
  const randomNumber = Math.floor(Math.random() * 2) + 1;
  console.log("find image node_id", node_id, "length", node_id.length);
  if (node_id.length > 3) {
    return "That's not a ethical baby creation process.";
  }
  if (node_id.includes("b") && node_id.includes("d")) {
    // Randomly choose between 1 or 2
    return `/images/Tianhui/royga.${randomNumber}.png`;
  } else if (node_id.includes("c") && node_id.includes("e")) {
    return `/images/Diana/diana.${randomNumber}.png`;
  } else if (node_id.includes("g") && node_id.includes("f")) {
    return `/images/Charlotte/${randomNumber}.png`;
  } else if (node_id.includes("h") && node_id.includes("i")) {
    const randomNumber = Math.floor(Math.random() * 25) + 1;
    return `/images/Phuong/t${randomNumber}.png`;
  } else return "This is called an affair.";
}
