document.addEventListener('DOMContentLoaded', () => {

const cardArray = [
    {
        name: 'Brolly kills Superman',
        img: 'Images/Brolly kills Superman.jpg',
    },
    {
        name: 'Gohan',
        img: 'Images/Gohan.jpg',
    },
    {
        name: 'Goku vs Kid Buu',
        img: 'Images/Goku vs Kid Buu.jpg',
    },
    {
        name: 'Kakashi',
        img: 'Images/Kakashi.jpg',
    },
    {
        name: 'Naruto & Sasuske',
        img: 'Images/Naruto & Sasuske.jpg',
    },
    {
        name: 'Luffy D Monkey',
        img: 'Images/Luffy D Monkey.jpg',
    },
    {
        name: 'Brolly kills Superman',
        img: 'Images/Brolly kills Superman.jpg',
    },
    {
        name: 'Gohan',
        img: 'Images/Gohan.jpg',
    },
    {
        name: 'Goku vs Kid Buu',
        img: 'Images/Goku vs Kid Buu.jpg',
    },
    {
        name: 'Kakashi',
        img: 'Images/Kakashi.jpg',
    },
    {
        name: 'Naruto & Sasuske',
        img: 'Images/Naruto & Sasuske.jpg',
    },
    {
        name: 'Luffy D Monkey',
        img: 'Images/Luffy D Monkey.jpg'
    }
]


cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []





function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        let card = document.createElement('img')
        card.setAttribute('src', 'Images/Anime Ninja.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}


function checkForMatch() {
    let cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
        alert("Your Ninja Focus is Strong. You've Found A Match!")
        cards[optionOneId].setAttribute('src', 'Images/Anime Girl.jpg')
        cards[optionTwoId].setAttribute('src', 'Images/Anime Girl.jpg')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'Images/Anime Ninja.jpg')
        cards[optionTwoId].setAttribute('src', 'Images/Anime Ninja.jpg')
        alert("Where is Your Ninja Training. Try Again!")
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = "You Are A True Master!"
    }
}



function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}


createBoard()

})