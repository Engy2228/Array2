

function getSumOfSequence(number) {
  const array = []
  for (let i = 1; i <= number; i += 1) {
    array.push(i)
  }
  return array[0] + array[array.length - 1]
}
console.log(getSumOfSequence(5))