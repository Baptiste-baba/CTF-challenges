function verifyMemory() {
    var userInput = document.getElementById('memory-input').value;
    var resultText = '';

    if (userInput === '0x7fffffffdd90') {
        resultText = 'You have found Flag 3 ! Congratulation!';
    } else {
        resultText = 'Information incorrecte!';
    }

    document.getElementById('result').textContent = resultText;
}