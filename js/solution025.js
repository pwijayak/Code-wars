function removeSmallest(numbers) {
  let a=numbers.filter((x)=>x!=Math.min(...numbers))
  if (a.length==numbers.length-1){
    return a}
  else{
    let b=numbers.sort((x,y)=>y-x)
    b.pop()
    return b
  }
;
