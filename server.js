var express = require("express");
var app = express();
var path  = require("path");
//var pg = require("pg");
var {Pool, Client} = require('pg');



// configuration =================
    app.use(express.static(path.join(__dirname, '/dist/projektApp')));

//application
app.get('/', function(req, res)
 {
    res.sendFile('index.html', { root: __dirname+'/dist/projektApp'});

 });

 /**
app.get("/reservierung", function(req, res)
{
    reservierung = [
    {
    vorname: "natia",
    nachname:"Gabrichidze",
    telefon: "017687427413",
    email: "ngabrichidze25@gmail.com",
    adresse: "Vahrerstrassse 254",
    spielraum: "billiardraum1",
    personenanzahl: "6",
    zusaztraum: "nein",
    datum: "2021-05-23",
    spielanfang: "18:00",
    spielende: "20:00"
  }
  ];
    res.send(reservierung);

});*/


var client = new Client({
  //connectionString:connectionString
  database: "spielhalle",
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "test"
});

//client.connect();

  client.connect(function(err)
  {
       if(err) throw err;
      else console.log("Connected!");
      client.query('SELECT * FROM public."Kunde"',
            function(error,results,fields)
            {
                 if(error) throw error;
                 console.log(results);
                 res.send(results);

                 client.end(function(err)
                 {
                      if(err) throw err;
                      console.log("Connection end");
                 });
            }
    );
});





 // listen (start app with node server.js) ======================================
 app.listen(8080, function(){
      console.log("App listening on port 8080");
});
