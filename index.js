const fs=require('fs')
const file1=fs.readFileSync('a.txt','utf-8',(err,data)=>{
  console.log(data)
})
console.log(file1)
const file2=fs.readFileSync('b.txt','utf-8',(err,data)=>{
  console.log(data)
})
console.log(file2)
