// function sum (a, b) {
//   return a + b
// }

// const sum = function (a, b) {
//   return a + b
// }

const sum = (a, b) => {
  return a + b
}

console.log('sum(1, 2):', sum(1, 2))

const mult = (a, b) => a * b

console.log('mult(2, 2):', mult(2, 2))

const plusOne = a => a + 1

console.log('plusOne(5):', plusOne(5))

// const getObject = () => {
//   return {
//     name: 'Daciuk',
//   }
// }

const getObject = () => ({
  name: 'Daciuk'
})

console.log('getObject():', getObject())
