function cookingByNumbers(input) {
    let number = Number(input);
  
    for (let i = 1; i < input.length; i++) {
      let operation = input[i];
      switch (operation) {
        case 'chop':
          number /= 2;
          break;
        case 'dice':
          number = Math.sqrt(number);
          break;
        case 'spice':
          number += 1;
          break;
        case 'bake':
          number *= 3;
          break;
        case 'fillet':
          number -= (number * 0.2);
          break;
      }
      console.log(number);
    }
  }
  
  // Test cases
  cookingByNumbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
  cookingByNumbers(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);
  

// function cookingByNumbers(input) {
//     let number = Number(input[0]);
  
//     for (let i = 1; i < input.length; i++) {
//       const operation = input[i];
  
//       switch (operation) {
//         case 'chop':
//           number /= 2;
//           break;
//         case 'dice':
//           number = Math.sqrt(number);
//           break;
//         case 'spice':
//           number += 1;
//           break;
//         case 'bake':
//           number *= 3;
//           break;
//         case 'fillet':
//           number -= number * 0.2;
//           break;
//       }
  
//       console.log(number);
//     }
//   }
  
//   // Test cases
//   cookingByNumbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
//   cookingByNumbers(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);
  