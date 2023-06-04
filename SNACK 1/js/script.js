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
        posto: Math.floor(index + 10)
    }
        return cena
       
})

// CICLO FOR PER STAMPARE IN CONSOLE I DATI INSERITI
for (i=0; i< listaInvitati.length; i++){
    console.log(listaInvitati[i].tavolo);
    console.log(listaInvitati[i].nome);
    console.log(listaInvitati[i].posto);
}