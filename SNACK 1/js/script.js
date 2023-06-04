// ARRAY DEGLI OSPITI
let ospiti=[
    'Brad Pitt', 'Johnny Depp','Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'
]

let cena;
// ARRAY MAP
let listaInvitati = ospiti.map((item,index) => {

    cena = {
        tavolo: 'Tavolo Vip',
        nome : item,
        posto: (index + 10)
    }
        return cena
       
})

// CICLO FOR PER STAMPARE IN CONSOLE I DATI INSERITI
listaInvitati.forEach((elem)=>{

    console.log(` il Signor ${elem.nome} risiede nel ${elem.tavolo} al posto: ${elem.posto}` )

})