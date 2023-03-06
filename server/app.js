const express = require("express");
const app = express();

app.get("/status", (request, response) => {
  response.send(JSON.stringify({ message: "Service healthy" }));
});
// Request handlers go here
app.listen(4040, () => console.log("Listening on port 4040"));
