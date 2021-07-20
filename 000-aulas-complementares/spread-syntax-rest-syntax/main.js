// Spread de objetos
const person = {
  name: 'Fernando',
  surname: 'Daciuk',
  age: 36,
}

console.log('person:', person)
const personUpdated = {
  ...person,
  age: 37,
}

const personWithBirthYear = {
  ...person,
  birthYear: 1984,
}

console.log('personUpdated:', personUpdated)
console.log('person after personUpdated:', person)
console.log('personWithBirthYear:', personWithBirthYear)

// Spread de arrays
const arr = [10, 20, 30]
// const arr2 = arr.concat(40)
const arr2 = [
  ...arr,
  40,
]

console.log('arr:', arr)
console.log('arr2:', arr2)

// Spread de strings
const str = 'Daciuk'
// const arrStr = str.split('')
const arrStr = [...str]
console.log('str:', str)
console.log('arrStr:', arrStr)

// Utilização da Rest Syntax com destructuring assignment
const { age, ...personWithoutAge } = personWithBirthYear

console.log('personWithoutAge:', personWithoutAge)

// Rest syntax em funções
function sum (...args) {
  return args
}

console.log('sum:', sum(1, 2, 3, 4, 5, 6, 7))
