function rotateArray(arr, rotations) {
    const n = arr.length;
    rotations = rotations % n; 
    
    const rotatedArr = arr.slice(rotations).concat(arr.slice(0, rotations));
    
    console.log(rotatedArr.join(' '));
}