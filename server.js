
console.log('Web serverni boshlash');
const express = require("express");
const app = express();//expressning app objectini yuboradi
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err,data) => {
  if (err){
    console.log("ERROR:", err);
  }else{
    user = JSON.parse(data)
  }
});


// 1: Kirish code

app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2: Session Code


// 3: View Code

app.set("views","views");
app.set("view engine","ejs");

// 4: Routing code

app.post("/create-item", (req, res) => {
  console.log(req)
  res.json({test: "success"});
});

app.get('/', function (req, res) {
    res.render('harid');
});

 //Portimizda router yasaymiz
app.get("/portifolio", (req,res) => {
  res.render("portifolio", {user: user});
  });


const server = http.createServer(app);
let PORT = 3000;
server.listen (PORT,function () {
console.log(`The server is running successfully on port: ${PORT}`);
});
