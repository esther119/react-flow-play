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
    if (textInput.trim() !== "") {
      // You need to implement sending email functionality here
      // This could involve making an HTTP request to a server-side script that handles sending the email
      // For example, using fetch() or XMLHttpRequest()
      // You would typically send the text as a parameter to the server-side script
      // The server-side script would then use a mail service (e.g., Nodemailer for Node.js) to send the email
      // Here's a simplified example of sending a POST request using fetch():
      fetch("http://localhost:3000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          wishes: textInput,
          emailAddress: "lampmaa22@gmail.com",
          name: "teddy",
        }),
      })
        .then((response) => {
          if (response.ok) {
            alert("Email sent successfully!");
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
              <input
                type="text"
                placeholder="Name the baby..."
                className="border border-gray-300 p-2 rounded-md mr-2"
                value={textInput}
                onChange={handleInputChange}
              />
              <button onClick={sendEmail}>
                <span className="[&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 496 512"
                  >
                    <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />
                  </svg>
                </span>
              </button>

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
