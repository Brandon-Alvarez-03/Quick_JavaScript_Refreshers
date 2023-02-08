// This is a recursion algorithm that will log all subsets of a given array of numbers

set = [1,2]

function all_subsets (arr){

  let subSet = [] 
  for (let i = 0; i < arr.length; i++) {
    subSet[i] = null
  }

  createSubset(arr, subSet, 0)
}

function createSubset(arr, subSet, index){

  if (index === arr.length) {
    console.log(subSet)
  }else{
    subSet[index] = null
    createSubset(arr, subSet, index + 1)
    subSet[index] = arr[index]
    createSubset(arr, subSet, index + 1)
  }

}
  

all_subsets(set)
