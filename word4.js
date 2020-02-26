const fs = require('fs');

function readModuleFile(path, callback) {
    try {
        var filename = require.resolve(path);
        fs.readFile(filename, 'utf8', callback);
    } catch (e) {
        callback(e);
    }
}

class Words{
    constructor(M, N, Word, key){
        this.N= N;
        this.M= M;
        this.Word = Word;
        this.key = key;
    }

    MakeGrid(){
        const arrWord = [];
        const arr = Array(this.M).fill(null).map(() => Array(this.N));
        for (let i = 0; i< this.Word.length; i++) {         
            for (let j = 0; j< this.N; j++) {
                arr[i][j] = this.Word[i][j]
            }
        }
        // console.info(arr);
        return arr;
    }

    SearchWord(){
        const input = this.key;
        const table = this.MakeGrid();
        const table2 = this.MakeGrid();
        let detect = '';
        let Count = 0;
        // console.log(table);

        //left - right
        table.forEach(value=>{
            for (let i = 0; i< value.length; i++) {
                for (let j = i; j< input.length+i; j++) {
                    detect+=value[j]
                }
                // console.log(detect);
                if (detect===input) {
                    Count+=1;
                }
                detect='';  
                }

                //right - left
                const rValue = value.reverse();
                for (let i = 0; i< rValue.length; i++) {
                    for (let j = i; j< input.length+i; j++) {
                        detect+=rValue[j]
                    }
                    // console.log(detect);
                    if (detect===input) {
                        Count+=1;
                    }
                    detect='';  
                    }
        })
        
        //top - down
        const tTable = Array(this.N).fill(null).map(() => Array(this.M));
        for (let i = 0; i< table[0].length; i++) {
            for (let j = 0; j< table.length; j++) {
                tTable[i][j] = table2[j][i]
            }
        }
        tTable.forEach(value=>{
            for (let i = 0; i< value.length; i++) {
                for (let j = i; j< input.length+i; j++) {
                    detect+=value[j]
                }
                // console.log(detect);
                if (detect===input) {
                    Count+=1;
                }
                detect='';  
                }

                //bottom - up
                const rValue = value.reverse();
                for (let i = 0; i< rValue.length; i++) {
                    for (let j = i; j< input.length+i; j++) {
                        detect+=rValue[j]
                    }
                    // console.log(detect);
                    if (detect===input) {
                        Count+=1;
                    }
                    detect='';  
                    }
        })
        
        //diagonally
        var Ylength = table2.length;     //table 2 is normal table (not reversed)
        var Xlength = table2[0].length;
        var maxLength = Math.max(Xlength, Ylength);
        for (var k = 0; k <= 2 * (maxLength - 1); ++k) {
            const arr = [];
            for (var y = Ylength - 1; y >= 0; y--) {
                var x = k - y;
                arr.push(table2[y][x]);
            }
            const joined = arr.join('')
            if (joined.length>= input.length) {   
                // console.log(joined);
                for (let i = 0; i< arr.length; i++) {
                    for (let j = i; j< input.length+i; j++) {
                        detect+= joined[j];
                    }
                    if (detect===input) {
                        Count+=1;
                    }
                    detect='';
                }
            }
        }
        // console.log("");
        for (var k = 0; k <= 2 * (maxLength - 1); ++k) {
            const arr = [];
            for (var y = Ylength - 1; y >= 0; y--) {
                var x = k - y;
                arr.push(table2[y][x]);
            }
            const reversed = arr.reverse()
            const joined = reversed.join('')
            if (joined.length>= input.length) {   
                // console.log(joined);
                for (let i = 0; i< arr.length; i++) {
                    for (let j = i; j< input.length+i; j++) {
                        detect+= joined[j];
                    }
                    if (detect===input) {
                        Count+=1;
                    }
                    detect='';
                }
            }
        }

        for (var k = 0; k <= 2 * (maxLength - 1); ++k) {
            const arr = [];
            for (var y = Ylength - 1; y >= 0; y--) {
                var x = k - y;
                arr.push(table[y][x]);
            }
            const joined = arr.join('')
            if (joined.length>= input.length) {   
                // console.log(joined);
                for (let i = 0; i< arr.length; i++) {
                    for (let j = i; j< input.length+i; j++) {
                        detect+= joined[j];
                    }
                    if (detect===input) {
                        Count+=1;
                    }
                    detect='';
                }
            }
        }
        // console.log("");
        for (var k = 0; k <= 2 * (maxLength - 1); ++k) {
            const arr = [];
            for (var y = Ylength - 1; y >= 0; y--) {
                var x = k - y;
                arr.push(table[y][x]);
            }
            const reversed = arr.reverse()
            const joined = reversed.join('')
            if (joined.length>= input.length) {   
                // console.log(joined);
                for (let i = 0; i< arr.length; i++) {
                    for (let j = i; j< input.length+i; j++) {
                        detect+= joined[j];
                    }
                    if (detect===input) {
                        Count+=1;
                    }
                    detect='';
                }
            }
        }
        // console.log(Count);
        return Count;
    }
}

module.exports = Words;
readModuleFile('./inputin.in', function (err, int) {
    const data= int.split(/\r?\n/);
    const length = data[0];
    const input = Array(parseInt(length)).fill(null).map(() => Array(4));
    const words = Array(parseInt(length)).fill(null).map(() => Array(0));
    var count = 0;
    const arr = [];
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

        const Grid = new Words(input[i][0],input[i][1],input[i][2],input[i][3]);
        console.log("Case "+(i+1)+": "+Grid.SearchWord());
    }
    // const Grid = new Words(input[0][0],input[0][1],input[0][2],input[0][3]);
    // Grid.SearchWord()
});
