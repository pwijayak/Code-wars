function getSum( a,b )
{
   //Good luck!
  
//   for loop
//   from a + 1 to the end
  
if (a<b){
let answer=[]
for(let i=a; i<=b; i++){
  answer.push(i)
  
}
return answer.reduce((acc,ind)=>acc+ind,0)
}

else if (b<a){
  let answer=[]
for(let i=b; i<=a; i++){
  answer.push(i)
  
}
return answer.reduce((acc,ind)=>acc+ind,0)
}

else if (a==b){
  return a
}}