function moveZeros(arr) {
  let zeroes=arr.filter((x)=>x===0)
  console.log(zeroes)
  let regular= arr.filter((x)=>x!==0)
  for (i=0;i<zeroes.length;i++){
    regular.push(zeroes[i])
  }
  return regular
}
