Array.prototype.remove_ = function(integer_list, values_list){
 
 

  // return a not filter?
let result=[]
  for (i=0;i<integer_list.length;i++){
    if ((values_list.includes(integer_list[i]))==false){
    result.push(integer_list[i])
    }
  }return(result)
}
