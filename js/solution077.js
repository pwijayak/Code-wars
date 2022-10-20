
function capitalize(s){
  ;

  let a= s.split("")
  let b=a.map((x,i)=>i%2==0?x.toUpperCase():x).join("")
  let c=a.map((x,i)=>i%2!=0?x.toUpperCase():x).join("")

  return [b,c]
};

