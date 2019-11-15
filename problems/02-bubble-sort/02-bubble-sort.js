/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
    let newNumArray =[...numArray]
      //iterate through array
    for(let i =0; i<newNumArray.length; i++){

        
        for(let j =0;j<newNumArray.length;j++){
//if left side is bigger switch it
if(newNumArray[j] > newNumArray[j+1])
          //swapping
          let temp = newNumArray[j]
          newNumArray[j]=newNumArray[j+1]
          newNumArray[j+1]=temp

        }
    }
}
return newNumArray
