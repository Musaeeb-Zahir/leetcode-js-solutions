// let a="1.212.2"
// // let arr=a.split("");
// // console.log(arr);
// // for(let i=0;i<a.length-1;i++){
// //    if(arr[i]=="."){

// //    }
// // }
//  const regex = /[\.]/g;
//  console.log(a.replace(regex,"[.]"));
let accounts = [
  [1, 5],
  [7, 3],
  [3, 5],
];
var arr = [];
var sum = 0;
for (let i = 0; i < accounts.length; i++) {
  for (let j = 0; j < accounts[i].length; j++) {
    console.log(accounts[i][j]);
    sum += accounts[i][j];
  }
  arr[i] = sum;
  sum=0;
}


console.log(arr);
