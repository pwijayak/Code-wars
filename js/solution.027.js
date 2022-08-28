function likes(names) {
  // TODO
//   if statements based on length?
//   if 0 return no one like this
//   if 1 return names[0]likes this
// if 2 return names[0] and names[1] like this
//   if length 3 return names[0] and names[1] and 1 other
//   if length> 3 return names[0] and names[1] and names.length-2 likes this


if (names.length==0){
  return 'no one likes this'}
else if (names.length==1){
  return `${names[0]} likes this`}
else if (names.length==2){
  return `${names[0]} and ${names[1]} like this`}
else if (names.length==3){
  return `${names[0]}, ${names[1]} and ${names[2]} like this`}
else if (names.length>3){
  return `${names[0]}, ${names[1]} and ${names.length-2} others like this`}
  
}
