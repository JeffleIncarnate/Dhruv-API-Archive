const app = require("express")();
const port = 3000;

// Routes
const text_to_binary = require("./routes/fun/text_to_binary");

// Use Routes
app.use("/fun/text_to_binary", text_to_binary);

// Default
app.get("/", (req: any, res: any) => {
  res.send("hehe");
});

// Fallback
app.get("*", (req: any, res: any) => {
  res.send({
    detail: "This endpoint does not exist, please pick one that does",
  });
});

app.listen(port, () => {
  console.log("API listening on port " + port);
});
