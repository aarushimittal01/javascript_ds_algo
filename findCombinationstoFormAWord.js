// purple, [pur, purp, p, ur, le, e]
//Given a word and a array of strings, find if it is possible to form the given word

function checkWordAndElement(word, element) {
    if (word.length === element.length) {
        if (word === element) return true
        else return false
    } else return false
}

function createCombinations(word, combinations, element) {
    let flag = checkWordAndElement(word, element)
    if (flag) combinations.push(element)

    for(let i = 0; i < combinations.length ; i ++) {
        let newCombination = element + combinations[i]
        combinations.push(newCombination)
        if(combinations[i].length > 1) {
            for(let j = 1; j < combinations[i].length ; j++) {
                let firstPart = combinations[i].slice(0,j)
                let lastPart = combinations[i].slice(j+1)
                let newCombination = firstPart + element + lastPart
                combinations.push(newCombination)
            }
        }
        newCombination = combinations[i] + element
        combinations.push(newCombination)
    }
}

function createWords(word, input) {
    let combinations = []
    for(let i = 0; i < input.length ; i++) {
        createCombinations(word, combinations, input[i])
    }
    return combinations;
}

console.log(createWords('purple', ['pur', 'purp', 'p', 'ur', 'le', 'e']))
