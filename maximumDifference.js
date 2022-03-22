//Given array gives the stock price at different times during the day. Find the best price to buy and sell so that profit is maximum.

let arr = [2,3,4,5,4,2,7,2,8]

function maxProfit(input) {
    let diff = [], max = [], i = 0;

    while(i < input.length) {
        if(input[i] < min && i < maxIndex) {
            min = input[i]
            minIndex = i
            diff = max - min
        } else if(input[i] > max) {
            max = input[i]
            maxIndex = i
            diff = max - min
        }
        i++;
    }
    return [input[minIndex], input[maxIndex]]
}

console.log(maxProfit([2,3,4,5,4,2,7,2,8]))
console.log(maxProfit([2,3,4,5,4,2,7,1,8]))
console.log(maxProfit([2,3,4,5,4,2,7,1]))
console.log(maxProfit([19,2,3,4,5,4,2,7,1,8,0]))
