// Destructuring de objetos
const person = {
  name: 'Daciuk',
  age: 36,
}

// const name = person.name
// const age = person.age
const { name, age } = person
console.log('name:', name)
console.log('age:', age)


const doors = 4
const color = 'red'

const car = { doors, color }
const { 
  doors: doorsRenamed, 
  color: colorRenamed 
} = car

console.log('car:', car)
console.log('doors renamed:', doorsRenamed)
console.log('color renamed:', colorRenamed)

// ==================================

// Destructuring de arrays
const coords = ['Coordenadas:', 100, 200]
// const x = coords[0]
// const y = coords[1]

const [title, x, y] = coords

console.log('title:', title)
console.log('x:', x)
console.log('y:', y)

// ==================================

// Destructuring em argumentos de função

function getCoords ([x, y]) {
  return { x, y }
}

console.log(getCoords([100, 200]))

function getConfig ({ config: configRenamed }) {
  return configRenamed
}

console.log(getConfig({ config: true }))
