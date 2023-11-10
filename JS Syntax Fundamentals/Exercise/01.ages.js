function ageCategory(age) {
    if (age >= 0 && age <= 2) {
      console.log("baby");
    } else if (age >= 3 && age <= 13) {
      console.log("child");
    } else if (age >= 14 && age <= 19) {
      console.log("teenager");
    } else if (age >= 20 && age <= 65) {
      console.log("adult");
    } else if (age >= 66) {
      console.log("elder");
    } else {
      console.log("out of bounds");
    }
  }
  
  // Test cases
  ageCategory(20);   // Output: adult
  ageCategory(1);    // Output: baby
  ageCategory(100);  // Output: elder
  ageCategory(-1);   // Output: out of bounds
  