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


console.log("***** ACTIVIDAD *****")

// ********  ITERATION 1 *********

// Iteration 1. Given the object 'data', use the object destructuring to be able
// to console.log the following:
// 1. the student first and last name,
// 2. favorite football club,
// 3. as well as the city and the country this student is coming from.
// You can either destructure the nested elements in separate lines or do all in a single destructure.
// You can console.log any way you want.

const data = {
  name: {
    firstName: 'ana',
    lastName: 'marino',
  },
  isStudent: true,
  favoriteFootballTeam: 'fc barcelona',
  hometown: {
    city: 'buenos aires',
    country: 'argentina',
  },
};

// ... your  code  here

const { name: { firstName, lastName }, favoriteFootballTeam, hometown: { city, country } } = data
// const { name: { firstName, lastName } } = data
console.log(firstName, lastName)

// const { favoriteFootballTeam } = data
console.log(favoriteFootballTeam)

// const { hometown: { city, country } } = data
console.log(city, country)

// => expected Output:
// ana marino
// fc barcelona
// buenos aires argentina

// ********  ITERATION 2 *********

// What would be expected outputs in the console.logs and why? Try to guess without running the code, then uncomment the console.log to verify your answer.

// a:

const [a, b] = [1];
console.log(a * b); // <== NaN

// b:
const [c, d = 1] = [2];
console.log(c * d); // <== 2

// b:
let [e, f = 2, g, h = 1] = [3, 4];
console.log(e, f, g, h); // ==> ???




// ********  ITERATION 3 *********

// Given the object, use function parameter destructuring to get the following output:

const greenSmoothie = {
  leaf: 'spinach',
  veggie: 'bok choy',
  seed: 'ground flex seeds',
  nut: 'peanut',
  liquid: 'almond milk',
};

// destructure the object in the parameters itself
function getIngredients({leaf, veggie, seed, nut, liquid}) {
  return `To make the green smoothie,  you  should add: ${leaf}, ${veggie}, ${seed}, ${nut} and ${liquid}.`;
}

// ensure you pass the object as a parameter while calling the function below
console.log(getIngredients(greenSmoothie));

// => expected Output:
// To make a green smoothie, you should add: spinach, bok choy, ground flex seeds, peanut and almond milk.

// ********  SOLUTIONS *********
// the full solution can be found here: https://gist.github.com/jorgeberrizbeitia/e26276e7d1e3eb7b6ce95092247213e1




//* Operador Spread (...) ESPARCIR

console.log("*** OPERADOR SPREAD ***")

const numbers = [4, 8, 15, 16, 23, 42]



console.log(...numbers)

// console.log( Math.max(10, 40, 3, 18) )
console.log( Math.max(...numbers) )

let students1 = ["Ronnie", "Asier", "Marcos", "Xavi"]
let students2 = ["Alfonso", "Oriol", "Águeda"]

const allStudents = [ ...students1, ...students2, "bob" ]
console.log(allStudents)


// clonar arrays

const clone = [...numbers] // estoy clonando el primer nivel del array

const reverseNumbers = clone.reverse()
// const reverseNumbers = [...numbers].reverse()

console.log(reverseNumbers)
console.log(numbers)


//* Operador Rest (...) EL RESTO DE...

console.log("*** OPERADOR REST ***")

const hobbies = ["surfear", "cocinar", "video juegos", "leer"]

const [ hobby1, hobby2, ...elRestoDeLosHobbies ] = hobbies
console.log(hobby1)
console.log(hobby2)
console.log(elRestoDeLosHobbies)


function checkIfStudentPassed(...allNotes) {

  // el operador rest en parametros, coje todos los argumentos y los almacena en un array
  // console.log(allNotes)

  const sum = allNotes.reduce((acc, note) => {
    return acc + note
  }, 0)

  const promedio = sum / allNotes.length

  if (promedio >= 5) {
    console.log("Si, el etudiante aprobó")
  } else {
    console.log("No, el etudiante no aprobó :(")
  }
}

checkIfStudentPassed(3)
checkIfStudentPassed(3, 6)
checkIfStudentPassed(5, 12, 8)
checkIfStudentPassed(5, 12, 8, 5, 12, 8, 5, 12, 8, 5, 12, 8 ,5, 12, 8)