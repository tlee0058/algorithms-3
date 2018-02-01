/*
Web Fundamentals Online Algorithms Chapters 0-3 Chapter 3 - Arrays Insert At Ting Hello,  Ting L  
CHECKLIST
Mandatory
Array: Insert At
Given an array, index, and additional value, insert the value into the array at given index. Do this without using built-in array methods. You can think of PushFront(arr,val) as equivalent to InsertAt(arr,0,val).*/
function insertAt(array, index, value) {
	if(index > array.length || index < 0) {
		console.log("Did you mean to use an index value within range?");
		console.log("insertAtFAIL", array);
		return array;
	}

	for(var i = array.length; i > index; i--) {
		array[i] = array[i - 1];
	}

	array[index] = value;

	console.log("insertAt", array);
	return array;
}

insertAt([1,2,3,4,5], 2, 0);