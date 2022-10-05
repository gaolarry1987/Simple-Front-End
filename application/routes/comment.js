var express = require("express");
var router = express.Router();
var db = require("../database");



router.post("/create", async function (req, res, next) {
  const { comment, imageid } = req.body;
  console.log(req.session);
  let row = await db.query(
    "INSERT INTO Comments (content, Images_id, Users_id) VALUES (?,?,?)",
    [comment, imageid, req.session.user.id]
  );
  if (!row) {
    req.flash("error", "sorry, comment cannot be created");
  }
  return res.redirect("/posts/"+imageid);
});

module.exports = router;
