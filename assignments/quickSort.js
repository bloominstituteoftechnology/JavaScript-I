const integers = [19, 10, 11, 44, 33]

const quickSort = numbers => {
  let pI = 0 // partition index (from where we're comparing)
  let cI = 1 // current index (where we're at)
  if (numbers.length < 2) return false // edge case if arr has less than two items
  // need while loop
  while (cI <= numbers.length - 1) {
    console.log('in while loop')
    if (numbers[pI] > numbers[cI]) {
      // swap the two values
      // increment pI and cI
      let tmp = numbers[pI]
      numbers[pI] = numbers[cI]
      numbers[cI] = tmp
    }
    pI += 1
    cI += 1
  }
  return numbers
}

console.log(quickSort(integers))
