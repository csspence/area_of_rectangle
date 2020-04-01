/*
Find the area of a rectangle when provided with one diagonal and one side of the rectangle. 
If the input diagonal is less than or equal to the length of the side, return "Not a rectangle". 
If the resultant area has decimals round it to two places.
*/

const area = (d,l) => {
  const wSquared = (d * d) - (l * l);
  const s = Math.sqrt(wSquared);
  if(d <= l) {
    return "Not a rectangle";
  }

  return Number((s * l).toFixed(2));
}