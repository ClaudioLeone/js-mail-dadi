/* MAIL
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. */

// LOGIC
const mailList = ["johndoe@alice.it", "mimmo87@virgilio.it", "jaredleto.tomars@gmail.com"];
const userInput = prompt("Benvenuto! Per procedere inserisci la tua email:")

let match = false;

for (let i = 0; i < mailList.length; i++){
    const currentElement = mailList[i];

    if (currentElement.toLocaleLowerCase() === userInput.toLocaleLowerCase())
    {
        match = true;
    }
}

// OUTPUT

if (match === true){
    console.log("Presente! Puoi procedere...");
    alert("Presente! Puoi procedere...");
}
else{
    console.log("Uhm.. :/ Non abbiamo trovato il tuo contatto, controlla di averlo scritto correttamente!");
    alert("Uhm.. :/ Non abbiamo trovato il tuo contatto, controlla di averlo scritto correttamente!");
}