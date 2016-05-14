//set up variables
var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

var gameBoard = document.getElementById("game-board");

//set up board and cards
function createBoard(){


for(var i = 0; i < cards.length; i++) {
	var newCard = document.createElement('div');
	newCard.className = 'card';
	newCard.setAttribute('data-card', cards[i]);
	newCard.addEventListener('click', isTwoCards);
	gameBoard.appendChild(newCard);
	}
};

var isMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");

  	} else {
    alert("Sorry, try again.");
  	}
  	setTimeout(window.location.reload.bind(window.location), 500);
};

var isTwoCards = function(event) {
	flipCard(event.target);
	cardsInPlay.push(this.getAttribute('data-card'));
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
};

function flipCard(card) {
	if (card.getAttribute('data-card') === 'king') {
    card.innerHTML = '<img src = "KingS.png" alt = "Ze King"/>';
	} else {
	card.innerHTML = '<img src = "QueenS.png" alt = "Le Queen"/>';
	}
};

createBoard();