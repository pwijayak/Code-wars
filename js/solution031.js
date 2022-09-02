function calculateYears(principal, interest, tax, desired) {
    // your code
//   P=p+P*I-T((P*I))
//   P=P+(1-T(P*I))
  if (principal==desired){
    return 0
  } else {
  for(i=0;principal<=desired;i++){
    principal= principal+(1-tax)*(principal*interest)
    
  }return i
}}
