
console.log('Web serverni boshlash');
const express = require("express");
const app = express();//expressning app objectini yuboradi
const http = require("http");


app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.set("views","views");
app.set("view engine","ejs");



app.get("/", function(req,res) {
res.end("Hello world");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen (PORT,function () {
console.log(`The server is running successfully on port: ${PORT}`);
});
