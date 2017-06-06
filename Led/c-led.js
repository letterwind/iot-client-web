var five = require("johnny-five");
var board = new five.Board({
    port: "/dev/ttyUSB0"
});

board.on('ready', function() {
    console.log("Arduino 連線成功");
});

board.on('exit', function() {
    [12, 13].forEach((pin) => {
        board.digitalWrite(pin, 0);
    });

});

var toggleLed = function(pin) {
    console.log(pin);
    board.pinMode(pin, board.MODES.OUTPUT);
    board.digitalWrite(pin, board.pins[pin].value ? 0 : 1);
}

exports.CLed = {
    "toggleLed": toggleLed
};