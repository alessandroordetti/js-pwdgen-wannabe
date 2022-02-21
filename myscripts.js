const myName = prompt ("Come ti chiami?");
document.getElementById('my-name').innerHTML = myName;

console.log(myName)

const familyName = prompt ("Qual è il tuo cognome?");
document.getElementById('my-family-name').innerHTML = familyName;

console.log(familyName)

const favoriteColor = prompt ("Qual è il tuo colore preferito?");
document.getElementById('my-favorite-color').innerHTML = favoriteColor; 

console.log(favoriteColor)

document.getElementById('my-secret-password').innerHTML = 
`Ciao ${myName} ${familyName}! Tonio Cartonio ha scoperto che nel Fantabosco, oltre a bere litri di scivolizia e bumbomele, il tuo colore preferito è ${favoriteColor} e la tua password per lo strumentopolo misterioso è ${myName}${familyName}${favoriteColor}21!`