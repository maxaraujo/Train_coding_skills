// by: Maximilliam Araujo
// level:	Easy
// Problem: 1 - CyclicRotation
// Description: Rotate an array to the right by a given number of steps
// Task Score:  100%
// Correctness: 100%
// Performance: Not assessed
function CyclicRotation(A, K){
  const aSize = A.length;
  const rotation = K % aSize;
  if(rotation === 0)
    return A;
  
  const rotatedNumbers = A.splice(aSize - rotation);
  const result = rotatedNumbers.concat(A);
  return result;
}