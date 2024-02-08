const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var sql = require('mysql');



var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1330",
  database:"contact"
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// con.query(q,(err,res))

app.get('/', (req, res) => {
  res.sendFile(__dirname+'/index.html');
});

app.get('/online_ide', (req, res) => {
    res.sendFile(__dirname+'/ide.html');
  });

  // app.get('/online_ide/web', (req, res) => {
  //   res.sendFile(__dirname+'/web.html');
  // });

  app.get('/converter', (req, res) => {
    res.sendFile(__dirname+'/converter.html');
  });

  app.get('/materials', (req, res) => {
    res.sendFile(__dirname+'/materials.html');
  });


app.listen(8000);