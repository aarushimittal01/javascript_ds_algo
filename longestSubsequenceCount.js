function mergeArray(left, right) {
	let arr = []
  
  while(left.length && right.length) {
  	if(left[0] < right[0]) arr.push(left.sift())
    else arr.push(right.shift())
  }
  
  return [...arr, ...left, ...right]
}

function mergeSort(arr) {
	let half = arr.length / 2
	
  let left = arr.splice(0,half)
  let right = arr.splice(half+1)
  
  return mergeArray(mergeSort(left),mergeSort(right))
}


function longestSubsequentCount(input) {
	let sortedArray = mergeSort(input)
  
  let max = 0;
  let current = 0
  for(let i = 0; i < sortedArray.length; i++) {
  	if(sortedArray[i+1] - sortedArray[i] === 1 ) {
    	current++;
      if (current > max) max = current;
    } else current == 0;
  }
  return max;
}

console.log(longestSubsequentCount([12,1,4,13,6,3,14,5,11,2]))
