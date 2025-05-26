import express from "express";
import "dotenv/config";
import cors from "cors";

import contactRouter from "./Router/ContactRouter.js";

const app = express();
app.use(express.json());
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS);

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST",
    credentials: true,
  })
);
console.log("EMAIL_USER:", process.env.EMAIL_USER);

app.use("/api", contactRouter);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
