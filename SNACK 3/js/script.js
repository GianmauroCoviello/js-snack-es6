const bicycles = [
    {
        name: 'Savadeck 700c',
        peso: 6

    },
    {
        name: 'Pinarello Angliru',
        peso: 8.3

    },
    {
        name: 'Savadeck HERD 6.0',
        peso: 8

    },
    {
        name: 'Savadeck Warwinds 3.0',
        peso: 9

    },
    {
        name: 'Likejj bicicletta da corsa ',
        peso: 7

    },
    {
        name: 'Likejj runners ',
        peso: 5

    }
    
    
]

console.log(bicycles)


// INSERIAMO LA VARIABILE PREDENDO COME RIFERIMENTO IL PRIMO ELEMENTO DELL'ARRAY
let lighterBike = bicycles[0]

bicycles.forEach((elem)=>{

    if (elem.peso < lighterBike.peso) {
        
        elem.peso= lighterBike.peso
        
    }
    
})
console.log(lighterBike)

console.log( `La bici più leggera è ${lighterBike.name} con un peso di circa ${lighterBike.peso}kg`)