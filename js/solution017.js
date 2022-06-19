function printerError(s) {
    // your code
  
//   if letter not includes array
// s.length-answer/s.length as a literal
let a= "abcdefghijklm".split("")
let b=s.split("")
let c=[]
for(i=0;i<b.length;i++){
if(a.includes(b[i])==false){
  c.push(b[i])
}
  }return (`${c.length}/${s.length}`)}