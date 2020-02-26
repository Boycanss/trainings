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
    const words = Array(parseInt(length)).fill(null).map(() => Array(0));
    var count = 0;
    // const arr = [];
    for (let i = 0; i< length; i++) {
        const M = parseInt(data[count+1]);
        const N = parseInt(data[count+2]);
        input[i][0] = parseInt(M);
        input[i][1] = parseInt(N);        
        let j = count+3;
        do {
            words[i].push(data[j]);
            j++;
        } while (j< parseInt(M)+count+3);
        // console.log(words[i]);
        input[i][2] = words[i];
        const W = data[parseInt(M)+3+count];
        input[i][3] = W;
        count += (parseInt(M)+3);
    }
    console.log(input[0][3].length);
});

