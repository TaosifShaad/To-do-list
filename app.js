const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get('/', function(req, res){
  let day = date.getDate();
  // let day = date.getDay();
  res.render("list", {ListTitle: day, newListItems: items});
});

app.post('/', function(req, res){
  let item = req.body.newItem;
  if (req.body.clear === "clean"){
    items = [];
    res.redirect('/');
  }
  console.log(req.body);
  if (req.body.list === 'work List'){
    workItems.push(item);
    res.redirect("/work");
  }else{
    items.push(item);
    res.redirect("/");
  }
});

app.get('/work', function(req, res){
  res.render("list", {ListTitle: "work List", newListItems: workItems});
});

app.get('/about', function(req, res){
  res.render("about");
});

// app.post('/work', function(req, res){
//   let item = req.body.newItem;
//   res.redirect("/work");
// });

app.listen(3000, function(){
  console.log("app listening on port 3000");
})
