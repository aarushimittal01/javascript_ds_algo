//for a given string, find all possible combinations

function getAllCombinations(input) {
    let combinations = { }

    for(let i = 0; i < input.length; i++) {
        combinations[input[i]] = true
    }

    console.log("combinations : ", combinations)
    
    let length = 1
    while(length <= input.length) {
        for(let i = 0; i < combinations.length; i++) {
            let combo = combinations[i]
            console.log("while : combo : ", combo)
            for(let j = 0; j < combinations.length; j++) {
                console.log("while : combo[j] : ", combinations[j])
                if ( i != j) {
                    for(let k = 0; k <= combinations[j].length; k++) {
                        let newCombo
                        if (k == 0) newCombo = combo + combinations[j]
                        else newCombo = splice(combinations[j][0],k) + combo + splice(combinations[j][k])
                        length = newCombo.length
                        combinations[newCombo] = true
                        
                    }
                    let newCombo = combinations[j] + combo
                    console.log("while : ", newCombo)
                    length = newCombo.length
                    combinations[newCombo] = true
                }
            }
        }
    }

    for(let i = 0; i < combinations.length; i++) {
        console.log(combinations[i])
    }
}

console.log(getAllCombinations('abc'));
