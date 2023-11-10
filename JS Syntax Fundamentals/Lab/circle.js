
function solve(input) {
  let result;
  let inputType = typeof input;
  if (inputType === 'number') {
    result = Math.PI * Math.pow(input, 2);
    console.log(result.toFixed(2));
  } else {
    console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
  }
}
solve(5);
solve("name");
  // Example usage:
  solve(5);      // Output: 78.54
  solve("name"); // Output: We cannot calculate the circle area because we received a string
  