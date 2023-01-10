function getMessage(msg) {
    console.log('Message:', msg);
}

function getSortedNumbers(numbers) {
    console.log('Numbers:', numbers.sort((a,b) => a - b));
}

export { getMessage, getSortedNumbers }