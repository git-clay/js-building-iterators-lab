// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Map

function myMap(arr, callback) {
			//input, function capitalize(v)
//  CODE INSIDE HERE   //
var out = [];
for (var i = 0; i < arr.length; i++) {
//	console.log(arr[i]);
	//out [i] = callback();
	out[i] =callback(arr[i],i,arr);
//	console.log(out);
	//callback(arr[i]);
}
return out;
}
/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/


//[input]>>>[output]




// export this function (you can ignore this for now)
module.exports = myMap;
