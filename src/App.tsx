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

const nodeTypes = {
  custom: CustomNode,
};

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges);

  const dragRef = useRef<Node | null>(null);
  const [target, setTarget] = useState<Node | null>(null);

  const onNodeDragStart = (evt: React.MouseEvent, node: Node) => {
    console.log("Drag start:", node);
    dragRef.current = node;
  };
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
    console.log("Potential target:", targetNode);
    setTarget(targetNode ?? null);
  };

  const onNodeDragStop = (event: React.MouseEvent, node: Node) => {
    // const nodeColor = node.data.label;
    // const targetColor = target?.data.label;
    // const id = getId();

    const newNode = {
      id: "10", // Assuming you want to set an ID for the node
      position: node.position,
      data: { name: `Node 10`, job: "a new node", emoji: "👋🏻" },
    };
    setNodes((nds) => nds.concat(newNode));
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
      <Panel position="top-left"> Create babies for my friends </Panel>
      <MiniMap />
      <NodeResizer />
    </ReactFlow>
  );
}

export default App;
