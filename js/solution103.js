function howMuchILoveYou(nbPetals) {
    // your code
  
    let a= ['none','I love you', "a little",
"a lot",
"passionately",
"madly",
"not at all"]
if (nbPetals<=6){
  return a[nbPetals]
}else{
  let x= nbPetals-6
  while(x>6){
    x= x-6
  }return a[x]}
