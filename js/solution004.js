function findShort(s){
 
    // split into array
    // foreach length
    // Math.min of the array
     
    let a= s.split(" ")
    let b= a.map((x)=>x.length)
    let c= b.sort((a,b)=>b-a)
    return c.pop()
    }