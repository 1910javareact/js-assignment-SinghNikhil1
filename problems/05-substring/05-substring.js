/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
    let newStr = ''
    if(isNaN(startIndex)||isNaN(endIndex)){
        throw "This is incorrect you have to put a number";
    }else{
        for(let i = startIndex; i<endIndex; i++){
            newStr=newStr + someStr[i]
        }
    }
    return newStr

}
console.log(substring('Hello',0,3));
