import React, { memo } from "react";
import { Handle, Position } from "reactflow";

interface CustomNodeProps {
  data: {
    emoji: string;
    name: string;
    job: string;
    color: string;
  };
}

const CustomNode: React.FC<CustomNodeProps> = ({ data }) => {
  const isImageUrl = (url: string) => {
    return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
  };

  const style = {
    backgroundColor: data.color ? data.color : "bg-100", // Default color as fallback
  };

  return (
    <div className="px-4 py-2 shadow-md rounded-md border-2" style={style}>
      <div className="flex">
        <div
          className={
            "rounded-full w-12 h-12 flex justify-center items-center bg-gray-100"
          }
        >
          {data.emoji}
        </div>
        <div className="ml-2">
          <div className="text-lg font-bold">{data.name}</div>

          {isImageUrl(data.job) ? (
            <div className="flex justify-center items-center">
              <img src={data.job} alt={data.name} className="w-32 mx-auto" />
            </div>
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
