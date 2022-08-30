// return masked string
function maskify(cc){
// leave untouched length -4 length-3, length-2, length-1,
//   get total like
//   #.repeat()
  if(cc.length<=4){
    return cc }
  else{
    return'#'.repeat(cc.length-4)+cc.charAt(cc.length-4)+cc.charAt(cc.length-3)+cc.charAt(cc.length-2)+cc.charAt(cc.length-1)
}}
