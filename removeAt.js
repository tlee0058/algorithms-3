/*
Array: Remove At
Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except for the pop(). Think of PopFront(arr) as equivalent to RemoveAt(arr,0).(/
*/

function removeAt(array, index) {
	if(index > array.length - 1 || index < 0) {
		console.log("please choose an index within range");
		return;
	}

	var value = array[index];

	for(var i = index; i < array.length - 1; i++) {
		array[i] = array[i + 1];
	}

	array.length -= 1;

	console.log("removeAt", array, "removeAt - value: ", value);
	return value;
}

removeAt(myArr, 2);