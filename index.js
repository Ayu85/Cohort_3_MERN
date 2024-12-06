const fs=require('fs')
const file=fs.readFileSync('a.txt','utf-8',(err,data)=>{
  console.log(data)
})
console.log(file)