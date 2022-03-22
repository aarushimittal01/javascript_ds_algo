//For the given array, find the maximum number of films an actor can do in a year.

const arr = [
    {
        name: 'Bala',
        start: 8,
        end: 28
    },
        {
        name: 'Rock',
        start: 22,
        end: 35
    },
        {
        name: 'Policy Maker',
        start: 29,
        end: 47
    },
        {
        name: 'Brave',
        start: 33,
        end: 45
    },
        {
        name: 'Drive',
        start: 41,
        end: 49
    },
        {
        name: 'Race',
        start: 46,
        end: 59
    }
]


function maximumFilms(arr) {
    let combinations = []
    for(let i = 0; i < arr.length; i++) {
        let row = []
        row.push(arr[i])
        for(let j = 0; j < arr.length; j++) {
            if(i !== j) {
                let possibleFlag = false
                for(let k = 0; k < row.length; k++) {
                    if(row[k].end < arr[j].start) {
                        possibleFlag = true
                    } else {
                        possibleFlag = false
                        break;
                    }
                }
                if(possibleFlag) row.push(arr[j])
            }
        }
        combinations.push(row)
    }
    
    let num = 1;
    let index
    let max = 1;
    for(let i = 0; i < combinations.length; i++) {
        if(combinations[i].length > max) {
            max = combinations[i].length
            index = i
        }
    }
    
    for(let i = 0; i < combinations[index].length; i++) {
        console.log(combnations[index][i].name)
    }
}
