const express = require("express");
var mongoose = require("mongoose");

var MenuRoute = require("./Routes/Menu");

const app = express();
const port = 8080;

// //Set up default mongoose connection
// var mongoDB =
//   "mongodb+srv://nha12:4109674095@cluster0.rsmds.mongodb.net/PizzaStore?retryWrites=true&w=majority";
// mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

// //Get the default connection
// var db = mongoose.connection;

// //Bind connection to error event (to get notification of connection errors)
// db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use("/Menu", MenuRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
