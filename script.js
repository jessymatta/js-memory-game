console.log("working???");

let hasFlippedCard = false;
let first_card_flipped, second_card_flipped;
let lock_board = false;
let score = 0;
const score_html=document.getElementById('curr-score');


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
            score+=5;
            score_html.innerHTML=score;
            first_card_flipped.removeEventListener('click', flip);
            second_card_flipped.removeEventListener('click', flip);
            console.log("heree " + first_card_flipped);
            console.log("heree " + first_card_flipped.style.backgroundColor);


            // const main = document.getElementById('main');
            // const original = document.getElementByid('operation1');
            // const clone = original.cloneNode(true);

            setTimeout(() => {
                first_card_flipped.remove();
                second_card_flipped.remove();
            }, 500);
        }
        else {
            //the two cards did not match
            lock_board = true;
            score-=10;
            score_html.innerHTML=score;
            setTimeout(() => {//delays the flipping to be able to see the contents of the card
                first_card_flipped.classList.remove('flip');
                second_card_flipped.classList.remove('flip');
                lock_board = false;
            }, 500);
        }
    }
}



//Adding an event listener that will activate the function flip when a card is clicked
cards.forEach(card => card.addEventListener('click', flip));



