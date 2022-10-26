function incrementer(nums) { 
  // code goes here
  if (nums===[]){
    return nums
  }else{
return nums.map((x,i)=>x+i+1<10?x+i+1:Number(String(x+i+1).split("")[1]))
    
        
      }
    }
