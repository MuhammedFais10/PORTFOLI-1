import nodemailer from "nodemailer";
import "dotenv/config";

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log("nodemailer varify Error ::", error);
  } else {
    console.log("Ready to send , Email verifaide");
  }
});

export default contactEmail;
