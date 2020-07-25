// by Maximilliam Araujo
// level: Easy
// Problem: 1 - BinaryGap
// Description: Find longest sequence of zeros in binary representation of an integer
// Task Score: 100%
// Correctness: 100%
// Performance: Not assessed

function solution(N) {
  const binary = parseInt(N, 10)
                  .toString(2)
                  .split('')
                  .map(n => Number(n));
  const binarySize = binary.length;
  if(binarySize < 3)
      return 0;
  
  let count = 0;
  const gaps = [];
  
  for(let i = 1; i < binarySize; i++){
      if(binary[i-1] === 1 && binary[i] === 0){
          count++;
      }else if(binary[i-1] === 0 && binary[i] === 0 && count > 0){
          count++;
      }else if(binary[i-1] === 0 && binary[i] === 1 && count > 0){
          gaps.push(count);
          count = 0;
      }
  }
  if(gaps.length === 0)
      return 0;
  
  const majorGap = gaps.reduce((reducer, item) => {
      return reducer > item ? reducer : item;
  })
  return majorGap;
}