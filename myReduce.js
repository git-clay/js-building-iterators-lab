// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback, initialValue) {
//console.log("myReduce");
//  CODE INSIDE HERE   //
var out;
var prev;

if(initialValue!==undefined && arr.length===0){		//catches an empty array and returns initialValue (only if there is one)
	return initialValue;
}
else if(initialValue!==undefined){			//if there is an initialValue start the count at [0]
	start = 0;
	prev= initialValue;
}
else{										//start at [1] with the 'previous' value at [0]
	start = 1;
	prev = arr[0];
}


for (var i = start; i < arr.length; i++) {		//main loop where the magic happens
	curr = arr[i];
	out=callback(prev,curr,i,arr);
	prev=out;
//console.log(prev);
//console.log(curr);
//console.log(initialValue);
//console.log(out);
	}
return out;
}
/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;
