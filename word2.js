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
        // console.info(arr);
        return arr;
    }

    SearchWord(){
        const input = this.key;
        const table = this.MakeGrid();
        const table2 = this.MakeGrid();
        let detect = '';
        let Count = 0;
        console.log(table);

        console.log("top > down");
        const tTable = Array(this.N).fill(null).map(() => Array(this.M));
        for (let i = 0; i< table[0].length; i++) {
            for (let j = 0; j< table.length; j++) {
                tTable[i][j] = table[j][i]
            }
        }
        // console.log("tTable");
        // console.log(tTable);
        // console.log("");
        tTable.forEach(value=>{
            for (let i = 0; i< value.length; i++) {
                for (let j = i; j< input.length+i; j++) {
                    detect+=value[j]
                }
                console.log(detect);
                if (detect===input) {
                    Count+=1;
                }
                detect='';  
                }
        })
        console.log(Count);
        console.log("");

        console.log("left > right");
        // console.log(table);
        table.forEach(value=>{
            for (let i = 0; i< value.length; i++) {
                for (let j = i; j< input.length+i; j++) {
                    detect+=value[j]
                }
                console.log(detect);
                if (detect===input) {
                    Count+=1;
                }
                detect='';  
                }
        })
        console.log(Count);
        console.log("");

        // Diagonally l>r
        console.log("diagonally");
        var Ylength = table.length;
        var Xlength = table[0].length;
        var maxLength = Math.max(Xlength, Ylength);
        for (var k = 0; k <= 2 * (maxLength - 1); ++k) {
            for (var y = Ylength - 1; y >= 0; y--) {
                var x = k - y;
                detect +=table[y][x];
            }
            console.log(detect);
            if (detect===input) {
                Count+=1;
            }
            detect='';
        }
        console.log(Count);
        console.log("");

        console.log("right > left");
        //right > left
        table2.forEach(value=>{
           const rTable =value.reverse();
           for (let i = 0; i< value.length; i++) {
            for (let j = i; j< input.length+i; j++) {
                detect+=rTable[j]
            }
            console.log(detect);
            if (detect===input) {
                Count+=1;
            }
            detect='';  
            }
        });
        console.log(Count);
        console.log("");


        // Diagonally r>l
        console.log("diagonally r>l");
        // console.log("table2");
        // console.log(table2);
        var Ylength = table2.length;
        var Xlength = table2[0].length;
        var maxLength = Math.max(Xlength, Ylength);
        for (var k = 0; k <= 2 * (maxLength - 1); ++k) {
            const reverse =[];
            for (var y = Ylength - 1; y >= 0; y--) {
                var x = k - y;
                reverse.push(table2[y][x]);
            }
            detect = reverse.reverse().join('');
            console.log(detect);
            if (detect===input) {
                Count+=1;
            }
            detect='';
        }
        console.log(Count);
        console.log("");

        //bottom > up
        console.log("BAWAH > ATAS");
        const dTable = tTable.reverse()
        // console.log(dTable);
        dTable.forEach(value=>{
            for (let i = 0; i< value.length; i++) {
                for (let j = i; j< input.length+i; j++) {
                    detect+=value[j]
                }
                console.log(detect);
                if (detect===input) {
                    Count+=1;
                }
                detect='';  
                }
        })
        console.log(Count);
        return Count;
    }


}


const Grid = new Words(1,5,5,["gogog","ooooo","godog","ooooo","gogog"], "dog");
// const Grid = new Words(1,3,4,["catt","aata","tatc"],"cat");
// const Grid = new Words(1,2,8,["bananana","kalibrrr"],"nana");
// Grid.MakeGrid();
Grid.SearchWord()