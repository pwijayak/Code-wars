var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  
  

let b=[]
  if(Array.isArray(iterable)==false){
    let a=iterable.split("")
  for (i=0;i<a.length;i++){
    if(a[i+1]!==a[i]){
     b.push(a[i])
    }else {
      b.push('')
    }
  }
 return b.filter((x)=>x!=='')}
  
else{
for (i=0;i<iterable.length;i++){
    if(iterable[i+1]!==iterable[i]){
     b.push(iterable[i])
    }else {
      b.push('')
    }
  }
 return b.filter((x)=>x!=='')
  }
  
}
    
uniqueInOrder([1,2,3,4,4,4,5])

    
