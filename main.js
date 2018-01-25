var express=require('express')
var app = express()

app.get('/', function (req, res)  {
    var x= mySpecialFunction(10, 5);
    res.send(x.toString())
})

function mySpecialFunction(a, b) {
    return a + b;
}

app.listen(3000)