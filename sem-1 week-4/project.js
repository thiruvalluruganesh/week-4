function rollDice() {
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;
    let total = die1 + die2;

    console.log( Die 1: ${die1}, Die 2: ${die2}, Total: ${total});
}

// Roll the dice repeatedly
rollDice();