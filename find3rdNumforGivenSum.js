//given a list of numbers and a sum, find a 3rd number
//[12, 3, 1, 2, -6, 5, -8, 6], 0, 


function findTriplets(input, sum) {
    
    for(let i = 0; i < input.length; i++) {
        
        let hash = new Set()
        let total = sum - input[i]
        
        for(let j = i + 1; j < input.length; j++) {
            if (hash.has(total - input[j])) {
               return [input[i], input[j], total - input[j]];
            }

            hash.add(input[j])
        }
    }
    return []
}

console.log(findTriplets([12, 3, 1, 2, -6, 5, -8, 6], 0))
console.log(findTriplets([12, 3, 1, 2, -6, 5, -8, 6], 6))
