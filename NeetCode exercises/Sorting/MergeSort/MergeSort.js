
let unsortedList = [1, 4, 34, 2, 20, 0];


function merge(array, start, mid, end) {

    const leftArrLength = mid - start + 1;
    const rightArrLength = end - mid;

    const leftArr = new Array(leftArrLength);
    const rightArr = new Array(rightArrLength);

    for (let i = 0; i < leftArrLength; i++) {
        leftArr[i] = array[start + i];
    }
    
    for (let j = 0; j < rightArrLength; j++) {
        rightArr[j] = array[mid + 1 + j];
    }

    let left = 0;
    let right = 0;
    let arrayIndex = start;

    while(left < leftArrLength && right < rightArrLength){
        if(leftArr[left] <= rightArr[right]) {
            array[arrayIndex] = leftArr[left];
            left++;
        } else {
            array[arrayIndex] = rightArr[right];
            right++;
        }
        arrayIndex++;
    }

    while (left < leftArrLength) {
        array[arrayIndex] = leftArr[left];
        left++;
        arrayIndex++;
    }
    while (right < rightArrLength) {
        array[arrayIndex] = rightArr[right];
        right++;
        arrayIndex++;
    }


}

function mergeSort(array, start, end) {
    if(start < end){
        const mid = Math.floor((start + end) / 2);
        mergeSort(array, start, mid);
        mergeSort(array, mid + 1, end);
    
        merge(array, start, mid, end);
    } 

    return array;
}

console.log(mergeSort(unsortedList, 0, unsortedList.length - 1));