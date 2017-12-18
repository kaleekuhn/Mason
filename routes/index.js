var express = require('express');
var router = express.Router();
var Mustache = require('mustache');
var fs = require('fs');



/* GET home page. */
router.get('/', function(req, res, next) {
  //var output = mustache.render();
  var view = {
    name: "Joe",
    content: "Moose are majestic"
  };
  

  var file = fs.readFile("./views/index.mustache", "utf-8", function(err,content) {
    if(err) {
      console.log("Error: " + err);
      res.render('index', { title: 'Express' });

      return;
    }
    
    console.log(content);
    var output = Mustache.render(content, view);
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
