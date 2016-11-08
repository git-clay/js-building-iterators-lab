// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback) {
//console.log("myReduce");
//  CODE INSIDE HERE   //
var out;

for (var i = 1; i < arr.length; i++) {
	var prev=arr[i-1];
	var curr=arr[i];
	out =callback(prev,curr,i,arr);
	console.log("previous"+prev);
	console.log("current"+curr);
	console.log("i"+i);
	console.log("arr"+arr);
//	console.log(x);
	//console.log(y);

}
return out;
}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;
