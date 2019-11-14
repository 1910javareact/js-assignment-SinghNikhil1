/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
 let string = someStr
 let reverseStr = ""
 for(let i = 0; i < string.length; i++){
   reverseStr = reverseStr + ${string[string.length-i-1]}
 }
  return reverseStr
  
}
console.log(reverseStr("String Reverse"));
