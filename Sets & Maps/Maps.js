// Create a Map method 1
const prize = new Map([
    ["apple", 100],
    ["guava", 330],
    ["orange", 640],
])
console.log(prize.get("apple"));//100
console.log(prize.delete("guava"));//if successfully delete, return true otherwise false

// Create a Map method 2
const player = new Map();
player.set(
    ["Shakib", 75],
    ["Neymar", 10],
    ["Ronaldo", 7],
)
console.log(player.entries());