//A binary number is given in a single linked list. Return its decimal value.

function convertToDecimal(input) {
    let length = 0, i = 0;

    let number = '';

    while(input[i] != null) {
        number = input[i].toString() + number;
        length++;
        i++;
    }

    console.log("number : ", number)

    let decimal = 0;
    i = 0;
    while(length >= 0) {
        console.log(i, length, number.charAt(i))
        decimal += parseInt(number.charAt(i)) * Math.pow(2, length - 1)
        length--;
        i++;
    }

    return decimal;
}

console.log(convertToDecimal([0,1,0,0,1,1]))
