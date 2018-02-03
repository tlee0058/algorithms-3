/*
Array: Concat
Replicate JavaScript’s concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array’s elements, followed by the second array’s elements. Do not alter the original arrays.

Example: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].*/

function concatArr(arr1, arr2){
    var newarr=[];
    for(var i = 0; i < arr1.length; i++){
        newarr.push(arr1[i]);
    }
    for(var i = 0; i <arr2.length; i++){
        newarr.push(arr2[i]);
    }
    console.log(newarr);
}

concatArr(['a', 'b'], [1,2]);

