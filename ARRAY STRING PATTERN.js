
// Sample Input - ["assignment", "problem", "media", "upload"]

// Sample Output - ["assignment", "media"]

let arr = ["assignment", "problem", "media", "upload"];

let out = []
 arr.forEach(function(ele,i,a){
   if(ele[0]=="a" || ele[ele.length-1]=="a"){
     out.push(ele)
   }
 })
console.log(out)