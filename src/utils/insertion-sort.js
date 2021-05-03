

/**
 * 2. Algorithme Implement Insertion Sort
 * This method works by building up a sorted array at the beginning of the list
 *  It begins the sorted array with the first element.
 * Then it inspects the next element and swaps it backwards into the sorted array until it is in sorted position. 
 *  It continues iterating through the list and swapping new items backwards into the sorted portion until it reaches the end. 

 global array = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];

 explanaiton : [1]
 first we compare [1] with 4 and then we build new array  [1, 4] and 4 with 2  then  [1, 2, 4] and so one
 */

 function insertionSort(array) {
    const arr = array.slice()

    for(let i = 1 ; i < arr.length ; i++) {

        for(let j = i ;  j > 0 ; j--){

            if(arr[j] < arr[j -1] ) {
                // const temp = arr[j];
                // arr[j] = arr[j-1]
                // arr[j-1] = temp;
                [arr[j], arr[j-1]]= [arr[j-1], arr[j]];

            } else {
                break;
            }
        }

    }

    return arr;

}

export default insertionSort;
