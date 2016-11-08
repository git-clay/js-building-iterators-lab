// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback, initialValue) {
//console.log("myReduce");
//  CODE INSIDE HERE   //
var out;
var prev;
if(initialValue>=0 && arr.length===0){
	return initialValue;
}
else if(initialValue>=0){
start = 0;
prev= initialValue;
}

else{
	start = 1;
	prev = arr[i-1];
}


for (var i = start; i < arr.length; i++) {
	curr = arr[i];
	out=callback(prev,curr,i,arr);
	}
return out;


}
/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;
