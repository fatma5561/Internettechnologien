const {Pool, Client} = require('pg');

const client = new Client({
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
      client.query('SELECT * FROM public."Mitarbeiterdaten"',
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
