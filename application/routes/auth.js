var express = require("express");
const { route } = require(".");
var router = express.Router();
var db = require("../database");
var bcrypt=require("bcrypt");

/* GET users listing. */
router.get("/login", function (req, res, next) {
  res.render("login", { title: "login" });
});

router.post("/post-login", async function (req, res, next) {
  const {name,password}=req.body;
  let row= await db.query(
    "SELECT * FROM Users WHERE name=?",
    [name]
  )
  if (!row[0]){
    req.flash("error","wrong login");
    return res.redirect("/auth/login");
  }
bcrypt.compare(password,row[0].password,(err,result)=>{
  if (!result){
    req.flash("error","wrong login");
    return res.redirect("/auth/login");
  }

  req.session.user = row[0];
  res.redirect("/posts");
})
  console.log(row);
});

router.get("/registration", function (req, res, next) {
  res.render("registration", { title: "registration" });
});

router.post("/create-account", function (req, res, next) {
  const { name, email, password, confirmPassword, confirmAge, ruleCheck } =
    req.body;
    if (password.trim()!==confirmPassword.trim() || confirmAge!=="on" || ruleCheck!=="on"){
      return res.status(403);
    }
    bcrypt.genSalt(10,(err,salt)=>{
      bcrypt.hash(password,salt,(err,hash)=>{
        let row = db.query(
          "INSERT INTO Users (name,email,password) VALUES (?,?,?)",
          [name,email,hash]
        );
        return res.redirect("/auth/login");
      })
    })
  });
  router.get("/logout", function (req, res, next) {
    delete req.session.user;
    res.redirect("/auth/login");
  });
module.exports = router;
