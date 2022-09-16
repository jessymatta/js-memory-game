console.log("working???");

let hasFlippedCard= false;
let first_card_flipped, second_card_flipped;

// Select all element with class "card" and store them in cards
const cards = document.querySelectorAll('.card');

//A function that will flip the card when its clicked 
function flip(){
    this.classList.toggle('flip'); //"this" refers to the element that activated the flip function in the first place
    if(!hasFlippedCard){
        //this is the first click on the card, no previous cards where clicked to compare the two
        hasFlippedCard=true;
        first_card_flipped=this;
    }
    else{ 
        // he user is clicking on the second card and a comparision is needed
        hasFlippedCard=false;
        second_card_flipped=this;

        //comparison of the two cards
        //we access the data attribute defined in html through the dataset object
        console.log(first_card_flipped.dataset.name); 
        console.log(second_card_flipped.dataset.name); 
    }
}

//Adding an event listener that will activate the function flip when a card is clicked
cards.forEach(card => card.addEventListener('click',flip));


