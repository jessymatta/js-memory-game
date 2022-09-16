console.log("working???");

// Select all element with class "card" and store them in cards
const cards = document.querySelectorAll('.card');

//A function that will flip the card when its clicked 
function flip(){
    this.classList.toggle('flip'); //"this" refers to the element that activated the flip function in the first place
    console.log(this);
}

//Adding an event listener that will activate the function flip when a card is clicked
cards.forEach(card => card.addEventListener('click',flip));


