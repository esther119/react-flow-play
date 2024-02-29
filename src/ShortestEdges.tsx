import { Node } from "reactflow";

export function shortestEdges(nodes: Node[], newNode: Node, targetId: string) {
  const targetNode = nodes.find((node: Node) => node.id === targetId);
  //   const sourceNode = nodes.find((node: Node) => node.id === newNode);
  if (
    newNode?.position?.x !== undefined &&
    targetNode?.position?.x !== undefined &&
    newNode.position.x > targetNode.position.x
  ) {
    console.log("Swapping defintion of source", newNode, targetId);
    // Swap newNode and targetId using destructuring assignment
    [targetId, newNode.id] = [newNode.id, targetId];
  }

  return { newSourceId: newNode.id, newTargetId: targetId };
}
