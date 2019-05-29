var express = require('express');
var router = express.Router();

let items = [
  { name: '컴퓨터', price: 1000000, id: 0 },
  { name: '냉장고', price: 6000000, id: 1 },
  { name: '청바지', price: 80000, id: 2 },
  { name: '장난감', price: 100000, id: 3 },
  { name: '컵', price: 3000, id: 4 },
  { name: '스마트폰', price: 2000000, id: 5 }
]

router.get('/:id', function(req, res, next) {
  res.send(items[parseInt(req.params.id)]);
});

router.get('/', function(req, res, next) {
  res.send(items);
});

module.exports = router;
