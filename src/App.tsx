import ReactFlow, {
  // Controls,
  // Background,
  MiniMap,
  NodeResizer,
  useNodesState,
  useEdgesState,
} from "reactflow";

import CustomNode from "./CustomNode";
import "reactflow/dist/style.css";

const nodeTypes = {
  custom: CustomNode,
};

const initNodes = [
  {
    id: "a",
    type: "custom",
    data: { name: "Esther", job: "Me", emoji: "🐥" },
    position: { x: 250, y: 0 },
  },
  {
    id: "b",
    type: "custom",
    data: { name: "Tianhui", job: "Single mom", emoji: "🏃🏻‍♀️" },
    position: { x: 100, y: 100 },
  },
];

const initEdges = [
  {
    id: "a-b",
    source: "a",
    target: "b",
    animated: true,
  },
];

function App() {
  const [nodes, , onNodesChange] = useNodesState(initNodes);
  const [edges, , onEdgesChange] = useEdgesState(initEdges);

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
    >
      <MiniMap />
      <NodeResizer />
    </ReactFlow>
  );
}

export default App;
