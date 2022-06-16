function solution(number){
    let result =[]
    for (let i=1; i<number; i++){
      result.push(i)}
    
   return(result.filter((x)=>x%3==0||x%5==0).reduce((acc,ind)=>acc+ind,0))
  }