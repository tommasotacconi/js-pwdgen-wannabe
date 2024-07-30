
//1. Genera la cost addedNumber uguale alla stringa '21'
//2. Recupera il nome assegnandolo a const firstName
//3. Recupera il cognome assegnandolo a const lastName
//4. Recupera il colore assegnandolo a const yourColor
//5. Calcola la stringa data dalla somma delle quattro variabili indicate ai punti precedenti dandola alla const password
//6. viene scritto il testo che racchiude la password all'interno della const resulText
//7. la password viene stampata in pagina

alert ('Ciao, questo è un semplicissimo generatore di password, raccoglie il tuo nome, il tuo congnome e il tuo colore preferito, quindi genera una lunga parola in cui si susseguono le tue risposte senza spazio seguite dal numero 21.')

// fase di preparazione

// fase di raccolta dati
const firstName = prompt ('Scrivi il tuo nome', 'Tommaso');
console.log(firstName, typeof firstName);

const lastName = prompt ('Scrivi il tuo cognome', 'Tacconi');
console.log(lastName, typeof lastName);

const yourColor = prompt('Scrivi il tuo colore', 'blu')
console.log(yourColor, typeof yourColor);

const addedNumber = '21';
console.log(addedNumber);

// fase di elaborazione
const password = firstName + lastName + yourColor + addedNumber;
console.log(password, typeof password)

// risultato
const resultText = (`La tua password è <strong>${password}</strong>.`);
console.log(resultText);

document.body.innerHTML = resultText;