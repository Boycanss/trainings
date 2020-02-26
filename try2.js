const fs = require('fs');

function readModuleFile(path, callback) {
    try {
        var filename = require.resolve(path);
        fs.readFile(filename, 'utf8', callback);
    } catch (e) {
        callback(e);
    }
}

readModuleFile('./inputin.in', function (err, int) {
    const data= int.split(/\r?\n/);
    const length = data[0];
    const input = Array(parseInt(length)).fill(null).map(() => Array(4));
    var count = 0;
    for (let i = 0; i< length; i++) {
        const arr = [];
        const M = parseInt(data[count+1]);
        
    }
    console.log(input);    
});

