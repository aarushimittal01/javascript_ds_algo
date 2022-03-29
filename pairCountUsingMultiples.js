//A music player allows users to choose songs only in pairs whose duration add up to multiple of 60 seconds. Return a total number of different song pairs. Example, input -> [40,20,60], output -> 1

function getPairCount(input) {
    let map = []
    let count = 0;

    for(let i = 0; i < input.lengeth; i++) {
        let remainder = input[i] % 60;
        if (map[remainder]) map[remainder]++;
        else map[remainder] = 1;
    }

    let i = 1, j = 59;

    while(i<j) {
        if(map[i] && map[j]) {
            console.log("i : ", i)
            console.log("j : ", j)
            count += map[i] * map[j]
        }
        i++;
        j--;
    }

    if(map[30] && map[30] > 1) {
        count += (map[30] * (map[30] - 1)) / 2;
    }

    if(map[0] && map[0] > 1) {
        count += (map[0] * (map[0] - 1)) / 2;
    }

    return count

}

console.log(getPairCount([10,50,90,30]))
