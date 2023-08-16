'use strict';

const v1 = {
  reference: 'Joshua 1:9',
  keyWord: [
    'commanded',
    'strong',
    'courage',
    'afraid',
    'withersoever',
    'goest',
  ],
  firstWords: 'Have not I commanded thee',
  lastWords: 'goest thou withersoever thee with',
};

const v2 = {
  reference: 'Nehemiah 4:6',
  keyWord: [
    'built',
    'wall',
    'wall',
    'joined',
    'half',
    'thereof',
    'people',
    'mind',
  ],
  firstWords: 'So built we the wall',
  lastWords: 'work to mind a had',
};

const v3 = {
  reference: 'Psalm 19:14',
  keyWord: ['words', 'mouth', 'meditation', 'sight', 'redeemer'],
  firstWords: 'let the words of my',
  lastWords: 'redeemer my and strength my',
};

const v4 = {
  reference: 'Psalm 37:4',
  keyWord: ['thyself', 'desires', 'thine'],
  firstWords: 'delight thyself also in the',
  lastWords: 'heart thine of desires the',
};

const v5 = {
  reference: 'Psalm 40:7-8',
  keyWord: ['said', 'lo', 'volume', 'book', 'written', 'law'],
  firstWords: 'then said i lo i',
  lastWords: 'heart my within is law',
};

const v6 = {
  reference: 'Proverbs 13:4',
  keyWord: ['soul', 'sluggard', 'desireth', 'soul', 'diligent', 'fat'],
  firstWords: 'the soul of the sluggard',
  lastWords: 'fat made be shall diligent',
};

const v7 = {
  reference: 'Isaiah 40:31',
  keyWord: [
    'wait',
    'renew',
    'mount',
    'wings',
    'eagles',
    'run',
    'weary',
    'faint',
  ],
  firstWords: 'but they that wait upon',
  lastWords: 'faint not and walk shall',
};

const v8 = {
  reference: 'Isaiah 41:10',
  keyWord: ['fear', 'strengthen', 'help', 'uphold', 'right', 'hand'],
  firstWords: 'fear thou not for i',
  lastWords: 'righteouness my of hand right',
};

const v9 = {
  reference: 'Jeremiah 33:3',
  keyWord: ['call', 'answer', 'show', 'great', 'mighty', 'knowest'],
  firstWords: 'call unto me and i',
  lastWords: 'not knowest thou which things',
};

const v10 = {
  reference: 'Matther 6:33',
  keyWord: ['kingdom', 'these', 'added'],
  firstWords: 'but seek ye first the',
  lastWords: 'you unto added be shall',
};

const v11 = {
  reference: '',
  keyWord: [''],
  firstWords: '',
  lastWords: '',
};
const v12 = {
  reference: '',
  keyWord: [''],
  firstWords: '',
  lastWords: '',
};
const v13 = {
  reference: '',
  keyWord: [''],
  firstWords: '',
  lastWords: '',
};
const v14 = {
  reference: '',
  keyWord: [''],
  firstWords: '',
  lastWords: '',
};
const v15 = {
  reference: '',
  keyWord: [''],
  firstWords: '',
  lastWords: '',
};
const v16 = {
  reference: '',
  keyWord: [''],
  firstWords: '',
  lastWords: '',
};
const v17 = {
  reference: '',
  keyWord: [''],
  firstWords: '',
  lastWords: '',
};
const v18 = {
  reference: '',
  keyWord: [''],
  firstWords: '',
  lastWords: '',
};
const v19 = {
  reference: '',
  keyWord: [''],
  firstWords: '',
  lastWords: '',
};
const v20 = {
  reference: '',
  keyWord: [''],
  firstWords: '',
  lastWords: '',
};
const v21 = {
  reference: '',
  keyWord: [''],
  firstWords: '',
  lastWords: '',
};
const v22 = {
  reference: '',
  keyWord: [''],
  firstWords: '',
  lastWords: '',
};
const v23 = {
  reference: '',
  keyWord: [''],
  firstWords: '',
  lastWords: '',
};
const v24 = {
  reference: '',
  keyWord: [''],
  firstWords: '',
  lastWords: '',
};
const v25 = {
  reference: '',
  keyWord: [''],
  firstWords: '',
  lastWords: '',
};
const v26 = {
  reference: '',
  keyWord: [''],
  firstWords: '',
  lastWords: '',
};
const v27 = {
  reference: '',
  keyWord: [''],
  firstWords: '',
  lastWords: '',
};
const v28 = {
  reference: '',
  keyWord: [''],
  firstWords: '',
  lastWords: '',
};
const v29 = {
  reference: '',
  keyWord: [''],
  firstWords: '',
  lastWords: '',
};
const v30 = {
  reference: '',
  keyWord: [''],
  firstWords: '',
  lastWords: '',
};
const v31 = {
  reference: '',
  keyWord: [''],
  firstWords: '',
  lastWords: '',
};
const v32 = {
  reference: '',
  keyWord: [''],
  firstWords: '',
  lastWords: '',
};
const v33 = {
  reference: '',
  keyWord: [''],
  firstWords: '',
  lastWords: '',
};
const v34 = {
  reference: '',
  keyWord: [''],
  firstWords: '',
  lastWords: '',
};
const v35 = {
  reference: '',
  keyWord: [''],
  firstWords: '',
  lastWords: '',
};
const v36 = {
  reference: '',
  keyWord: [''],
  firstWords: '',
  lastWords: '',
};
const v37 = {
  reference: '',
  keyWord: [''],
  firstWords: '',
  lastWords: '',
};
const v38 = {
  reference: '',
  keyWord: [''],
  firstWords: '',
  lastWords: '',
};
const v39 = {
  reference: '',
  keyWord: [''],
  firstWords: '',
  lastWords: '',
};
const v40 = {
  reference: '',
  keyWord: [''],
  firstWords: '',
  lastWords: '',
};

const verses = [v1, v2, v3, v4, v5, v6, v7, v8, v9, v10];

/////////////////////////////////////////////////////////////////////
///////////// Elements
const questionText = document.querySelector('.question');
const format = document.querySelector('.format');
const dropBox = document.querySelector('.question-selection');
const dropBoxBtn = document.querySelector('.submit-drop');
const startBtn = document.querySelector('.start-button');

// Functions
const pickKeyWord = function (sel) {
  // compile all key words

  const WordList = verses.flatMap(ver => ver[`${sel}`]);
  console.log(WordList);
  // pick random one
  const number = Math.floor(Math.random() * WordList.length + 1);
  const keyWord = WordList[number - 1];
  // Display word
  questionText.textContent = keyWord;
};

////////////////HANDLERS/////////////////

let selection;

dropBoxBtn.addEventListener('click', function (e) {
  e.preventDefault();
  format.textContent = selection;
  return (selection = dropBox.value);
});

startBtn.addEventListener('click', function (e) {
  e.preventDefault();
  pickKeyWord(selection);
  console.log(selection);
});

// const verses = [v1, v2, v3, v4, v5, v6, v7, v8, v9,];
