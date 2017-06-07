var exec = require('child_process').exec;
var _filePath = '';

function time() {
    var now = new Date();
    var str = `${now.getFullYear()}_${now.getMonth()+1}_${now.getDate()}_${now.getHours()<10?'0'+now.getHours():now.getHours()}_${now.getMinutes()<10?'0'+now.getMinutes():now.getMinutes()}_${now.getSeconds()<10?'0'+now.getSeconds():now.getSeconds()}`;
    return str;
}

exports.myCamera = function() {
    var path = '';
    var file = time() + '.jpg';
    return {
        takePic: function() {
            path = './www/img/ram/' + file;

            var cmd = 'raspistill -w 1024 -h 768 -o ' + path + ' -t 1 -q 80';

            exec(cmd, (error, stdout, stderr) => {
                if (error) {
                    throw error;
                    // return error;
                } else {
                    console.log('拍照了');
                }
            });
        },
        FilePath: function() {
            return path;
        },
        FileName: function() {
            return file;
        }
    }
}