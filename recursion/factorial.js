const number = 6 

function factorial(num){
  
  const factor = num * (num -1)

  return factory(factor, num - 1)
}

function factory(factor, num) {

  if(num === 1) {
    return factor
  }else{
    const result = factor * (num - 1)
    return factory(result, num - 1)
  }
}

console.log(factorial(number))
