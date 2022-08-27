function points(games){
 let result=[]
 
  for(i=0;i<games.length;i++){
  
  if(games[i][0]>games[i][2]){
   result.push(3)
  }
  else if(games[i][0]<games[i][2]){
    result.push(0)
  }
  else{
     result.push(1)
  }}
return(result.reduce((acc,ind)=>acc+ind,0))}
