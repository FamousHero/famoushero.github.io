/**Merge Sort Alg
 * Time Complexity O(nlogn)
 * Space Complexity O(n/2): Since we only need to make a copy of half the array
 * and the copy is deleted at the end of each merge, the max space needed is n/2
 */


/**
 * 
 * @param {Array} arr 
 * @param {Number} start The starting index of the array
 * @param {Number} end The final index of the array
 * @returns 
 */
function mergeSort(arr, start, end){
    if(start >= end){
        return;
    }
    let mid = Math.floor(start + (end-start)/2); //avoids overflow vs (start+end)/2
    mergeSort(arr, start, mid);
    mergeSort(arr, mid+1, end);
    merge(arr, start, mid, end);
    
}
/**
 * Since we are using indexes, DO NOT PASS Array.length
 * @param {Array} arr 
 * @param {Number} left The leftmost index of the array to start the merge from
 * @param {Number} mid 
 * @param {Number} right The rightmost index of the array to end the merge from 
 */
function merge(arr, left, mid, right){
    let temp = left;
    let leftCopy = [];
    let leftIndex = 0;
    while(temp <= mid){
        leftCopy.push(arr[temp++]);
    }
    temp;
    while(leftIndex < leftCopy.length && temp <= right){
        leftCopy[leftIndex] <= arr[temp]? arr[left] = leftCopy[leftIndex++]: arr[left] = arr[temp++];
        ++left; 
    }
    while(leftIndex < leftCopy.length){
        arr[left++] = leftCopy[leftIndex++];
    }
    //right is already sorted
}

export{mergeSort};