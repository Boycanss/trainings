class Words{
    constructor(T, M, N, Word){
        this.T= T;
        this.N= N;
        this.M= M;
        this.Word = Word;
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
        const input = "CAT";
        const table = this.MakeGrid()
        let detect = '';
        let Count = 0;

        //Vertical Search
        // up > down
        console.log("up > down");
        const tTable = Array(this.N).fill(null).map(() => Array(this.M));
        for (let i = 0; i< table[0].length; i++) {
            for (let j = 0; j< table.length; j++) {
                tTable[i][j] = table[j][i]
            }
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
             });
        }
        // console.log(tTable);
        // console.log(table);
        console.log("-----------");

        // down > up
        console.log("down > up");
        const trTable = tTable.reverse();
        console.log(trTable);
        for (let i =0; i<table[0].length; i++) {
            for (let j = table.length-1; j>=0; j--) {
                // console.log(table[j][i]);
                detect+=table[j][i]
            }
            console.log(detect);
            if (detect===input) {
                Count+=1;
            }
            detect='';
        }
        console.log("------------");

        // // // right diagonal
        var Ylength = table.length;
        var Xlength = table[0].length;
        var maxLength = Math.max(Xlength, Ylength);
        var temp;
        for (var k = 0; k <= 2 * (maxLength - 1); ++k) {
            temp = [];
            for (var y = Ylength - 1; y >= 0; y--) {
                var x = k - y;
                // console.log(table[y][x]);
            }
            // console.log("====");
        }

        // //Horizontal Search
        // // left > right
        // console.log("left > right");
        // table.forEach(value=>{
        //     for (let i = 0; i< value.length; i++) {
        //         for (let j = i; j< input.length+i; j++) {
        //             detect+=value[j]
        //         }
        //         console.log(detect);
        //         if (detect===input) {
        //             Count+=1;
        //         }
        //         detect='';  
        //         }
        // })
        // console.log("-----------");
        // console.log("right > left");

        //right > left
        table.forEach(value=>{
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
    }


}


const Grid = new Words(1,3,4,["CATT", "AATA","TATC"]);
// Grid.MakeGrid();
Grid.SearchWord()