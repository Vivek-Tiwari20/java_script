
// Sample Input - ["assignment", "problem", "media", "upload"]

// Sample Output - ["assignment", "media"]

let arr = ["assignment", "problem", "media", "upload"];

const out = arr.filter(function(ele,i,a){
  return ele[0]=="a" || ele[ele.length-1]=="a"
})
console.log(out)