import ReactFlow, {
  Panel,
  MiniMap,
  NodeResizer,
  useNodesState,
  useEdgesState,
} from "reactflow";

import CustomNode from "./CustomNode";
import "reactflow/dist/style.css";
import { initEdges, initNodes } from "./data";

const nodeTypes = {
  custom: CustomNode,
};

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
      <Panel position="top-left"> Create babies for my friends </Panel>
      <MiniMap />
      <NodeResizer />
    </ReactFlow>
  );
}

export default App;
