const squad_Football =[
    {
        nome: 'Juventus',
        punti: 0,
        falli_subiti: 0
    },
    {
        nome: 'Inter',
        punti: 0,
        falli_subiti: 0
    },
    {
        nome: 'Milan',
        punti: 0,
        falli_subiti: 0
    },
    {
        nome: 'Roma',
        punti: 0,
        falli_subiti: 0
    },
    {
        nome: 'Atalanta',
        punti: 0,
        falli_subiti: 0
    },
    {
        nome: 'Lecce',
        punti: 0,
        falli_subiti: 0
    }
]

let insideStatistics = squad_Football.map((elem) => {
    elem.punti = Math.floor((Math.random() * 100) + 1);
    elem.falli_subiti = Math.floor((Math.random() * 50) + 1);


})


insideStatistics = squad_Football

console.log(insideStatistics)

let fall = squad_Football.map((elem) => {
    
    let {nome, falli_subiti} = elem

    let newArray = {nome, falli_subiti}

    return newArray




})
console.log(fall)





