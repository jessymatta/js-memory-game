console.log("working???");

// Select all element with class "card" and store them in cards
const cards = document.querySelectorAll('.card');

//Adding an event listener that will activate the function flip when a card is clicked
cards.forEach(card => card.addEventListener('click',flip));


