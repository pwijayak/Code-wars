var number=function(array){
    //your awesome code here
    if (array.length==0){
      return []}
    else{
    
      return array.map((x,i)=>`${i+1}: ${x}`)}}