// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// ci serve: tutti i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    // console.log(i);

    // per ogni numero: stabilire se è multiplo di 3, di 5, di entrambi o nessuno
    // se multiplo di 3 stampiamo 'Fizz' al posto del numero
    // se multiplo di 5 stampiamo 'Buzz' al posto del numero
    // se multiplo sia di 3 che di 5 stampiamo 'FizzBuzz' al posto del numero
    let userMessage;
    let userMessageClass;
    if (i % 3 === 0 && i % 5 === 0) {
        userMessage = 'FizzBuzz';
        userMessageClass = 'bg-danger';
        console.log(userMessage);
    } else if (i % 5 === 0) {
        userMessage = 'Buzz';
        userMessageClass = 'bg-warning';
        console.log(userMessage);
    } else if (i % 3 === 0) {
        userMessage = 'Fizz';
        userMessageClass = 'bg-primary';
        console.log(userMessage);
    } else {
        userMessage = i;
        userMessageClass = 'bg-black';
        console.log(userMessage);
    }

    // per ogni numero da 1 a 100 creo un div nell'html
    const numberContainer = document.querySelector('#numbers-container');
    const newBox = `<div class="box ${userMessageClass}">${userMessage}</div>`;
    numberContainer.innerHTML += newBox;


    // FizzBuzz = rosso = bg-danger
    // Buzz = giallo = bg-warning
    // Fizz = blu = bg-primary
    // i = grigio = bg-black

}