function createPhoneNumber(numbers){

  let format="(xxx) xxx-xxxx"
  
  for(i=0;i<numbers.length;i++){
     format= format.replace('x',numbers[i])
  }return format
  }
