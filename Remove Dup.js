/*
Array: Remove Duplicates
Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.

Second: solve this without using any nested loops.*/

function removeDuplicates2(array) {
	var curr = 0;

	for(var i = 1; i < array.length; i++) {
		if(array[i] !== array[curr]) {
			array[curr + 1] = array[i];
			curr += 1;
		}
	}

	console.log(curr);
	var wanted = curr + 1;

	array.length -= (array.length - wanted);

	console.log(array);
}

removeDuplicates2([1,2,3,4,5,2,3,4]);