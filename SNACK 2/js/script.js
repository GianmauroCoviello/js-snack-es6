
// ARRAY DI OBJECTS
const student = [
    {
        'id': '213',
        'nome' : 'Marco della Rovere',
        'voto': '78'   
    },
    {
        'id': '110',
        'nome' : 'Paola Cortellessa ',
        'voto': '96'   
    },
    {
        'id': '250',
        'nome' : 'Andrea Mantegna',
        'voto': '48'   
    },
    {
        'id': '145',
        'nome' : 'Gaia Borromini',
        'voto': '74'   
    },
    {
        'id': '196',
        'nome' : ' Luigi Grimaldello ',
        'voto': '68'   
    },
    {
        'id': '102',
        'nome' : 'Piero della Francesca',
        'voto': '50'   
    },
    {
        'id': '120',
        'nome' : 'Francesca da Polenta ',
        'voto': '84'   
    }

]

console.log(student)

// // PROPRIETA MAP ALL'ARRAY PER METTERE IN MAIUSCOLO IL NOME DEGLI STUDENTI
const upper = student.map((student)=> student.nome.toUpperCase())
console.log(upper)

// PROPRIETA FILTER ALL'ARRAY PER FILTRARE DALLA LISTA DI OBJECT GLI STUDENTI CHE HANNO AVUTO UN VOTO SUPERIORE A 70
const voti = student.filter((item)=>{if (item.voto >= '70') return true } )
console.log(voti)

// PROPRIETA FILTER ALL'ARRAY PER FILTRARE DALLA LISTA DI OBJECT GLI STUDENTI CHE HANNO UN ID SUPERIORE O UGUALE A 120 E HANNO AVUTO UN VOTO SUPERIORE A 70
const votiId = voti.filter((item)=>{if (item.id > '120') return true } )
console.log(votiId)