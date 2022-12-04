function lastSurvivor(letters, coords) {
  let x=letters.split("")
for(i=0;i<coords.length;i++){
  x.splice(coords[i],1)
}return x[0]
}
