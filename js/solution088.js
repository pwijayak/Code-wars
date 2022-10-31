function getSumOfDigits(integer) {
 return String(integer).split("").map((x)=>parseInt(x)).reduce((acc,ind)=>acc+ind,0)
  }
