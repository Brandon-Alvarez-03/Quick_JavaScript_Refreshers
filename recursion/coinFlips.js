let flips = 1

function allOutcomes(flips) {
  let heads = ["H"]
  let tails = ["T"]

  return makeFlips(heads, flips).concat(makeFlips(tails, flips))
}


function makeFlips(arr, flips){
  flips -= 1
  let arr1 = []
  let arr2 = []

  if(flips < 1) {
    return arr
  } else {
    arr1[0] = arr[0] + "H"
    arr2[0] = arr[0] + "T"
    return makeFlips(arr1, flips).concat(makeFlips(arr2, flips))
  }
}

console.log(allOutcomes(flips))
