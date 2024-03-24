import ReactFlow, {
  Node,
  Panel,
  MiniMap,
  NodeResizer,
  useNodesState,
  useEdgesState,
} from "reactflow";

import CustomNode from "./CustomNode";
import "reactflow/dist/style.css";
import { initEdges, initNodes } from "./data";
import { useRef, useState } from "react";
import getRandomLightColor from "./randomColors";
import findImage from "./findPhoto";
// import { shortestEdges } from "./ShortestEdges";

const nodeTypes = {
  custom: CustomNode,
};

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges);

  const dragRef = useRef<Node | null>(null);
  const [target, setTarget] = useState<Node | null>(null);

  // @ts-expect-error TS6133: 'evt' is declared but its value is never read.
  const onNodeDragStart = (evt: React.MouseEvent, node: Node) => {
    console.log("Drag start:", node);
    dragRef.current = node;
  };
  // @ts-expect-error TS6133: 'event' is declared but its value is never read.
  const onNodeDrag = (event: React.MouseEvent, node: Node) => {
    // console.log("Dragging:", node);
    const centerX = node.position.x + node.width! / 2;
    const centerY = node.position.y + node.height! / 2;

    const targetNode = nodes.find(
      (n) =>
        centerX > n.position.x &&
        centerX < n.position.x + n.width! &&
        centerY > n.position.y &&
        centerY < n.position.y + n.height! &&
        n.id !== node.id
    );
    // console.log("Potential target:", targetNode);
    setTarget(targetNode ?? null);
  };
  // @ts-expect-error TS6133: 'event' is declared but its value is never read.
  const onNodeDragStop = (event: React.MouseEvent, node: Node) => {
    // const nodeColor = node.data.label;
    // const targetColor = target?.data.label;
    // const id = getId();
    if (!target) {
      setTarget(null);
      dragRef.current = null;
      return;
    }
    const newNode = {
      id: node.id + "_" + target?.id, // Assuming you want to set an ID for the node
      type: "custom",
      position: node.position,
      data: {
        name: "Mixing...",
        job: "",
        emoji: "🧪",
        color: getRandomLightColor(),
      },
    };
    console.log("New node:", newNode);

    setNodes((nds) => {
      // Add the new node first
      const nodesWithNew = nds.concat(newNode);

      // Then remove both the node and the target node
      return nodesWithNew.filter(
        (n) => n.id !== node.id && (!target || n.id !== target.id)
      );
    });

    // swapping edges to the shortest side
    console.log("New node id:", newNode.id);
    let sourceId = newNode.id; // ID of the source node
    let targetId = "a"; // ID of the target node

    const targetNode = nodes.find((node) => node.id === targetId);

    // Ensure targetNode and its position are valid before comparing
    if (
      targetNode &&
      targetNode.position &&
      newNode.position &&
      newNode.position.x > targetNode.position.x
    ) {
      // Swap sourceId and targetId using destructuring assignment
      [sourceId, targetId] = [targetId, sourceId];
    }

    // console.log("newSourceId, newTargetId", newSourceId, newTargetId);
    // Define the new edge
    const newEdge = {
      id: `${sourceId}-${targetId}`,
      source: sourceId,
      target: targetId,
    };

    // Update the edges state to include the new edge
    setEdges((eds) => [...eds, newEdge]);
    console.log("mixing email is", node.data, target.data.email);
    // Set a timeout to change the new node's name after 5 seconds
    setTimeout(() => {
      setNodes((currentNodes) =>
        currentNodes.map((n) => {
          if (n.id === newNode.id) {
            return {
              ...n,
              data: {
                ...n.data,
                name: `Baby of ${node.data.name} and ${target?.data.name}`,
                job: findImage(newNode.id),
                emoji: "👶",
                email: [node.data.email, target.data.email],
              },
            };
          }
          return n;
        })
      );
    }, 3000);
    setTarget(null);
    dragRef.current = null;
  };

  return (
    <ReactFlow
      nodes={nodes}
      onNodesChange={onNodesChange}
      edges={edges}
      onEdgesChange={onEdgesChange}
      panOnScroll
      selectionOnDrag
      fitView
      nodeTypes={nodeTypes}
      onNodeDragStart={onNodeDragStart}
      onNodeDrag={onNodeDrag}
      onNodeDragStop={onNodeDragStop}
    >
      <Panel position="top-left" style={{ fontSize: "50px" }}>
        Create babies for my friends
      </Panel>
      <MiniMap />
      <NodeResizer />
    </ReactFlow>
  );
}

export default App;
