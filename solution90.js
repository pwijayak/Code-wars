function strCount(str, letter){  
  //code here
  
  
  let a=str.split("")
  let count=0
  for (i=0;i<a.length;i++){
    if(a[i]==letter){
      count=count+1
    }
  }return count
}
