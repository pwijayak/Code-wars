function chromosomeCheck(sperm) {
  if(sperm.split("").includes("Y")){
    return 'Congratulations! You\'re going to have a son.'
  }else{
    return 'Congratulations! You\'re going to have a daughter.'
  }
}
