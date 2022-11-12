const app = require("express")();
const port = 3000;

app.get("/", (req: any, res: any) => {
  res.send("he");
});

app.listen(port, () => {
  console.log("API listening on port " + port);
});
