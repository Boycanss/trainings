class Words{
    constructor(T, M, N, Word, key){
        this.T= T;
        this.N= N;
        this.M= M;
        this.Word = Word;
        this.key = key;
    }

    Case(){
        for (let i = 1; i< this.T; i++) {
            
        }
    }

    MakeGrid(){
        const arrWord = [];
        const arr = Array(this.M).fill(null).map(() => Array(this.N));
        for (let i = 0; i< this.Word.length; i++) {         
            for (let j = 0; j< this.N; j++) {
                arr[i][j] = this.Word[i][j]
            }
        }
        return arr;
    }

    SearchWord(){
        const input = this.key;
        const table = this.MakeGrid();
        const table2 = this.MakeGrid();
        let detect = '';
        let Count = 0;
        console.log(table);

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
                console.log(joined);
                const arrRev = arr.reverse();
                for (let i = 0; i< arr.length; i++) {
                    for (let j = i; j< input.length+i; j++) {
                        detect+= joined[j];
                    }
                    if (detect===input) {
                        Count+=1;
                    }
                    detect='';
                    console.log(arrRev);
                    for (let j = i; j< input.length+i; j++) {
                        detect+= arrRev[j];
                    }
                    
                    if (detect===input) {
                        Count+=1;
                    }
                    detect='';
                }
            }
        }

        //using reversed table
        console.log("table");
        console.log(table);
        console.log("table2");
        console.log(table2);
        for (var k = 0; k <= 2 * (maxLength - 1); ++k) { //reversed table.length = normal table.length
            const arr = [];
            for (var y = Ylength - 1; y >= 0; y--) {
                var x = k - y;
                if (table[y][x] !== undefined) {
                    arr.push(table[y][x]);
                }
                
            }
            if (arr.length>= input.length) {
                const arrRev = arr.reverse();
                for (let i = 0; i< arr.length; i++) {
                    for (let j = i; j< input.length+i; j++) {
                        detect+= arr[j];
                    }
                    if (detect===input) {
                        
                        Count+=1;
                    }
                    detect='';
                    for (let j = i; j< input.length+i; j++) {
                        detect+= arrRev[j];
                    }
                    if (detect===input) {
                        Count+=1;
                    }
                    detect='';
                }
            }
        }
        
        console.log(Count);
    }
}


// const Grid = new Words(1,5,5,["gogog","ooooo","godog","ooooo","gogog"], "dog");
const Grid = new Words(1,3,4,["catt","aata","tatc"],"cat");
// const Grid = new Words(1,2,8,["bananana","kalibrrr"],"nana");
// Grid.MakeGrid();
Grid.SearchWord();