var express = require('express');
var router = express.Router();
var Mustache = require('mustache');
var fs = require('fs');
var mysql= require('mysql');
var appp= express();

/*appp.listen('3000',()=>{
  console.log('server started');
})*/
//initialize database with table
var db= mysql.createConnection({

  host:'localhost',
  user: 'root',
  password:'',
  database: 'sampledb'
});
 
db.connect(function(error) {
  if(error)
  console.log('error:(');
  else 
  console.log('connected');
});

router.get('/name', function(req,res){
 
  db.query("INSERT INTO temp SET NAME='kalee', PASSWORD='1234' ", function(error, rows, fields) {
  if(error)
  console.log('error selecting from data base');
  else 
  console.log('QUERY SUCCESSFUL');
  })
});

router.get('/namee', function(req,res){
 
  db.query("DELETE FROM temp WHERE NAME='kalee' ", function(error, rows, fields) {
  if(error)
  console.log('error selecting from data base');
  else 
  console.log('QUERY SUCCESSFUL');
  })
});
router.get('/table', function(req,res){
  var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
  res.render("Added!");
});

router.get('/deltable', function(req,res){
  var sql = "DROP TABLE customers";
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table deleted");
  });
});









/* GET home page. */
router.get('/', function(req, res, next) {
  //var output = mustache.render();
  var data = {
    title: "Title",
    content: "Once upon a time there was a lone moose, who was romaing the wild.",
    thumbnails: [
      {
        Name: "Events",
        Reference: "/events"
      },
      {
        Name: "Check-in",
        Reference: "/events"
      },
      {
        Name: "Lodge Locator",
        Reference: "/events"
      },
      {
        Name: "Profile",
        Reference: "/events"
      }
    ]
  }

  var view = {
    /*change these to get from table*/
    name: "Joe",
    content: "Moose are majestic"
  };
  

  var file = fs.readFile("./src/html/homepage.html", "utf-8", function(err,content) {
    if(err) {
      console.log("Error: " + err);
      res.render('index', { title: 'Express' });

      return;
    }
    
    console.log(content);
    var output = Mustache.render(content, data);
    //res.render('index', { title: 'Express' });
    //res.send(output, { title: 'Mustache' });
    res.send(output);
  });

  // var output = Mustache.render(file, view);
  // //res.render('index', { title: 'Express' });
  // //res.send(output, { title: 'Mustache' });
  // res.send(output);

});

/* GET home page. */
router.get('/events', function(req, res, next) {
  //var output = mustache.render();

  var event = {
    title: "Event Planner!",
    events: [
      {
        Name: "Runathon",
        Location: "Dallas",
        Date: "1/1/18"
      },
      {
        Name: "Moose Hunt",
        Location: "Arkansas",
        Date: "2/6/17"
      },
      {
        Name: "Galaga",
        Location: "Cali",
        Date: "11/21/18"
      },
    ]
  }

  var moose = {};
  moose.title = "Event Planner!";
  moose.events = [];

  for(var x=1;x<4;x++)
{
 
  sql = "SELECT * FROM events where Number="+x;
  db.query(sql, function (err, result) {
    if (err) throw err;
     temp = {}
    temp.Name=result[0].Name;
    temp.Location=result[0].Location;
    temp.Date=result[0].Date;
    moose.events.push(temp);
    
  })
  
 
  
}


 /* temp.Date= "11/21/18";
 
  moose.events.push(temp);
  temp.Date="12/10/10";
  moose.events.push(temp);
  console.log(moose);
*/
    var view = {
      /*change these to get from table*/
      name: "Joe",
      content: "Moose are majestic"
    };
    

    var file = fs.readFile("./src/html/events.html", "utf-8", function(err,content) {
      if(err) {
        console.log("Error: " + err);
        res.render('index', { title: 'Express' });

        return;
      }
      
      //console.log(content);
      var output = Mustache.render(content, moose);
      //res.render('index', { title: 'Express' });
      //res.send(output, { title: 'Mustache' });
      res.send(output);
    });

    // var output = Mustache.render(file, view);
    // //res.render('index', { title: 'Express' });
    // //res.send(output, { title: 'Mustache' });
    // res.send(output);

});

module.exports = router;
