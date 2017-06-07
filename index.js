var express = require("express");

var app = express();
app.use(express.static('www'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/', (req, res) => {
    res.send('這是首頁');
});
app.get("/api/control/led/:pin", (req, res, next) => {
    var cLed = require("./Led/c-led.js").cLed;
    cLed.CLed.toggleLed(req.params.pin);
    res.send('ok');
});

app.get("/api/control/camera", (req, res, next) => {
    var camera = require("./Camera/camera.js").myCamera();
    camera.takePic();
    res.send(camera.FileName());
});

app.get("/api/control/temperature", (req, res, next) => {
    var temp = require("./Temperature/temp.js").Temp;

    res.send(temp.Value);
});


app.listen(3535, () => {
    console.log("server start as 3535");
});