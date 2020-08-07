// by: Maximilliam Araujo
// level:	Easy
// Problem: 1. FrogJmp
// Description: Count minimal number of jumps from position X to Y.
// Task Score:  100%
// Correctness: 100%
// Performance: 100%

function solution(startPosition, endPosition, jump) {
  const way = endPosition - startPosition;
  let necessaryJumps = 0;
  if(way)
      necessaryJumps = Math.trunc(way/jump);
  else
      return necessaryJumps;
  
  if(way % jump === 0)
      return necessaryJumps;
  else
      return necessaryJumps + 1;
}