
const { solution }= JSON.parse(localStorage.getItem("gameState"));
console.log(`${solution} (wordle answer)`);
window.alert(`The word is: ${solution} (it has also been printed to console)`);
