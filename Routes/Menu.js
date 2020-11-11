var express = require("express");
var router = express.Router();

// define the home page route
router.get("/all", function (req, res) {
  res.send("Birds home page");
});

// define the about route
router.post("/create", function (req, res) {
  res.send("About birds");
});

module.exports = router;
