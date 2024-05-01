console.log("probando")



//* Reducción sintaxica de funciones de flecha

// const saludar = (name) => {
//   return `Hola ${name}`
// }

const saludar = (name) => `Hola ${name}`

console.log( saludar("bob") )
console.log( saludar("sarah") )



const oneArray = ["Asier", "Águeda", "Alfonso", "Marcos", "Oriol", "Angel", "Abel"]


// filtrar solo los que empiezan por A

// forma reducidas sintaxicamente
const filterArr = oneArray
.filter((eachName) => eachName[0] === "A" )
.map((eachName) => eachName.toUpperCase())
.sort((elemA, elemB) => elemA > elemB ? 1 : -1)

const filterArr2 = oneArray.filter((eachName) => {
  return eachName[0] === "A"
}).map((eachName) => {
  return eachName.toUpperCase()
}).sort((elemA, elemB) => {
  return elemA > elemB ? 1 : -1
})

console.log(filterArr)
console.log(filterArr2)



//* Reducción sintaxica de objetos (Propiedad de objeto abreviada)

// const user = {
//   username: "Patricio",
//   age: 50,
//   dateJoined: new Date()
// }

let username = "Patricio"
let age = 50
let dateJoined = new Date()



const user = {
  username,     // <= abreviación sintaxica
  age,          // <= abreviación sintaxica
  fecha: dateJoined,
  candy: 100
}

// la abreviación es:
// Si el nombre de la propiedad, es mismo del nombre de donde viene la data, podemos omitir uno de ellos.

console.log(user)

//* Destructuración

const oneAmazingDogIFound = {
  dogName: "Layka",
  breed: "Doberman",
  dogAge: 6,
  address: "Tokyo",
  rating: 12
}

// destructuramos las propiedades del objeto (se crean variables)

function describirPerrito({ dogName, breed, dogAge, rating = 11 }) {

  // let { dogName, breed, dogAge } = unPerrito
  // let dogName = "Layka"
  // let breed = "Doberman"
  // let dogAge = 6
  console.log(dogName, breed, dogAge)
  
  // dogAge = 10
  
  console.log(`El perrito ${dogName} es de raza ${breed} y tiene ${dogAge} añitos de edad`)
  
  console.log(`${dogName} es el mejor perrito. ${rating}/10`)

}

describirPerrito(oneAmazingDogIFound)

//* Destructuraciones de arrays

const misLibrosFavoritosDelMundo = [ "DiscWorld", "Dragonlance", "Dresden Files", "Dune" ]

const [ libro1, libro2, libro3, libro4 = "Harry Potter" ] = misLibrosFavoritosDelMundo

// la sintaxis libro4 = "Harry Potter" dentro de la destructuración solo asigna un valor base en caso de que no existe en el array

console.log(`Mis libros favoritos son: ${libro1}, ${libro2} y ${libro3}`)

console.log(libro4)



//* destructuracion compleja

const person = {
  firstName: "Elon",
  lastName: "Musk",
  job: "Twitter CEO",
  other: {
    about: {
      hobby: "Ir a marte",
      otherCompanies: ["Testla", "Starlink", "Boring Company"]
    }
  }
}

console.log(person.other.about.hobby)

const { other: { about: { hobby } } } = person

console.log(hobby)

const { other: { about: { otherCompanies: [ , ,company3] } } } = person

console.log(company3)