import express, { Response, Request, Application } from "express";
const app: Application = express();
const util_logger = require("./core/middleware/logger");

// Routes -- FUN
const text_to_binary = require("./routes/fun/text_to_binary");
const random_dare = require("./routes/fun/random_dare");
const random_truth = require("./routes/fun/random_truth");
const random_fact = require("./routes/fun/random_fact");
const heads_or_tails = require("./routes/fun/heads_or_tails");

// Logger
app.use(util_logger.logger);

// Use Routes -- FUN
app.use("/fun/text_to_binary", text_to_binary);
app.use("/fun/random_dare", random_dare);
app.use("/fun/random_truth", random_truth);
app.use("/fun/random_fact", random_fact);
app.use("/fun/heads_or_tails", heads_or_tails);

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
