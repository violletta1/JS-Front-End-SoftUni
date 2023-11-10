function roadRadar(speed, area) {
    let speedLimit;
    let status;
  
    switch (area) {
      case 'motorway':
        speedLimit = 130;
        break;
      case 'interstate':
        speedLimit = 90;
        break;
      case 'city':
        speedLimit = 50;
        break;
      case 'residential':
        speedLimit = 20;
        break;
    }
  
    const difference = speed - speedLimit;
  
    if (difference <= 0) {
      console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else {
      if (difference <= 20) {
        status = 'speeding';
      } else if (difference <= 40) {
        status = 'excessive speeding';
      } else {
        status = 'reckless driving';
      }
  
      console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
  }
  
  // Test cases
  roadRadar(40, 'city');         // Output: Driving 40 km/h in a 50 zone
  roadRadar(21, 'residential');  // Output: The speed is 1 km/h faster than the allowed speed of 20 - speeding
  roadRadar(120, 'interstate');  // Output: The speed is 30 km/h faster than the allowed speed of 90 - excessive speeding
  