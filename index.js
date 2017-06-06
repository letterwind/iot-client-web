var express = require("express");
var cLed = require("./Led/c-led.js");
var app = express();


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/', (req, res) => {
    res.send('這是首頁');
});
app.get("/api/control/led/:pin", (req, res, next) => {
    cLed.CLed.toggleLed(req.params.pin);
    res.send('ok');
});


app.listen(3535, () => {
    console.log("server start as 3535");
});