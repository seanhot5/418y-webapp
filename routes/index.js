var express = require('express');
var router = express.Router();
var app = express();

/* GET home page. */
router.get('/', function(req, res, next){
  //console.log("Hello World");
  res.render('index', { title: 'Express' });
});

router.get('/add', async function(req,res){
  //res.render('index', { title: 'Express' })
  let num1 = req.query.firstNum;
  let num2 = req.query.secondNum;
  let num3 = parseInt(num1) + parseInt(num2)
  console.log(num1)
  console.log(num2)
  console.log(num3)
  //res.json({"Addition": num3})
  res.render('index', {number: num3})
});



module.exports = router;
