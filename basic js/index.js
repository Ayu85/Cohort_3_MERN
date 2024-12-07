// const fs=require('fs')
// const file1=fs.readFileSync('a.txt','utf-8',(err,data)=>{
//   // console.log(data)
// })
// console.log(file1)
// const file2=fs.readFileSync('b.txt','utf-8',(err,data)=>{
//   // console.log(data)
// })
// console.log(file2)
// const fs = require("fs");

// fs.readFile("a.txt", "utf-8", function (err, contents) {
//   console.log(contents);
// });

// fs.readFile("b.txt", "utf-8", function (err, contents) {
//   console.log(contents);
// });

// fs.readFile("a.txt", "utf-8", function (err, contents) {
//   console.log(contents);
// });
function run() {
  console.log("I will run after 1s");
}

setTimeout(run, 1000);
console.log("I will run immedietely");