function correct(string)
{
  let a=string.split("").map((x)=>x=='0'?'O':`${x}`).join("")
    let b=a.split("").map((x)=>x=='1'?'I':`${x}`).join("")
    let c=b.split("").map((x)=>x=='5'?'S':`${x}`).join('')

  return c
}
