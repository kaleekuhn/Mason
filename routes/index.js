var express = require('express');
var app = express();
var router = express.Router();
var mustache = require('mustache');
var fs = require('fs');
var path = require('path');



/* GET home page. */
router.get('/', function(req, res, next) {
  //var output = mustache.render();
  var data = {
    title: "Title",
    content: "Once upon a time there was a lone moose, who was romaing the wild.",
    thumbnails: [
      {
        Name: "Events"
      },
      {
        Name: "Check-in"
      },
      {
        Name: "Lodge Locator"
      },
      {
        Name: "Profile"
      }
    ]
  };
  

  var file = fs.readFile("./src/html/homepage.html", "utf-8", function(err,content) {
    if(err) {
      console.log("Error: " + err);
      res.render('index', { title: 'Express' });

      return;
    }
    
    console.log("");
    var output = mustache.render(content, data);
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
