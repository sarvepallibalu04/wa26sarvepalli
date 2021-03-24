var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    fake_url = "https://fake.com/path" + req.url
    const url = new URL(fake_url)
    const search_params = url.searchParams
    let x = search_params.get('x')
    if(x === null){
        let rand = Math.floor(Math.random()*100)
        res.render('computation', {compute: `Math.abs applied to ${rand} is ${Math.abs(rand)}`});
    }else {
        res.render('computation', {compute: `Math.abs applied to ${x} is ${Math.abs(x)}`});
    }
});

module.exports = router;
