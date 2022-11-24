function largestPairSum (numbers) {
  //TODO: Write your Code here\
  
  let a= numbers.sort((a,b)=>a-b)
  let b= a[numbers.length-1]
  let c= a[numbers.length-2]
  
  return b+c
}
