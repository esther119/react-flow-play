import React, { useEffect, useState, useRef } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  Node,
  Edge,
  OnNodesChange,
  OnEdgesChange,
  Panel,
} from "reactflow";
import {
  nodes as initialNodes,
  edges as initialEdges,
} from "./initial-elements";

import "reactflow/dist/style.css";

interface InitialElements {
  id: string;
  type?: string;
  data: { label?: string; color?: string };
  position: { x: number; y: number };
  style?: React.CSSProperties;
}

const panelStyle: React.CSSProperties = {
  fontSize: 12,
  color: "#777",
};

const CollisionDetectionFlow: React.FC = () => {
  // this ref stores the current dragged node
  const dragRef = useRef<Node | null>(null);

  // target is the node that the node is dragged over
  const [target, setTarget] = useState<Node | null>(null);

  const [nodes, setNodes, onNodesChange] = useNodesState(
    initialNodes as InitialElements[]
  );
  const [edges, setEdges, onEdgesChange] = useEdgesState(
    initialEdges as Edge[]
  );

  const onNodeDragStart = (event: React.MouseEvent, node: Node) => {
    dragRef.current = node;
  };

  const onNodeDrag = (event: React.MouseEvent, node: Node) => {
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

    setTarget(targetNode ?? null);
  };

  const onNodeDragStop = (event: React.MouseEvent, node: Node) => {
    const nodeColor = node.data.label;
    const targetColor = target?.data.label;

    setNodes((nds) =>
      nds.map((n) => {
        if (n.id === target?.id) {
          return {
            ...n,
            data: { ...n.data, color: nodeColor, label: nodeColor },
          };
        }
        if (n.id === node.id && target) {
          return {
            ...n,
            data: { ...n.data, color: targetColor, label: targetColor },
          };
        }
        return n;
      })
    );

    setTarget(null);
    dragRef.current = null;
  };

  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === target?.id) {
          return {
            ...node,
            style: {
              ...node.style,
              backgroundColor: dragRef.current?.data.color,
            },
            data: { ...node.data, label: dragRef.current?.data.color },
          };
        } else if (node.id === dragRef.current?.id && target) {
          return {
            ...node,
            style: { ...node.style, backgroundColor: target?.data.color },
            data: { ...node.data, label: target?.data.color },
          };
        } else {
          return {
            ...node,
            style: { ...node.style, backgroundColor: node.data.color },
            data: { ...node.data, label: node.data.color },
          };
        }
      })
    );
  }, [target, nodes]);

  return (
    <div className="container">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange as OnNodesChange}
        onEdgesChange={onEdgesChange as OnEdgesChange}
        fitView
        onNodeDragStart={onNodeDragStart}
        onNodeDrag={onNodeDrag}
        onNodeDragStop={onNodeDragStop}
      >
        <Panel position="top-left" style={panelStyle}>
          Drop any node on top of another node to swap their colors
        </Panel>
      </ReactFlow>
    </div>
  );
};

export default CollisionDetectionFlow;
