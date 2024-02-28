import ReactFlow, {
  // Controls,
  // Background,
  useNodesState,
  useEdgesState,
} from "reactflow";

import "reactflow/dist/style.css";

const initNodes = [
  {
    id: "a",
    data: { label: "Node K" },
    position: { x: 250, y: 0 },
  },
  {
    id: "b",
    data: { label: "Node D" },
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
    <div className="App">
      {/* <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        panOnScroll
        // selectionOnDrag
        fitView
      >
        <MiniMap />
        <NodeResizer />
      </ReactFlow> */}
    </div>
  );
}

export default App;
