const cards = document.querySelectorAll(".memory-card");
let matchedCard = 0;
let cardOne, cardTwo;
let disableDeck = false;

function flipCard(e) {
  let clickedCard = e.target.parentNode;
  if (clickedCard !== cardOne &&  !disableDeck) {
	  
        clickedCard.classList.add("flip");
		
    if (!cardOne) {
      return (cardOne = clickedCard);
    }

    cardTwo = clickedCard;
	
    disableDeck = true
    let cardOneImg = cardOne.querySelector("img").src;
    let cardTwoImg = cardTwo.querySelector("img").src;
    matchedCards(cardOneImg, cardTwoImg);
  }
}

function matchedCards(img1, img2) {
  if (img1 === img2) {
	  matchedCard++;
	  if(matchedCard==6){
		 setTimeout(()=>{
			 return shuffleCard()
		 },1000)
	  }

    cardOne.removeEventListener("click", flipCard);
    cardTwo.removeEventListener("click", flipCard);
    cardOne = cardTwo = "";
    return disableDeck=false;
  }

  setTimeout(() => {
    cardOne.classList.add("shake");
    cardTwo.classList.add("shake");
  }, 1000);

  setTimeout(() => {
    cardOne.classList.remove("shake", "flip");
    cardTwo.classList.remove("shake", "flip");
    cardOne = cardTwo = "";
	disableDeck=false
  }, 1500);
}

function shuffleCard(){
	matchedCard = 0;
	cardOne=cardTwo=''
	let arr = [1,2,3,4,5,6,1,2,3,4,5,6]
	arr.sort(()=>Math.random > 0.5 ? 1 : -1)
	
	cards.forEach((card,index) => {
		card.classList.remove('flip')
		let imgTag = card.querySelector('img');
		imgTag.src = `images/img-${arr[index]}.jpg`
        card.addEventListener("click", flipCard);
});
}
shuffleCard();
cards.forEach((card) => {
	card.classList.add('flip')
	setTimeout(()=>{
		card.classList.remove('flip')
		
	},3000)
	
  card.addEventListener("click", flipCard);
});
