function sumStr(a,b) {
  
  if (a===""&&b===""){
    return `0`
  }
 else if (a==="" ){
   return `${parseInt(b)}`
 } else if (b===""){
   return `${parseInt(a)}`
   
 }
 
  
  
 else{
  return `${parseInt(a)+parseInt(b)}`}
}
