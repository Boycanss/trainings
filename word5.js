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
        let detect = '';
        let found = 0;
        console.log(table);
        
        //left-right
        table.forEach(rows=>{
            for (let i = 0; i< rows.length; i++) {
                for (let j = i; j< input.length+i; j++) {
                    detect+=rows[j]
                }
                if (detect === input) {
                    found+=1;
                }
                detect='';
            }
        })
        
        //right-left
        table.forEach(rows=>{
            for (let i = rows.length-1; i>=0; i--) {
                for (let j = i; j> i-input.length; j--) {
                    detect+=rows[j]
                }
                if (detect === input) {
                    found+=1;
                }
                detect='';
            }
        })

        //transverse table >> each row becomes column
        const tTable = Array(this.N).fill(null).map(() => Array(this.M));
        for (let i = 0; i< table[0].length; i++) {
            for (let j = 0; j< table.length; j++) {
                tTable[i][j] = table[j][i]
            }
        }
        
        //top-down
        //top-down equals left-right in transversed table
        tTable.forEach(rows=>{
            for (let i = 0; i< rows.length; i++) {
                for (let j = i; j< input.length+i; j++) {
                    detect+=rows[j]
                }
                if (detect === input) {
                    found+=1;
                }
                detect='';
            }
        })

        //down-top
        //down-top equals right-left in transversed table
        tTable.forEach(rows=>{
            for (let i = rows.length-1; i>=0; i--) {
                for (let j = i; j> i-input.length; j--) {
                    detect+=rows[j]
                }
                if (detect === input) {
                    found+=1;
                }
                detect='';
            }
        })

        //diagonally
        var 

    }
}

const Grid = new Words(5,5,["gogog","ooooo","godog","ooooo","gogog"], "dog");
// const Grid = new Words(3,4,["catt","aata","tatc"],"cat");
// const Grid = new Words(2,8,["bananana","kalibrrr"],"nana");
// Grid.MakeGrid();
Grid.SearchWord();


// module.exports = Words;
// readModuleFile('./inputin.in', function (err, int) {
//     const data= int.split(/\r?\n/);
//     const length = data[0];
//     const input = Array(parseInt(length)).fill(null).map(() => Array(4));
//     const words = Array(parseInt(length)).fill(null).map(() => Array(0));
//     var count = 0;
//     const arr = [];
//     for (let i = 0; i< length; i++) {
//         const M = parseInt(data[count+1]);
//         const N = parseInt(data[count+2]);
//         input[i][0] = parseInt(M);
//         input[i][1] = parseInt(N);        
//         let j = count+3;
//         do {
//             words[i].push(data[j]);
//             j++;
//         } while (j< parseInt(M)+count+3);
//         // console.log(words[i]);
//         input[i][2] = words[i];
//         const W = data[parseInt(M)+3+count];
//         input[i][3] = W;
//         count += (parseInt(M)+3);

//         const Grid = new Words(input[i][0],input[i][1],input[i][2],input[i][3]);
//         console.log("Case "+(i+1)+": "+Grid.SearchWord());
//     }
//     // const Grid = new Words(input[0][0],input[0][1],input[0][2],input[0][3]);
//     // Grid.SearchWord()
// });
