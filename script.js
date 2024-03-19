const VERSION = "v0.3";
const verDiv = document.createElement('span');
verDiv.innerText = VERSION;
document.getElementById('support').append(verDiv)
// стартовые переменные
// база сыщиков и их позиции на чартлисте
const svarschiki = [
    {name:'roland', posx: '0px', posy: '0px', firstname: 'Роланд', expansion: 0},
    {name:'daisy', posx: '-120px', posy: '0px', firstname: 'Дейзи', expansion: 0},
    {name:'skids', posx: '-240px', posy: '0px', firstname: 'Скат', expansion: 0},
    {name:'agnes', posx: '-360px', posy: '0px', firstname: 'Агнес', expansion: 0},
    {name:'wendy', posx: '-480px', posy: '0px', firstname: 'Венди', expansion: 0},

    {name:'zoey', posx: '0px', posy: '-180px', firstname: 'Зои', expansion: 1},
    {name:'rex', posx: '-120px', posy: '-180px', firstname: 'Рекс', expansion: 1},
    {name:'jenny', posx: '-240px', posy: '-180px', firstname: 'Дженни', expansion: 1},
    {name:'jim', posx: '-360px', posy: '-180px', firstname: 'Джим', expansion: 1},
    {name:'pete', posx: '-480px', posy: '-180px', firstname: 'Пит', expansion: 1},

    {name:'mark', posx: '0px', posy: '-361px', firstname: 'Марк', expansion: 2},
    {name:'mihn', posx: '-120px', posy: '-361px', firstname: 'Минь', expansion: 2},
    {name:'sefina', posx: '-240px', posy: '-361px', firstname: 'Зефина', expansion: 2},
    {name:'akachi', posx: '-360px', posy: '-361px', firstname: 'Акачи', expansion: 2},
    {name:'william', posx: '-480px', posy: '-361px', firstname: 'Уильям', expansion: 2},
    {name:'lola', posx: '-600px', posy: '0px', firstname: 'Лола', expansion: 2},
    
    {name:'leo', posx: '0px', posy: '-541px', firstname: 'Лео', expansion: 3},
    {name:'ursula', posx: '-120px', posy: '-541px', firstname: 'Урсула', expansion: 3},
    {name:'finn', posx: '-240px', posy: '-541px', firstname: 'Финн', expansion: 3},
    {name:'mateo', posx: '-360px', posy: '-541px', firstname: 'Матео', expansion: 3},
    {name:'calvin', posx: '-480px', posy: '-541px', firstname: 'Кальвин', expansion: 3},

    {name:'carolyn', posx: '0px', posy: '-720px', firstname: 'Кэролин', expansion: 4},
    {name:'joe', posx: '-120px', posy: '-720px', firstname: 'Джо', expansion: 4},
    {name:'preston', posx: '-240px', posy: '-720px', firstname: 'Престон', expansion: 4},
    {name:'diana', posx: '-360px', posy: '-720px', firstname: 'Диана', expansion: 4},
    {name:'rita', posx: '-480px', posy: '-720px', firstname: 'Рита', expansion: 4},
    {name:'marie', posx: '-600px', posy: '-181px', firstname: 'Мари', expansion: 4},
    
    {name:'tommy', posx: '0px', posy: '-901px', firstname: 'Томми', neloka: true, expansion: 5},
    {name:'mandy', posx: '-120px', posy: '-901px', firstname: 'Мэнди', neloka: true, expansion: 5},
    {name:'tony', posx: '-240px', posy: '-901px', firstname: 'Тони', neloka: true, expansion: 5},
    {name:'luke', posx: '-360px', posy: '-901px', firstname: 'Люк', neloka: true, expansion: 5},
    {name:'patrice', posx: '-480px', posy: '-901px', firstname: 'Патрис', neloka: true, expansion: 5},
        
    {name:'mary', posx: '0px', posy: '-1081px', firstname: 'Мэри', neloka: true, expansion: 6},
    {name:'amanda', posx: '-120px', posy: '-1081px', firstname: 'Аманда', neloka: true, expansion: 6},
    {name:'trish', posx: '-240px', posy: '-1081px', firstname: 'Триш', neloka: true, expansion: 6},
    {name:'dexter', posx: '-360px', posy: '-1081px', firstname: 'Декстер', neloka: true, expansion: 6},
    {name:'silas', posx: '-480px', posy: '-1081px', firstname: 'Сайлас', neloka: true, expansion: 6},

    {name:'nathaniel', posx: '-600px', posy: '-360px', firstname: 'Чо', expansion: 0},
    {name:'harvey', posx: '-600px', posy: '-541px', firstname: 'Харви', expansion: 0},
    {name:'winifred', posx: '-600px', posy: '-720px', firstname: 'Уинни', expansion: 0},
    {name:'jacqueline', posx: '-600px', posy: '-900px', firstname: 'Жаклин', expansion: 0},
    {name:'stella', posx: '-600px', posy: '-1080px', firstname: 'Стелла', expansion: 0},

    {name:'daniela', posx: '0px', posy: '-1261px', firstname: 'Даниэла', expansion: 7},
    {name:'norman', posx: '-120px', posy: '-1261px', firstname: 'Норман', expansion: 7},
    {name:'monterey', posx: '-240px', posy: '-1261px', firstname: 'Монтэрей', expansion: 7},
    {name:'lily', posx: '-360px', posy: '-1261px', firstname: 'Лили', expansion: 7},
    {name:'bob', posx: '-480px', posy: '-1261px', firstname: 'Боб', expansion: 7},
        
    {name:'carson', posx: '0px', posy: '-1441px', firstname: 'Карсон', expansion: 8},
    {name:'vincent', posx: '-120px', posy: '-1441px', firstname: 'Винсент', expansion: 8},
    {name:'kymani', posx: '-240px', posy: '-1441px', firstname: 'Каймани', expansion: 8},
    {name:'amina', posx: '-360px', posy: '-1441px', firstname: 'Амина', expansion: 8},
    {name:'darell', posx: '-480px', posy: '-1441px', firstname: 'Дарелл', expansion: 8},
    {name:'charley', posx: '-600px', posy: '-1260px', firstname: 'Чарли', expansion: 8},

    // {name:'wilson', posx: '-', posy: '-', firstname: 'Уилсон', neloka: true, expansion: 9},
    // {name:'kate', posx: '-', posy: '-', firstname: 'Кейт', neloka: true, expansion: 9},
    // {name:'alessandra', posx: '-', posy: '-', firstname: 'Алессандра', neloka: true, expansion: 9},
    // {name:'kohaku', posx: '-', posy: '-', firstname: 'Кохаку', neloka: true, expansion: 9},
    // {name:'hank', posx: '-', posy: '-', firstname: 'Хэнк', neloka: true, expansion: 9},
];
// база иконок цикла
const cycles = [
    [0,0], //база
    [-30,0], //данвич
    [-60,0], //каркоза
    [-90,0], //эпоха
    [-120,0], //круг

    [0,30], //павуки
    [-30,30], //инсмут
    [-60,30], //край
    [-90,30], //ключи
    [-120,30], //пирдолина
]
//загрузка локальных настроек и установка базовых при их отстутствии
if (localStorage.getItem('settings') === null ) {
    localStorage.setItem('settings', JSON.stringify({"ruloka":"false","firstname":"true","cyclesuit":"true"}) );
}
const SETTINGS = JSON.parse( localStorage.getItem('settings') );
if (SETTINGS.ruloka == "true") {
    for ( i = svarschiki.length-1 ; i >= 0 ; i--){
        if (svarschiki[i].neloka == true) {
            let wat = svarschiki.splice(i,1);
            console.log(wat);
        }
    }
}
refreshAddons();

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
const settingBtn = document.getElementById('setting-button');
helpBtn.onclick = function(){
    rules.classList.toggle('unhide-popup');
}
rules.onclick = function(){
    rules.classList.toggle('unhide-popup');
}
// настройки
const settings = document.getElementById('settings');
settingBtn.onclick = function(){
    settings.classList.toggle('unhide-popup');
}
const saveBtn = document.getElementById('save-btn');
saveBtn.onclick = function(){
    window.location.reload();
}
document.getElementById('ruloka-true').onclick = function(){
    SETTINGS.ruloka = "true";
    localStorage.setItem('settings', JSON.stringify(SETTINGS));
    refreshAddons();
}
document.getElementById('ruloka-false').onclick = function(){
    SETTINGS.ruloka = "false";
    localStorage.setItem('settings', JSON.stringify(SETTINGS));
    refreshAddons();
}
document.getElementById('cyclesuit-true').onclick = function(){
    SETTINGS.cyclesuit = "true";
    localStorage.setItem('settings', JSON.stringify(SETTINGS));
    refreshAddons();
}
document.getElementById('cyclesuit-false').onclick = function(){
    SETTINGS.cyclesuit = "false";
    localStorage.setItem('settings', JSON.stringify(SETTINGS));
    refreshAddons();
}
document.getElementById('firstname-true').onclick = function(){
    SETTINGS.firstname = "true";
    localStorage.setItem('settings', JSON.stringify(SETTINGS));
    refreshAddons();
}
document.getElementById('firstname-false').onclick = function(){
    SETTINGS.firstname = "false";
    localStorage.setItem('settings', JSON.stringify(SETTINGS));
    refreshAddons();
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
function craftCard(name, posx, posy, firstname, expansion){
    const card = document.createElement('div');    
    card.classList.add('card');
    card.setAttribute('name', name);
    card.setAttribute('posx', posx);
    card.setAttribute('posy', posy);
    card.setAttribute('expansion', expansion);
    card.append(document.createElement('div'));
    
    if (SETTINGS.firstname == "true") {
        card.setAttribute('firstname', firstname);
        card.innerText = firstname;
    }

    if (SETTINGS.cyclesuit == "true") {
        const suit = document.createElement('div');
        suit.classList.add('card-suit');
        suit.style.backgroundImage = `url('./pic/cycles.png`;
        suit.style.backgroundPositionX = cycles[expansion][0] + "px";
        suit.style.backgroundPositionY = cycles[expansion][1] + "px";
        card.append(suit)
    }

    card.style.backgroundImage = IMAGE;
    card.style.backgroundPositionX = card.getAttribute('posx');
    card.style.backgroundPositionY = card.getAttribute('posy');
    return card;    
}

// функция добавляющая загаданную карту в её поле
function setNemesis(){ 
    const {name, posx, posy, firstname, expansion} = nemesisCard;
   
    const card = craftCard(name, posx, posy, firstname, expansion);    
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
        const {name, posx, posy, firstname, expansion} = svarschik;
        const card = craftCard(name, posx, posy, firstname, expansion);
        
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
        const firstname = svarschik.getAttribute('firstname');
        const expansion = svarschik.getAttribute('expansion');
        const card = craftCard(name, posx, posy, firstname, expansion);

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
        const {name, posx, posy, firstname, expansion} = svarschik;
        // создаёт отдельно элементы карт с тригерами нажатия
        const card = craftCard(name, posx, posy, firstname, expansion);

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
                card.innerText = "";
                card.style.backgroundPositionX = HIDDEN_POS_X;
                card.style.backgroundPositionY = HIDDEN_POS_Y;
            } else {
                card.innerText = firstname;
                card.style.backgroundPositionX = card.getAttribute('posx');
                card.style.backgroundPositionY = card.getAttribute('posy');
                const suit = document.createElement('div');
                suit.classList.add('card-suit');
                suit.style.backgroundImage = `url('./pic/cycles.png`;
                suit.style.backgroundPositionX = cycles[expansion][0] + "px";
                suit.style.backgroundPositionY = cycles[expansion][1] + "px";
                card.append(suit)
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

// обновляет отображение включенных аддонов
function refreshAddons(){
    const cyclesuitAddon = document.getElementById('cyclesuit-addon');
    const rulokaAddon = document.getElementById('ruloka-addon');
    const firstnameAddon = document.getElementById('firstname-addon');

    const rulokaBtnTrue = document.getElementById('ruloka-true');
    const cyclesuitBtnTrue = document.getElementById('cyclesuit-true');
    const firstnameBtnTrue = document.getElementById('firstname-true');

    const rulokaBtnFalse = document.getElementById('ruloka-false');
    const cyclesuitBtnFalse = document.getElementById('cyclesuit-false');
    const firstnameBtnFalse = document.getElementById('firstname-false');

    if (SETTINGS.ruloka == "false") {
        rulokaAddon.classList.add('addon-hidden');
        rulokaBtnTrue.classList.remove('active-btn');
        rulokaBtnFalse.classList.add('active-btn');
    } else {
        rulokaBtnFalse.classList.remove('active-btn');
        rulokaBtnTrue.classList.add('active-btn');
    }

    if (SETTINGS.cyclesuit === "false") {
        cyclesuitAddon.classList.add('addon-hidden');
        cyclesuitBtnTrue.classList.remove('active-btn');
        cyclesuitBtnFalse.classList.add('active-btn');
    } else {
        cyclesuitBtnTrue.classList.add('active-btn');
        cyclesuitBtnFalse.classList.remove('active-btn');        
    }

    if (SETTINGS.firstname === "false") {
        firstnameAddon.classList.add('addon-hidden');
        firstnameBtnTrue.classList.remove('active-btn');
        firstnameBtnFalse.classList.add('active-btn');
    } else {
        firstnameBtnTrue.classList.add('active-btn');
        firstnameBtnFalse.classList.remove('active-btn');        
    }
}
