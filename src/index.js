import express from "express";
import email from "./utils/email.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Home",
  });
});

app.post("/sendemail", async (req, res) => {
  let { fromEmail, message, fromName } = req.body;
  if (fromEmail && message && fromName) {
    let kirim = await email.sendEmail({ fromEmail, message, fromName });
    res.json({
      kirim,
    });
  } else {
    res.json({
      message: "Body not complete",
    });
  }
});

app.listen(4000, () => {
  console.log("Server is running");
});
