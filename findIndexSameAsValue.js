//find index that has same value as index

function checkValue(input, lo, hi) {
    if (lo != hi && lo >= 0 && hi >= 0) {
        let mid = (lo + hi) / 2;
        if(input[mid] == mid) return mid
        else if(input[mid] < mid) checkValue(input, mid, hi)
        else checkValue(input, lo, mid)
    } else return -1
}

function getIndexValue(input) {
    //let result = checkValue(input, 0, input.length - 1)

    let result = -1 
    for(let i = 0; i <= input.length; i++) {
        if(input[i] == i) {
            result = i;
            break;
        }
    }

    console.log(result);

}

console.log(getIndexValue([-10, 1, 1, 3, 8]))
