var back = document.getElementsByClassName('card-back');
var front = document.getElementsByClassName('card-front');
var card = document.getElementsByClassName('cards');

var cards = ['ahri', 'akali', 'ashe', 'caitlynn', 'evelynn', 'fiora', 'janna', 'kaisa', 'katarina',
    'lux', 'missfoturne', 'morgana', 'nidalee', 'riven', 'sona', 'soraka', 'xayah', 'zyra', 'zoe', 'vayne',
    'ahri', 'akali', 'ashe', 'caitlynn', 'evelynn', 'fiora', 'janna', 'kaisa', 'katarina', 'lux', 'missfoturne',
    'morgana', 'nidalee', 'riven', 'sona', 'soraka', 'xayah', 'zyra', 'zoe', 'vayne'];

var statusCard = ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0',
    '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'];

var flipCard = ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0',
    '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'];

var repoCard = [];

var changCard;

changCard = shuffle(cards);

var temp = 0;


var tempCard = 0;

function shuffle(arrayCard) {
    var currentIndex = arrayCard.length;
    var tempoArrayValue;
    var randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex = currentIndex - 1;
        tempoArrayValue = arrayCard[currentIndex];
        arrayCard[currentIndex] = arrayCard[randomIndex];
        arrayCard[randomIndex] = tempoArrayValue;
    }
    return arrayCard;
}

function createBack() {
    for (let i = 0; i < back.length; i++) {
        if (i % 2 === 0) {
            back[i].innerHTML = '<img src="img/back.png">';
        } else {
            back[i].innerHTML = '<img src="img/back-sett.png">';
        }
    }
}

function addFront() {
    for (let i = 0; i < front.length; i++) {
        let name = changCard[i];
        front[i].innerHTML = '<img src="img/' + name + '.jpg">'
    }
}

function clickCard() {
    for (let i = 0; i < card.length; i++) {
        card[i].addEventListener('click', function () {
            if (statusCard[i] === '0' && flipCard[i] === '0' || statusCard[i] === '0' && flipCard[i] === '1') {
                front[i].classList.add('card-front-up');
                back[i].classList.add('card-back-up');
                repoCard.push(cards[i]);
                flipCard[i] = '1';
                temp++;
                statusCard[i] = '1';
                if (temp === 2) {
                    setTimeout(function () {
                        if (compareCard(repoCard[0], repoCard[1]) === true && repoCard.length === 2) {
                            for (let i = 0; i < flipCard.length; i++) {
                                if (flipCard[i] === '1') {
                                    flipCard[i] = '3';
                                }
                            }
                            tempCard++;
                            repoCard = [];
                            temp = 0;
                            if(tempCard === 20) {
                                alert('winner');
                            }

                        } else {
                            for (let i = 0; i < flipCard.length; i++) {
                                if (flipCard[i] === '1') {
                                    front[i].classList.remove('card-front-up');
                                    back[i].classList.remove('card-back-up');
                                    repoCard = [];
                                    flipCard[i] = '0';
                                    temp = 0;
                                    statusCard[i] = '0';
                                }
                            }
                        }
                    }, 500)
                }
            } else {
                for (let i = 0; i < cards.length; i++) {
                    if (flipCard[i] !== '3') {
                        front[i].classList.remove('card-front-up');
                        back[i].classList.remove('card-back-up');
                        repoCard = [];
                        flipCard[i] = '0';
                        temp--;
                        statusCard[i] = '0';
                    }
                }
                if(temp < 0) {
                    temp = 0;
                }
            }
        })
    }
}

function compareCard(name1, name2) {
    if (name1 === name2) {
        return true;
    } else {
        return false;
    }
}

createBack();
addFront();

clickCard();

