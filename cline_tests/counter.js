
/* 
This file defines a simple counter system:
- `counter` starts at 0.
- `increment()` increases the counter by 1 and returns an updated value.

Step 4 will add a new `reset()` function using Build Feature Template.
*/

/*
**Feature:**  
Add a `reset()` function that sets the counter back to 0.

**Context / existing code:**  
The counter.js file already contains a `counter` variable initialized to 0 and an `increment()` function that increases the counter by 1.

**Acceptance criteria:** 
  
- [ ] The `reset()` function sets the counter back to 0
- [ ] The `reset()` function returns the new value (0)
- [ ] The function is exported for use in other modules

**Constraints:**  
- Must maintain the existing counter variable and increment function
- Must follow the same coding style and patterns
- Must be compatible with existing tests
*/
let counter = 0;

function increment() {
    counter++;
    return counter;
}

/**
 * Resets the counter to 0
 * @returns {number} The new counter value (0)
 */
function reset() {
    counter = 0;
    return counter;
}

// Export functions for use in other modules
export { increment, reset };
