
// Sample Input - ["Masai", "School"]

// Sample Output - ["M", "S"]

let arr = ["Masai", "School"]
let out = [];
arr.forEach(function(ele,i,a){
  out.push(arr[i][0])
})
console.log(out)