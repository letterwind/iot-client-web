var five = require("johnny-five");
var board = new five.Board({
    port: "/dev/ttyUSB0"
});
var tempValue;
board.on('ready', function() {
    console.log("Arduino 連線成功");

    var thermometer = new five.Thermometer({
        controller: "DS18B20",
        pin: 2
    });

    thermometer.on('change', function() {
        console.log(this.celsius + "°C");
        console.log("0x" + this.address.toString(16));
        tempValue = this.celsius;
    });
});

board.on('exit', function() {

});


exports.Temp = {
    "Value": tempValue
};