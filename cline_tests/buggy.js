
/* 
Original function had two issues:
1. Parameter was named `name` but the code referenced `names` (mismatch).
2. Function was never exported, so it could not be tested or called from another file.

Cline fixed this by correcting parameter name mismatch and exporting greet function,
so it could run inside a test script during debugging.
*/
function greet(name) {
    console.log("Hello " + name);
}

module.exports = { greet };