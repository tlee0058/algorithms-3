/*
Array: Swap Pairs
Swap positions of successive pairs of values of given array. If the length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.*/

function swapPairs(array) {
	var length = array.length % 2 === 0 ? array.length : array.length - 1;

	// var length = array.length;
	// if(array.length % 2 === 1) {
	// 	length = array.length - 1;
	// }

	for(var i = 0; i < length; i += 2) {
		// if(array[i + 1] === undefined) {
		// 	console.log(array);
		// 	return array;
		// }
		var temp = array[i];
		array[i] = array[i + 1];
		array[i + 1] = temp;
	}

	console.log(array);
	return array;
}

swapPairs([1,2,3,4]);
swapPairs([1,2,3]);