// стартовые переменные
// база жпегов сыщиков
const svarschiki = [
    'roland', 'daisy', 'skids', 'agnes', 'wendy',
    'zoey', 'rex', 'jenny', 'jim', 'pete',
    'mark', 'mihn', 'sefina', 'akachi', 'william', 'lola',
    'leo', 'ursula', 'finn', 'mateo', 'calvin',
    'carolyn', 'joe', 'preston', 'diana', 'rita', 'marie',
    'daniela', 'norman', 'monterey', 'lily', 'bob',
    'carson', 'vincent', 'kymani', 'amina', 'darell', 'charley',
    'nathaniel', 'harvey', 'winifred', 'jacqueline', 'stella'
];
// массивы карт на поле, в руке, подсказок
const fieldCards = [];
const handCards = [];
const hintCards = [];
let counterNumber = 0;
// игровые зоны
const field = document.getElementById('field');
const hints = document.getElementById('hints');
const nemesis = document.getElementById('nemesis');
const hand = document.getElementById('hand');
const counter = document.getElementById('counter');
// справочная
const helpBtn = document.getElementById('help-button');
const rules = document.getElementById('rules');
helpBtn.onclick = function(){
    rules.classList.toggle('hide-rules');
}
rules.onclick = function(){
    rules.classList.toggle('hide-rules');
}


// мешаем список, загадываем карту
shuffle( svarschiki );
const nemesisCard = svarschiki.shift();
fieldCards.push( nemesisCard );
// добавляем ещё 11 карт
for( i=0; i<11; i++ ){
    fieldCards.push( svarschiki.shift() );
}
// мешаем, раскладываем, отдельно напоминалка загаданной карты, берём 5 карт в руку
shuffle(fieldCards);
makeField();
setNemesis();
takeStartHand();
countGuesses();

// функция добавляющая загаданную карту в её поле
function setNemesis(){ 
    const card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('nemesis');
    card.style.backgroundImage = `url('./pic/${nemesisCard}.jpg`
    nemesis.append(card)       
}

// функция взятия стартовой руки
function takeStartHand(){
    for(i=0; i<5; i++){
        takeCard();
    }
    getHand();
}

// функция взятия одной карты
function takeCard(){
    handCards.push( svarschiki.shift() );
}

// функция получения списка карт и добавления её на поле
function getHand(){ 
    hand.innerHTML= '';
    handCards.forEach(sich => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('name', sich);
        card.style.backgroundImage = `url('./pic/${sich}.jpg`;
        card.addEventListener('click',()=>{
            if (counterNumber == 0){
                putFromHand(card);
                addHint(card); 
            }
        })
        hand.append(card)       
    });
}

// функция "выкладывания карты из руки", удаляет нажатую карту из массива руки
function putFromHand(card){
    for(i=0; i < handCards.length; i++){
        if(handCards[i] == card.getAttribute('name')){
            handCards.splice(i,1);
        }
    }
}

// функция, добавляющая подсказку, берёт карту, обновляет руку и поле подсказок
function addHint(card) {
    if (hintCards.length >= 5){
        return;
    }
    hintCards.push( [card, false] );
    takeCard();
    getHand();
    makeHintField();   
    countGuesses()
}

// функция, создающая и обновляющая поле подсказок
function makeHintField() {
    hints.innerHTML = '';
    for ( i = 0; i < hintCards.length; i++ ){
        // создание карты подсказки
        const card = document.createElement('div');
        card.classList.add('card');
        card.classList.add('hint-card');
        // получаем имя карты и состояние подсказки, добавляем в карту
        hintCards[i][3] = i; //индекс карты в атрибут
        const [hand, rotate] = hintCards[i];
        cardName = hand.getAttribute('name');
        card.setAttribute('name', cardName);
        card.setAttribute('rotated', rotate);
        if (rotate) {
            card.classList.add('rotated');
        }
        card.setAttribute('index', i);
        card.style.backgroundImage = `url('./pic/${cardName}.jpg`
        // поворот карты по нажатию
        card.addEventListener('click', ()=>{
            card.classList.toggle('rotated');
            const isRotated = card.classList.contains('rotated');
            const cardNumber = card.getAttribute('index');
            card.setAttribute('rotated', isRotated); 
            hintCards[cardNumber] = [card, isRotated, cardNumber];
            
        });
        hints.append(card)       
    };   
}

// функция создания игрового поля
function makeField() { 
    fieldCards.forEach(svarschik => {
        // создаёт отдельно элементы карт с тригерами нажатия
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('name', svarschik)
        card.style.backgroundImage = `url('./pic/${svarschik}.jpg`
        card.addEventListener('click',()=>{
            // если нажатая карта = загаданная карта, не закрывать её
            isNemesis = card.getAttribute('name') == nemesisCard;
            if(isNemesis){
                card.classList.toggle('wrong-card');
                return;
            }
            // кривой переворот карты
            card.classList.toggle('hidden');
            if(card.classList.contains('hidden')){
                card.style.backgroundImage = `url('./pic/hidden.jpg`
            } else {
                card.style.backgroundImage = `url('./pic/${svarschik}.jpg`
            }
            countGuesses();
        })
        field.append(card) 
              
    });
}

// функция считающая сколько осталось угадать карт
function countGuesses(){
    // сколько закрытых карт на поле
    const hiddenCards = document.getElementsByClassName('hidden');
    // сколько надо открыть в зависимости от количества карт подсказок
    let needToOpen = 0;
    switch(hintCards.length){
        case 1:
            needToOpen = 1;
            break;
        case 2:
            needToOpen = 3;
            break;
        case 3:
            needToOpen = 6;
            break;
        case 4:
            needToOpen = 10;
            break;
        case 5:
            needToOpen = 11;
            break;
        default:
            needToOpen = 0;
    }
    counterNumber = hiddenCards.length == 11 ? 0 : needToOpen - hiddenCards.length;   
    counter.innerHTML = counterNumber;
}

// загугленная функция замешивания
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

