var express = require('express');
var router = express.Router();
var db = require("../database");

/* GET users listing. */
router.get('/',async function(req, res, next) {
  let query = "SELECT * FROM Images";
  let params = [];
  if (req.query.search){
    params.push("%"+req.query.search+"%");
    query = "SELECT * FROM Images WHERE title LIKE ?";
  }
  let row= await db.query(query,params);
  console.log(row)
  res.render('viewpost', { images:row, title: 'viewpost' });
});

router.get('/create', function(req, res, next) {
  res.render('postimage', { title: 'postimage' });
});

/* GET image detail. */
router.get('/:id',async function(req, res, next) {
  let query = "SELECT * FROM Images WHERE id=?";
  let row= await db.query(query,[req.params.id]);
  let query1 = `
  SELECT Comments.content, Comments.created_on, Users.name
  FROM Comments 
  INNER JOIN Users ON Comments.Users_id = Users.id
  WHERE Images_id=?`;
  let row1 = await db.query(query1, [req.params.id]);
  row1=row1.map(data=>{
    let date = new Date(data.created_on)
    data.created_on = (date.getMonth()+1)+"/"+date.getDate()+"/"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes();
    return data;
  })
  console.log(row1) 
  res.render('postDetail', {title:"postDetail",image:row[0], comments:row1});
});



router.post('/create', async function(req, res, next) {
 const {title,description} = req.body;
 console.log(req.session);
 try {
   if (!req.files){
    req.flash("error","please provide the files");
    return res.redirect("/posts/create");
   }else {
    let uploadfile = req.files.image; 
    uploadfile.mv('./public/uploads/'+ uploadfile.name);
    let row= await db.query(
      "INSERT INTO Images (title, description, image, Users_id) VALUES (?,?,?,?)",
      [title, description, uploadfile.name, req.session.user.id]
    )
    if (!row){
      req.flash("error","sorry, post cannot be created");
    }
    return res.redirect("/posts");
   }
 } catch (error) {
   console.log(error);
   req.flash("error","sorry, post cannot be created");
   return res.redirect("/posts/create");
 }
});

module.exports = router;
