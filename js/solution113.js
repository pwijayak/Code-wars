function adjacentElementsProduct(array) {
  // max product
  let arrayA=[]
  for(i=0;i<array.length-1;i++){
    arrayA.push(array[i]*array[i+1])
  } return Math.max(...arrayA)
}
