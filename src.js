'use strct';

let str = 'hogehoge';
let msg = '初めてのじゃばすくりぷと,${hoge}';
//console.log(msg);

let data = ['hoge', 'piyo', 'fufa'];
data.forEach(element => {
    //console.log(element);
});

for(var index = 0; index < data.length; index++){
    //console.log(data[index]);
}

let obj = {x:1, y:2, z:3};
// console.log(obj.x);
// console.log(obj.hoge);

// 分割代入
let arrHoge = [1 ,2, 3, 4, 5];
let [xa, xb, xc, xd, xe] = arrHoge;
// console.log(xa);
// console.log(xb);

//　比較演算子
console.log(1 == '1'); // true;
console.log(1 === '1'); // false;

// 論理演算
// 以下はfalseになる
// 　　null , undefined
//     0 , ""


// delete 演算子
let hoge = [1, 2, 3, 4];
console.log(delete hoge[0]);
console.log(hoge);

// switch
// let rank = ['A', 'B', 'C'];
// let rankV = 'hoge';
// switch(rankV){
//     case 'A':
//         console.log(rank[0]);
//         break;
//     case 'B':
//         console.log('B');
//         break;
//     case 'C':
//         console.log('C');
//         break;
//     default :
//         console.error;
// }


// for of →　列挙可能なオブジェクトで使用可能
var arr = ['apple', 'banana', 'p'];
for(var ele of arr){
    console.log(ele);
}

var ret = arr.map(ele => ele + 'hoge');
console.log(ret);

//　ラベル構文
kuku:
for(var index = 1; index < 10 ; index++){
    for(var j = 1; j < 10 ;j++){
        document.write(index * j + '&nbsp');
        if(index * j > 20) {break kuku;}
    }
    document.write('<br />');
}


var num = 30;
console.log(typeof(num));
console.log(Math.abs(-1 * num));

//  symbol 型


let m = new Map();
m.set('1', "piyopiyo");
console.log(m.get(1));
console.log(m.get('1'));
