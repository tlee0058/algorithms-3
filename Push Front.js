/*
Array: Push Front
Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.*/

function pushFront(arr, val){
    arr.unshift(val);
    console.log (arr);
}

pushFront([1,2,3,4,5], 0);