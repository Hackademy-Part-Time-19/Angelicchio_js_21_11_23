
let listaProdotti = [
    {
        id: 1,
        nome: "Iphone",
        prezzo: 1000,
    },
    {
        id: 2,
        nome: "Mac",
        prezzo: 3000,
    },

    {
        id: 3,
        nome: "Scrivania",
        prezzo: 200,
    },
    {
        id: 4,
        nome: "Lampadari",
        prezzo: 600,
    },
]

/* Ordina per nome prodotto */
listaProdotti.sort((a, b) => a.nome.localeCompare(b.nome));
console.log(listaProdotti);

/* Ordina per prezzo */
listaProdotti.sort((a, b) => a.prezzo-b.prezzo);
console.log(listaProdotti)

/* Filtra  per prezzo > 250*/
let listaFiltrata = listaProdotti.filter((a) => a.prezzo>250);
console.log(listaFiltrata);