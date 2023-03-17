var randomNumber1 = Math.round(Math.random() * 5 + 1)
var randomNumber2 = Math.round(Math.random() * 5 + 1)
document.getElementsByClassName("img1")[0].setAttribute('src', 'images/dice' + randomNumber1 +  '.png');
document.getElementsByClassName("img2")[0].setAttribute('src', 'images/dice' + randomNumber2 +  '.png');
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Гравець 1 переміг" ;
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Гравець 2 переміг🚩" ;
} else {
    document.querySelector("h1").innerHTML = "НІЧИЯ" ;
}