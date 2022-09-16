console.log("working???");

let hasFlippedCard = false;
let first_card_flipped, second_card_flipped;
let lock_board=false;
let score=0;

// Select all element with class "card" and store them in cards
const cards = document.querySelectorAll('.card');

//A function that will flip the card when its clicked 
function flip() {

    if (lock_board) return;

    this.classList.toggle('flip'); //"this" refers to the element that activated the flip function in the first place
    if (!hasFlippedCard) {
        //this is the first click on the card, no previous cards where clicked to compare the two
        hasFlippedCard = true;
        first_card_flipped = this;
        console.log(first_card_flipped);
    }
    else {
        // the user is clicking on the second card and a comparision is needed
        hasFlippedCard = false;
        second_card_flipped = this; 

        //comparison of the two cards
        if (first_card_flipped.dataset.name === second_card_flipped.dataset.name) {
            //the two cards matched 
            first_card_flipped.removeEventListener('click', flip);
            second_card_flipped.removeEventListener('click', flip);
            // rgb(82, 201, 23)
            console.log("heree "+first_card_flipped);
            console.log("heree "+first_card_flipped.style.backgroundColor);
            setTimeout(() =>{
            first_card_flipped.remove();
            second_card_flipped.remove();
            },500);
            // $(first_card_flipped).css({'background-color': 'red'});
            // this.style.backgroundColor="rgb(82, 201, 23)";


        }
        else{
            //the two cards did not match
            lock_board=true;
            setTimeout(() =>{//delays the flipping to be able to see the contents of the card
            first_card_flipped.classList.remove('flip');
            second_card_flipped.classList.remove('flip');
            lock_board=false;
        },500);
    }
    }
}



//Adding an event listener that will activate the function flip when a card is clicked
cards.forEach(card => card.addEventListener('click', flip));









// Add a $ to (this), i.e. $(this).
// Inside your event handler, this refers to the original DOM object (HTMLDivElement, as the error states), not a jQuery object. Wrapping it using $() will make the css() method available because now the underlying DOM object is contained in a jQuery wrapper that exposes other functionality.