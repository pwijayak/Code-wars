function sumTwoSmallestNumbers(numbers) {  
    let x= numbers.sort((a,b)=>(a-b))
    return x[0]+x[1]
  }