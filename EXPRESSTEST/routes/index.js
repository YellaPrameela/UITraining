var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let data=[
    {
      name: "Sowmya",
      age:21,
      salary: 40000
    },
    {
      name: "Kim Seok Jin",
      age:28,
      salary: 5000000
    },
  ]
  res.render('index', { 
    title: 'Express' ,
    myName:"Sowmya",
    users: data
   });
});

module.exports = router;
