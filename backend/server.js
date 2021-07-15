const path = require("path");
const app = require("express")();
const express = require("express");

const PORT = 9090;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "../Make_Files_Public")));
app.use(express.static(path.join(__dirname, "../frontend/public")));
app.use(require("./endpoints"));

app.get("*", (req, res) => {
  /// Note all request will reach here..!
  res.redirect("/download");
});

app.listen(PORT, () => {
  console.log(`Server is listening to port ${PORT}`);
});
