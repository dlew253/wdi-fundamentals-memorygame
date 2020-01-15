console.log("Up and running!");

var cards = [
   {
       rank: "queen",
       suit: "hearts",
       cardImage: "images/queen-of-hearts.png",
   },
   {
      rank: "queen",
      suit: "diamonds",
      cardImage: "images/queen-of-diamonds.png",
   },

   {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png",
   },
    {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png",
   },
];
var cardsInPlay=[];

var checkForMatch = function() {
  if (cardsInPlay.length >= 2) {
    if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
          alert("You found a match!");
      } else {
          alert("Sorry, try again");
        }
     }
  };


 var flipCard = function() {
 	var cardId = this.getAttribute('data-id');
  console.log("User flipped" + cards[cardId].rank);
 cardsInPlay.push(cards[cardId].rank);
 checkForMatch();
 console.log(cards[cardId].cardImage);
 console.log(cards[cardId].suit);
   var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    cardTable.appendChild(cardElement);
  };
};

console.log(cardsInPlay);

var createBoard = function() {}
  const cardTable = document.getElementById('game-board');
  for (var i = 0; i < cards.length; i++) {
}

createBoard();