/*
Array: Second-to-Last
Return the second-to-last element of an array. Given [42,true,4,"Liam",7], return "Liam". If the array is too short, return null.*/

function secondLast(arr){
    var val = arr[arr.length-2];
    console.log(val);
    return (val);
}
secondLast([1,2,3,4,4,5,6]);