function factorial(n)
{
  if (n<0 ||n>12){ 
    return new RangeError()
                }
  else if (n==0){
    return 1
  }
  else{
    let result=1
//     backwards factorial
  for (i=n;i>=1;i--){
    result=result*i
    
  }return result

  
}}
