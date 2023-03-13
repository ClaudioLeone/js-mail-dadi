/* DADI
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */


// LOGIC
alert("Facciamo un gioco: io genero un numero da 1 a 6 (inclusi) e tu ne pensi uno nello stesso range. Chi ha pensato al numero più alto vince! Sei pronto?");
const aiNum = Math.floor(Math.random() * 6) + 1;
const userNum = Math.floor(prompt("Io ho fatto! Che numero hai pensato?"));
console.log(aiNum);
console.log(userNum);

// OUTPUT
if (isNaN(userNum) || (userNum < 0 || userNum > 6)) {
    alert("Uhm, sembra che tu non abbia seguito le mie istruzioni :/ Riprova.")    
}
else {
    alert("Hai scelto: " + userNum + "! Il risultato è...");

    if (userNum < aiNum){
        alert("VITTORIA PER ME! I.A. [1] UMANI [0] XD! Avevo scelto " + aiNum + ".");
    }
    else if(userNum === aiNum){
        alert("Parità! Anche io avevo scelto " + aiNum + ".");
    }
    else {
        alert("Vittoria per te... :_( Io avevo scelto " + aiNum + "...");
    }
}