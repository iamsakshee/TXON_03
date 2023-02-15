const addTaskBtn = document.querySelector('.addBtn');
const inpWin = document.querySelector('.popInp');
const addTask = document.querySelector('#addT');
const canT = document.querySelector('#canT');
const overlay = document.querySelector('.overlay');
const takeInp = document.querySelector('.getTask');
const rootLi = document.getElementById('addItems');
const remand = document.querySelector('.remand');
const checkBtn = document.getElementById('completed');

var taskList = [];
let a = 0; let r = 1;

const addOverlay = () => {
    overlay.classList.add('visible');
    $('body').css('overflow', 'hidden');
};
const removeOverlay = () => {
    overlay.classList.remove('visible');
    $('body').css('overflow', 'auto');
};
const rem = function (e) {
    if (e.target.tagName == 'DIV') {
        removeOverlay();
    }
}



const removeTask = function (e) {
    e.target.closest('li').remove();
    if (a == r) {
        $(remand).show();
    }
}

const clearInput = () => {
    takeInp.value = null;
};

const giveToBoard = (e) => {
    const newMeLi = document.createElement('li');
    newMeLi.innerHTML = `${e} <br><button class='completion' id='a'>Done</button> <button class='remBtn' class='defBtn' id='a'>Remove</button>`;
    newMeLi.classList.add('undone');
    rootLi.appendChild(newMeLi);
}

const create = () => {
    let i = 0;
    const mainLine = takeInp.value;
    if (mainLine) {
        giveToBoard(mainLine); taskList.push(mainLine); $(remand).hide();
        clearInput();
        a++;
    }
};

const addDone = function (e) {
    e.target.closest('li').classList.toggle('done');
}

const unDone = function (e) {
    e.target.closest('li').classList.toggle('undone');
}



addTaskBtn.addEventListener('click', addOverlay);
addTask.addEventListener('click', create);
takeInp.addEventListener('keypress', (e) => (e.code === 'Enter') ? create(e) : 0);
canT.addEventListener('click', removeOverlay);
overlay.addEventListener('click', rem);

$(rootLi).on('click', 'button', function (e) {

    if (e.target.classList == 'completion') {
        addDone(e); unDone(e);
        if ($(this).parents().hasClass('done')) {
            $(this).textContent = 'Undone';
            e.target.textContent = 'Undone';
        }
        else {
            $(this).textContent = 'Done';
            e.target.textContent = 'Done';
        }
    }
});

$(rootLi).on('click', 'button', function (e) {

    if (e.target.classList == 'remBtn') {
        removeTask(e);
        r++;
    }
});
