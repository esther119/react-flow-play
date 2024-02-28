import React, { memo } from "react";
import { Handle, Position } from "reactflow";

interface CustomNodeProps {
  data: {
    emoji: string;
    name: string;
    job: string;
  };
}

const CustomNode: React.FC<CustomNodeProps> = ({ data }) => {
  const isImageUrl = (url: string) => {
    return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
  };
  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-stone-400">
      <div className="flex">
        <div className="rounded-full w-12 h-12 flex justify-center items-center bg-gray-100">
          {data.emoji}
        </div>
        {/* <img
          src="https://github.com/esther119/AI-spanish-flashcard-generator/blob/main/media/poer.png?raw=true"
          width="100"
        /> */}
        <div className="ml-2">
          <div className="text-lg font-bold">{data.name}</div>
          {/* Conditional rendering based on data.job being an image URL or text */}
          {isImageUrl(data.job) ? (
            <img src={data.job} alt={data.name} width="100" />
          ) : (
            <div className="text-gray-500">{data.job}</div>
          )}
        </div>
      </div>

      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
};
export default memo(CustomNode);
// export default CustomNode;
