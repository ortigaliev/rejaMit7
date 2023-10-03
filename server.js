
const http = require("http");
const mongodb = require('mongodb');

let db;
const connectionString = "mongodb+srv://Max_Mit7:ONHKVnH0aCQu9PQ0@mit-7.fpdtxon.mongodb.net/?retryWrites=true&w=majority";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("Error on connection MongoDB");
    else{
      console.log("MongoDB connection succeed");
      const app = require('/app');
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen (PORT,function () {
        console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
      });
    }
  });
