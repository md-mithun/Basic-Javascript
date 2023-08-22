// The break statement "jumps out" of a loop.
for (let x = 0; x <= 100; x += 2) {
    console.log(x);
    if (x === 20) { break; }
}



// The continue statement "jumps over" one iteration in the loop.
for (let m = 0; m <= 50; m += 2) {
    console.log(m);
    if (m % 2 === 0) { continue }
}