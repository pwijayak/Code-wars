function pattern(n){
  // Happy Coding ^_;
  let x=[]
  if (n<1){
    return ""
  }else{
 for(i=1;i<=n;i++){
  x.push(String(i).repeat(i))};
 
return x.join("\n")}
}
