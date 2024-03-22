import React, { memo, useState } from "react";
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
  const [textInput, setTextInput] = useState("");
  const isImageUrl = (url: string) => {
    return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
  };
  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTextInput(event.target.value);
  };

  function sendEmail() {
    console.log("email input", textInput);
    // Get the input text value
    // var text = document.getElementById("textInput").value;
    // Check if the text is not empty
    // if (textInput.trim() !== "") {
    //   // You need to implement sending email functionality here
    //   // This could involve making an HTTP request to a server-side script that handles sending the email
    //   // For example, using fetch() or XMLHttpRequest()
    //   // You would typically send the text as a parameter to the server-side script
    //   // The server-side script would then use a mail service (e.g., Nodemailer for Node.js) to send the email
    //   // Here's a simplified example of sending a POST request using fetch():
    //   fetch("/send-email", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ text: text }),
    //   })
    //     .then((response) => {
    //       if (response.ok) {
    //         alert("Email sent successfully!");
    //       } else {
    //         alert("Failed to send email. Please try again later.");
    //       }
    //     })
    //     .catch((error) => {
    //       console.error("Error:", error);
    //       alert("Failed to send email. Please try again later.");
    //     });
    // } else {
    //   alert("Please enter some text before sending.");
    // }
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
              <input
                type="text"
                placeholder="Name the baby..."
                className="border border-gray-300 p-2 rounded-md mr-2"
                value={textInput}
                onChange={handleInputChange}
              />
              <button onClick={sendEmail}>Send</button>
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
