import express from "express";
import contactEmail from "../Nodemailer.js"; // ✅ Use relative path

const router = express.Router(); // ✅ use Router, not express()

router.post("/contact", (req, res) => {
  const name = `${req.body.firstName} ${req.body.lastName}`;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;

  const mail = {
    from: name,
    to: process.env.EMAIL_USER,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ status: "Message Failed", error });
    } else {
      res.status(200).json({ status: "Message Sent" });
    }
  });
});

export default router;
