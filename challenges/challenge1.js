/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discussion questions that follow.
 * 
 * 1. Read over the code that follows. In what order will the outputs "Step 1",
 *    "Step 2", and "Step 3" be printed? How do you know?
 * 
 * 1, 3, 2, because the console.log for Step 2 is wrapped in a snooze function 
 * that waits 2000 ms before resolving
 * 
 * 
 * 2. Run this code using `node challenge1.js`. In what order were the steps
 *    printed?
 * 
 * 1, 3, 2
 * 
 * 3. Change the delay time in the `snooze` function from 2000 ms to 0. In what
 *    order will the steps be printed now? 
 * 
 * 1, 2, 3
 * 
 * Why? 
 * 
 * Because the console.log for Step 2 is no longer being held back from 
 * resolving by 2000 ms
 * 
 * Re-run the code again to verify
 *    your expectation. Were you correct?
 * 
 * I was not correct. That was sneaky of you.
 * 
 *******************************************************************************
 */

/* This function takes a callback as a parameter. */
function snooze(action) {
    setTimeout(function() {
      action();
    }, 0);
}
console.log('Step 1');

snooze( function() {
    console.log('Step 2');
    console.log("Async Action completed via callback");
} );

console.log('Step 3');

