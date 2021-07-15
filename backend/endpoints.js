const path = require("path");
const fs = require("fs");
const router = require("express").Router();

router.get("/download", (req, res) => {
  const dirName = path.join(__dirname, "../Make_Files_Public");

  const filesNamesToSend = fs.readdirSync(dirName);
  //console.log(filesNamesToSend);

  res.render(path.join(__dirname, "../frontend/src/download.ejs"), {
    files: filesNamesToSend,
  });
});

module.exports = router;
