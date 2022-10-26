function solution(digits){


  let a=[];
  for(i=0;i<digits.length-4;i++){
    a.push(Number((`${digits[i]}${digits[i+1]}${digits[i+2]}${digits[i+3]}${digits[i+4]}`)))
  }
return a.sort((a,b)=>a-b).pop()
  
}
