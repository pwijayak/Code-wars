function high(s){
  let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
  console.log(as)
  console.log(s.split(' ')[as.indexOf(Math.max(...as))]);
console.log(Math.max(...as))
}

high('man i need a taxi up to ubud')
