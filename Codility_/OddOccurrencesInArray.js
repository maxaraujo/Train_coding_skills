// by: Maximilliam Araujo
// level:	Easy
// Problem: 1 - OddOccurrencesInArray
// Description: Find value that occurs in odd number of elements.
// Task Score:  100%
// Correctness: 100%
// Performance: 100%

function solution(A) {
  const integers = {};
  for(let i = 0; i < A.length; i++){
      if(integers[A[i]])
          delete integers[A[i]];
      else
          integers[A[i]] = A[i];
  }
  return Object.values(integers)[0];
}