// Sorteia um número 'aleatório' dentre os números de um array passado por parâmetro


function drawSpecifcNumbers(arrayOfNumbers) {
    const index = Math.floor(Math.random() * (arrayOfNumbers.length));

    return arrayOfNumbers[index];
}

module.exports = { drawSpecifcNumbers };
