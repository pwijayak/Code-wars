function getSum( a,b )
{
   //Good luck!
  
//   for loop
//   from a + 1 to the end

let answer=[]
for(let i=a; i<=b; i++){
  answer.push(i)
  
} console.log(answer)
console.log(answer.reduce((acc,ind)=>acc+ind,0)) 
}

getSum(1,5)