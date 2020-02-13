let darktheme = false;

let colorPicker = document.querySelector('.color-pick');
let colorChooser = document.querySelector('.other-colors');
let sendButton = document.querySelector('.send');
let clearButton = document.querySelector('.cancel');
let themeButton = document.querySelector('.theme');


let greenColor = document.querySelector('.greenColor');
let blueColor = document.querySelector('.blueColor');
let purpleColor = document.querySelector('.purpleColor');

greenColor.addEventListener('click', makeItGreen);
blueColor.addEventListener('click', makeItBlue);
purpleColor.addEventListener('click', makeItPurple);

themeButton.addEventListener('click', changeTheme);
colorPicker.addEventListener('click', openColors);

function openColors () {
    if (colorChooser.style.display === 'flex') {
        colorChooser.style.display = 'none';
    } else {
        colorChooser.style.display = 'flex';
    }
}



function makeItPurple(){
    document.querySelector('.whiteColor').style.background = '#6B48FF';
}
function makeItGreen(){
    document.querySelector('.whiteColor').style.background = '#00D595';
}
function makeItBlue(){
    document.querySelector('.whiteColor').style.background = '#0051EE';
}


clearButton.addEventListener('click', clearNote);
sendButton.addEventListener('click', postNote);

function postNote () {
    let title = document.querySelector('.title-input').value;
    let message = document.querySelector('.text-area').value;
    if (title === '') {
        title = 'Title';
    }
    if (message === '') {
        message = 'Take a note...';
    }
    let color = document.querySelector('.whiteColor').style.background;
    if (!color) {
        color = '#FFFFFF';
    }
    let result = generateBlock(title, message, color, darktheme);
    document.body.appendChild(result);
    document.querySelector('.title-input').value = '';
    document.querySelector('.text-area').value = '';
    //console.log(result);
}

function generateBlock (title, text, color, theme) {
    let heading = document.createElement('H3');
    let message = document.createElement('P');
    message.innerText = text;
    heading.innerText = title;
    //container => messageBlock => messageTitle (=> h3) + messageText (=> p)
    let messageBlock = document.createElement('div');
    messageBlock.classList.add('message');


    let messageTitle = document.createElement('div');
    messageTitle.classList.add('message-title');
    messageTitle.appendChild(heading);

    let messageText = document.createElement('div');
    messageText.classList.add('message-text');
    messageText.appendChild(message);

    let container = document.createElement('div');
    container.classList.add('container');

    if (theme) {
        messageTitle.style.color = '#FFFFFF';
        messageText.style.color = '#CCCCCC';
        messageBlock.style.background = '#595959';
    }

    messageBlock.appendChild(messageTitle);
    messageBlock.appendChild(messageText);
    container.appendChild(messageBlock);
    messageBlock.style.borderLeft = '3px solid ' + color;

    return container;
}

function clearNote () {
    document.querySelector('.title-input').value = '';
    document.querySelector('.text-area').value = '';
}


function changeTheme () {
    if (!darktheme){
        document.body.style.backgroundColor = '#252525';
        let notesLogo = document.querySelector('.notes_logo');
        notesLogo.style.color = '#B9BBBD';
        document.querySelector('.theme').src = './img/dark-theme.svg';
        document.getElementById('logo').src = './img/dark-logo.svg';
        document.querySelector('.search').src = './img/dark-search.svg';
        document.querySelector('.menu').src = './img/dark-menu.svg';

        document.querySelector('.text-field').style.background = '#595959';
        document.querySelector('.text-area').style.background = '#595959';
        document.querySelector('.text-area').style.color = '#CCCCCC';
        document.querySelector('.title-input').style.color = '#FFFFFF';
        document.querySelector('.title-input').style.background = '#595959';
        document.querySelector('.title-input').classList.add('changeColor');
        document.querySelector('.text-area').classList.add('changeColor');
        document.querySelector('.send').src = './icons/dark-save.svg';
        document.querySelector('.cancel').src = './icons/dark-cancel.svg';

        document.querySelectorAll('.message').forEach(el => el.style.background = '#595959');
        document.querySelectorAll('.message-title').forEach(el => el.style.color = '#FFFFFF');
        document.querySelectorAll('.message-text').forEach(el => el.style.color = '#CCCCCC');
        darktheme = true;
    } else {
        document.body.style.backgroundColor = '#FFFFFF';
        let notesLogo = document.querySelector('.notes_logo');
        notesLogo.style.color = 'rgba(13, 63, 103, 0.7)';
        document.querySelector('.theme').src = './img/theme.svg';
        document.getElementById('logo').src = './img/logo.svg';
        document.querySelector('.search').src = './img/search.svg';
        document.querySelector('.menu').src = './img/menu.svg';

        document.querySelector('.text-field').style.background = '#FFFFFF';
        document.querySelector('.text-area').style.background = '#FFFFFF';
        document.querySelector('.text-area').style.color = '#333333';
        document.querySelector('.title-input').style.background = '#FFFFFF';
        document.querySelector('.title-input').style.color = '#3A4248';
        document.querySelector('.title-input').classList.remove('changeColor');
        document.querySelector('.text-area').classList.remove('changeColor');
        document.querySelector('.send').src = './icons/save.svg';
        document.querySelector('.cancel').src = './icons/cancel.svg';

        document.querySelectorAll('.message').forEach(el => el.style.background = '#FFFFFF');
        document.querySelectorAll('.message-title').forEach(el => el.style.color = '#3A4248');
        document.querySelectorAll('.message-text').forEach(el => el.style.color = '#333333');
        darktheme = false;

    }


}

/*

let noteProperties = {
  title: title,
  message: message,
  color: color
}
let pageProperties = {
  darktheme: isDarkTheme,
  menu: isMenuOpen,
  search: isSearchOpen
 */