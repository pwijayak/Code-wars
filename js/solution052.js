function findDifference(a, b) {
  //loading...
  return Math.abs((a.reduce((acc,ind)=>acc*ind,1))-(b.reduce((acc,ind)=>acc*ind,1)))
}
