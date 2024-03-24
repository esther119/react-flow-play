import React, { memo, useState } from "react";
import { Handle, Position } from "reactflow";

interface CustomNodeProps {
  data: {
    email?: string[] | string;
    emoji: string;
    name: string;
    job: string;
    color: string;
  };
}

const CustomNode: React.FC<CustomNodeProps> = ({ data }) => {
  const [textInput, setTextInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [success, setSuccess] = useState(false);

  const isImageUrl = (url: string) => {
    return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
  };
  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTextInput(event.target.value);
  };

  const handleNameChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setNameInput(event.target.value);
  };

  function sendEmail() {
    console.log("email input", textInput);
    if (textInput.trim() !== "") {
      fetch("http://localhost:3000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          wishes: textInput,
          emailAddress: "lampmaa22@gmail.com",
          name: nameInput,
        }),
      })
        .then((response) => {
          if (response.ok) {
            setSuccess(true);
          } else {
            alert("Failed to send email. Please try again later.");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Failed to send email. Please try again later.");
        });
    } else {
      alert("Please enter some text before sending.");
    }
  }

  const style = {
    backgroundColor: data.color ? data.color : "bg-white-100", // Default color as fallback
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
              {!success ? (
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="border border-gray-300 p-2 rounded-md mb-2 text-sm mr-2"
                    value={nameInput}
                    onChange={handleNameChange}
                  />
                  <textarea
                    placeholder="Email your wishes to their baby..."
                    className="border border-gray-300 p-2 rounded-md mr-2 mb-2 text-sm"
                    value={textInput}
                    onChange={handleInputChange}
                  />
                  <button
                    onClick={sendEmail}
                    className="bg-red-500 px-2 py-1 flex items-center text-white text-sm rounded rounded-tr-1g rounded-bl-1g w-28"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Send love
                  </button>
                </div>
              ) : (
                <p className="text-green-500 mr-2 text-sm">
                  Delivered your wish! 🍼
                </p>
              )}
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
