// ARRAY DEGLI OSPITI
let ospiti=[
    'Brad Pitt', 'Johnny Depp','Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'
]

let cena;
// ARRAY MAP
let listaInvitati = ospiti.map((item,i) => {

    return cena = {
        'tavolo': 'Tavolo Vip',
        'nome' : item,
        'posto': (i + 10)
    }

       
})

console.log(listaInvitati)

// CICLO FOR PER STAMPARE IN CONSOLE I DATI INSERITI
listaInvitati.forEach((elem)=>{

    console.log(` il Signor ${elem.nome} risiede nel ${elem.tavolo} al posto: ${elem.posto}` )

})