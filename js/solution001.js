// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. 
// Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x){
    let a= x.split("")
    let b= a.map((x)=>parseInt(x))
    let c=b.map((x)=>x<5?0:1)
    let d= c.join("")
    return d


}
fakeBin('45385593107843568')

