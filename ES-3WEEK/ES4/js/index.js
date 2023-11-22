// 1. funzione che genera la tabella con tutti i numeri
// 2. funzione che scrive i numeri (push in un array)
// 3. funzione (associata al bottone) che genera dei numeri randomi
// 4. funzione che aggiunge una class classList.add('highlight')
// 5. funzione che generale delle tabelline da 24
// funzioni vanno dichiarate e invocate

const numeriEstratti = [];

for (i = 1; i < 91; i++) {
    numeriEstratti.push(i)
}
console.log(numeriEstratti)

const creaTabella = function () {
    const container = document.getElementById('tabellone')
    for (let i = 0; i < 90; i++){
        const tabella = document.createElement('div')
        tabella.classList.add('celle')
        tabella.innerText = i + 1
        container.appendChild(tabella)
    }
}
creaTabella()

const bottone = function () {
    
}
