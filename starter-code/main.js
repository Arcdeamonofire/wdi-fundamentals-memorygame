/*var cardOne = "queen";
var cardTwo= "queen";
var cardThree= "king";
var cardFour= "king"; */



function createBoard(){
var gameBoard = document.getElementById("game-board");

for (var i = 0; i<4; i++) {
	var newCard = document.createElement('div');
	newCard.className = 'card';
	gameBoard.appendChild(newCard);
}


}


createBoard();


/*if (cardTwo === cardFour) {
    alert('Sorry, try again.');
} else { 
    alert('You found a match!');
}*/