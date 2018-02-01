/*
Array: Push Front
Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.*/

function pushFront(arr,val){
    for(var i = arr.length-1; i >=0; i--){
        arr[i+1] = arr[i]
    }
arr[0] = val;
console.log(arr);
}
pushFront([1,2,3,4,5], 0);
