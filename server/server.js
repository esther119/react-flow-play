import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json()); // For parsing application/json

const email = process.env.EMAIL;
const password = process.env.PASSWORD;

const transporter = nodemailer.createTransport({
  service: "yahoo", // Or your email service
  auth: {
    user: email,
    pass: password,
  },
});

app.post("/send-email", (req, res) => {
  const { emailAddress, name, wishes } = req.body;
  console.log("server get send email data", emailAddress, name, wishes);
  console.log("call send email");
  const mailOptions = {
    from: email,
    to: emailAddress,
    subject: `baby wishes from ${name}`,
    text: wishes,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending email.");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully.");
    }
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
