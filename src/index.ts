import express, { Response, Request, Application } from "express";
const app: Application = express();

// Routes
const text_to_binary = require("./routes/fun/text_to_binary");

// Use Routes
app.use("/fun/text_to_binary", text_to_binary);

// Root endpoint
app.get("/", (req: Request, res: Response) => {
  res.send("hehe");
});

// Fallback
app.get("*", (req: Request, res: Response) => {
  res.send({
    detail: "This endpoint does not exist, please pick one that does",
  });
});

app.listen(3000, () => {
  console.log(`API listening on port ${3000}`);
});
