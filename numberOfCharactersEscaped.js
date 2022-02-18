//Given a string input ##!r#po#, escape characters between 2 hash, and just followed by !. 
//There will always be open closed hastags in non-nested way

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the numberOfCharactersEscaped function below.
function numberOfCharactersEscaped(expression) {
    let hashFlag = false
    let count = 0
    
    for(let i = 0; i < expression.length; i++) {
        switch(expression[i]) {
            case '#':
                if(hashFlag) hashFlag = false
                else hashFlag = true
                break;
            case '!':
                if((expression[i+1] >= 'a' && expression[i+1] <= 'z') && (hashFlag === true))
                count++
                break;
        }
    }
    
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const expression = readLine();

    const res = numberOfCharactersEscaped(expression);

    ws.write(res + '\n');

    ws.end();
}
