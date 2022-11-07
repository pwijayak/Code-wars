function removeDuplicateWords (s) {
  // your perfect code...
  
  return Array.from(new Set(s.split(" "))).join(" ")

}
