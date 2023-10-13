// стартовые переменные
// база сыщиков и их позиции на чартлисте
const svarschiki = [
    {name:'roland', posx: '0px', posy: '0px'},
    {name:'daisy', posx: '-120px', posy: '0px'},
    {name:'skids', posx: '-240px', posy: '0px'},
    {name:'agnes', posx: '-360px', posy: '0px'},
    {name:'wendy', posx: '-480px', posy: '0px'},

    {name:'zoey', posx: '0px', posy: '-180px'},
    {name:'rex', posx: '-120px', posy: '-180px'},
    {name:'jenny', posx: '-240px', posy: '-180px'},
    {name:'jim', posx: '-360px', posy: '-180px'},
    {name:'pete', posx: '-480px', posy: '-180px'},

    {name:'mark', posx: '0px', posy: '-361px'},
    {name:'mihn', posx: '-120px', posy: '-361px'},
    {name:'sefina', posx: '-240px', posy: '-361px'},
    {name:'akachi', posx: '-360px', posy: '-361px'},
    {name:'william', posx: '-480px', posy: '-361px'},
    {name:'lola', posx: '-600px', posy: '0px'},
    
    {name:'leo', posx: '0px', posy: '-541px'},
    {name:'ursula', posx: '-120px', posy: '-541px'},
    {name:'finn', posx: '-240px', posy: '-541px'},
    {name:'mateo', posx: '-360px', posy: '-541px'},
    {name:'calvin', posx: '-480px', posy: '-541px'},

    {name:'carolyn', posx: '0px', posy: '-720px'},
    {name:'joe', posx: '-120px', posy: '-720px'},
    {name:'preston', posx: '-240px', posy: '-720px'},
    {name:'diana', posx: '-360px', posy: '-720px'},
    {name:'rita', posx: '-480px', posy: '-720px'},
    {name:'marie', posx: '-600px', posy: '-181px'},
    
    {name:'tommy', posx: '0px', posy: '-901px'},
    {name:'mandy', posx: '-120px', posy: '-901px'},
    {name:'tony', posx: '-240px', posy: '-901px'},
    {name:'luke', posx: '-360px', posy: '-901px'},
    {name:'patrice', posx: '-480px', posy: '-901px'},
        
    {name:'mary', posx: '0px', posy: '-1081px'},
    {name:'amanda', posx: '-120px', posy: '-1081px'},
    {name:'trish', posx: '-240px', posy: '-1081px'},
    {name:'dexter', posx: '-360px', posy: '-1081px'},
    {name:'silas', posx: '-480px', posy: '-1081px'},

    {name:'daniela', posx: '0px', posy: '-1261px'},
    {name:'norman', posx: '-120px', posy: '-1261px'},
    {name:'monterey', posx: '-240px', posy: '-1261px'},
    {name:'lily', posx: '-360px', posy: '-1261px'},
    {name:'bob', posx: '-480px', posy: '-1261px'},
        
    {name:'carson', posx: '0px', posy: '-1441px'},
    {name:'vincent', posx: '-120px', posy: '-1441px'},
    {name:'kymani', posx: '-240px', posy: '-1441px'},
    {name:'amina', posx: '-360px', posy: '-1441px'},
    {name:'darell', posx: '-480px', posy: '-1441px'},
    {name:'charley', posx: '-600px', posy: '-1260px'},

    {name:'nathaniel', posx: '-600px', posy: '-360px'},
    {name:'harvey', posx: '-600px', posy: '-541px'},
    {name:'winifred', posx: '-600px', posy: '-720px'},
    {name:'jacqueline', posx: '-600px', posy: '-900px'},
    {name:'stella', posx: '-600px', posy: '-1080px'},
];
// массивы карт на поле, в руке, подсказок
const fieldCards = [];
const handCards = [];
const hintCards = [];
let counterNumber = 0;
const HIDDEN_POS_X = '-600px';
const HIDDEN_POS_Y = '-1441px';
const IMAGE = `url('./pic/investigators.jpg`;
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

// функция создания карты
function craftCard(name, posx, posy){
    const card = document.createElement('div');    
    card.classList.add('card');
    card.setAttribute('name', name);
    card.setAttribute('posx', posx);
    card.setAttribute('posy', posy);
    card.style.backgroundImage = IMAGE;
    card.style.backgroundPositionX = card.getAttribute('posx');
    card.style.backgroundPositionY = card.getAttribute('posy');
    return card;    
}

// функция добавляющая загаданную карту в её поле
function setNemesis(){ 
    const {name, posx, posy} = nemesisCard;
   
    const card = craftCard(name, posx, posy);    
    card.classList.add('nemesis');
    
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
    handCards.forEach(svarschik => {
        const {name, posx, posy} = svarschik;
        const card = craftCard(name, posx, posy);
        
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
        if(handCards[i].name == card.getAttribute('name')){
            handCards.splice(i,1);
            return;
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
        const [svarschik, rotate] = hintCards[i];
        const name = svarschik.getAttribute('name');
        const posx = svarschik.getAttribute('posx');
        const posy = svarschik.getAttribute('posy');
        const card = craftCard(name, posx, posy);

        card.classList.add('hint-card');
        card.setAttribute('rotated', rotate);
        card.setAttribute('index', i);
        
        if (rotate) {
            card.classList.add('rotated');
        }
        card.style.backgroundImage = IMAGE;
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
        const {name, posx, posy} = svarschik;
        // создаёт отдельно элементы карт с тригерами нажатия
        const card = craftCard(name, posx, posy);

        card.addEventListener('click',()=>{
            // если нажатая карта = загаданная карта, не закрывать её
            isNemesis = card.getAttribute('name') == nemesisCard.name;
            if(isNemesis){
                card.classList.toggle('wrong-card');
                return;
            }
            // кривой переворот карты
            card.classList.toggle('hidden');
            if(card.classList.contains('hidden')){
                card.style.backgroundPositionX = HIDDEN_POS_X;
                card.style.backgroundPositionY = HIDDEN_POS_Y;
            } else {
                card.style.backgroundPositionX = card.getAttribute('posx');
                card.style.backgroundPositionY = card.getAttribute('posy');
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
    counterNumber = needToOpen - hiddenCards.length;   
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

