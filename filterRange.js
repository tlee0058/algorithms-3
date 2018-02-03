/*
Array: Filter Range
Alan is good at breaking secret codes. One tool is to eliminate numbers he knows are outside a certain specific range. Given arr and values min and max, remove array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.*/

function filterRange(arr, min, max){
	var delNum = 0;
	for(var i = 0; i < arr.length; i++){
		if(arr[i]>min && arr[i]<max){
			for(var k = i+1; k<arr.length; k++){
				arr[k-1] = arr[k];
			}
			i--;
			delNum +=1;
		}
	}
	arr.length -= delNum;
	console.log(arr);
	console.log(delNum);
}


var myArray = [1,2,2,3,3,3,3,3,4,5,6];

filterRange(myArray, 2, 4);

