
console.log('Web serverni boshlash');
const express = require("express");
const app = express();//expressning app objectini yuboradi
const http = require("http");

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

/* //Portimizda router yasaymiz
app.get("/", function(req,res) {
  res.render("project");
  });
 */

const server = http.createServer(app);
let PORT = 3000;
server.listen (PORT,function () {
console.log(`The server is running successfully on port: ${PORT}`);
});
