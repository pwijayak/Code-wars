function longestConsec(strarr, k) {
console.log(strarr.map((x,i)=>(strarr.slice(i,i+k).join(""))).reduce((a,b)=>a.length>b.length?a:b))
  }  
    // your code


longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)
