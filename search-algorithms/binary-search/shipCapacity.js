var shipCapacity = function (weights, days) {
  // initialize the lower bound (lo) as the maximum weight in the array
  let lo = Math.max(...weights);
  // initialize the upper bound (hi) as the sum of all the weights in the array
  let hi = weights.reduce((a, b) => a + b);
  // perform binary search to find the least weight capacity of the ship
  while (lo < hi) {
    // calculate the midpoint as the possible capacity of the ship
    let mid = lo + Math.floor((hi - lo) / 2);
    // simulate loading the ship with packages and counting the required number of days
    let curr = 0,
      requiredDays = 1;
    for (let i = 0; i < weights.length; i++) {
      if (curr + weights[i] > mid) {
        // if the current package cannot be added to the current day, add an extra day
        requiredDays++;
        // reset the current weight to the weight of the current package
        curr = weights[i];
      } else {
        // add the weight of the current package to the current weight
        curr += weights[i];
      }
    }
    if (requiredDays > days) {
      // if the required number of days is greater than the specified days, search in the upper half
      lo = mid + 1;
    } else {
      // if the required number of days is less than or equal to the specified days, search in the lower half
      hi = mid;
    }
  }
  // return the least weight capacity of the ship that can ship all the packages in the specified number of days
  return lo;
};

module.exports = shipCapacity;