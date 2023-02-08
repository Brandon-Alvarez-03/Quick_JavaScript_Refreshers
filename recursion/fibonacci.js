number = 14 

function fibonacci (num){

  const sequence = [0,1] 
  return summing (sequence, num)
  
}

function summing (sequence, num) {

  if (sequence.length === num) {
    return sequence
  }else{
    const result = sequence[sequence.length - 1] + sequence[sequence.length - 2]
    sequence.push(result) 
    return summing(sequence, num)
  }

}

console.log(fibonacci(number))

