function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
    
    return Math.floor(marks.reduce((acc,ind)=>acc+ind,0)/marks.length)
  }