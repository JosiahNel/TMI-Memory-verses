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
  reference: 'Matthew 6:33',
  keyWord: ['kingdom', 'these', 'added'],
  firstWords: 'but seek ye first the',
  lastWords: 'you unto added be shall',
};

const v11 = {
  reference: 'Matthew 9:38',
  keyWord: ['harvest', 'send', 'labourers', 'into', 'harvest'],
  firstWords: 'pray ye therefore the Lord',
  lastWords: 'harvest his into labourers forth',
};
const v12 = {
  reference: 'Matthew 11:28-30',
  keyWord: [
    'labour',
    'heavy',
    'laden',
    'rest',
    'take',
    'yoke',
    'learn',
    'meek',
    'lowly',
    'find',
    'rest',
    'souls',
    'yoke',
    'easy',
    'burden',
  ],
  firstWords: 'come unto me all ye',
  lastWords: 'light is burden my and',
};
const v13 = {
  reference: 'John 3:14-16',
  keyWord: [
    'Moses',
    'lifted',
    'serpent',
    'wilderness',
    'whosoever',
    'perish',
    'eternal',
    'begotten',
    'whosoever',
    'perish',
  ],
  firstWords: 'and as moses lifted up',
  lastWords: 'life everlasting have but perish',
};
const v14 = {
  reference: 'John 3:36',
  keyWord: ['see', 'life'],
  firstWords: 'he that believeth on the',
  lastWords: 'him on abideth God of',
};
const v15 = {
  reference: 'john 15:5',
  keyWord: ['vine', 'branches', 'same', 'bringeth', 'fruit'],
  firstWords: 'i am the vine ye',
  lastWords: 'nothing do can ye me',
};
const v16 = {
  reference: 'acts 1:8',
  keyWord: [
    'recive',
    'after',
    'ghost',
    'both',
    'jerusalem',
    'judea',
    'samaria',
    'uttermost',
    'part',
    'earth',
  ],
  firstWords: 'but ye shall receive power',
  lastWords: 'earth the of part uttermost',
};
const v17 = {
  reference: 'acts 4:12',
  keyWord: [
    'none',
    'name',
    'under',
    'heaven',
    'given',
    'amoung',
    'men',
    'whereby',
  ],
  firstWords: 'neither is there salvation in',
  lastWords: 'saved be must we whereby',
};
const v18 = {
  reference: 'romans 1:16',
  keyWord: ['ashamed', 'gospel', 'jew', 'greek'],
  firstWords: 'for i am not ashamed',
  lastWords: 'greek the to also and',
};
const v19 = {
  reference: 'romans 5:19',
  keyWord: ["man's", 'disobedience', 'many', 'sinners', 'obedience', 'many'],
  firstWords: `for as by one man's`,
  lastWords: 'righteous made be many shall',
};
const v20 = {
  reference: 'romans 8:18',
  keyWord: [
    'reckon',
    'sufferings',
    'time',
    'worthy',
    'compared',
    'glory',
    'revealed',
  ],
  firstWords: 'for i reckon that the',
  lastWords: 'us in revealed be shall',
};
const v21 = {
  reference: 'romans 8:28',
  keyWord: ['know', 'called', 'according', 'purpose'],
  firstWords: 'and we know that all',
  lastWords: 'purpose his to according called',
};
const v22 = {
  reference: 'romans 8:38-39',
  keyWord: [
    'persuaded',
    'death',
    'angels',
    'principalities',
    'powers',
    'height',
    'depth',
    'creature',
    'separate',
  ],
  firstWords: 'for i am persuaded that',
  lastWords: 'Lord our Jesus Christ in',
};
const v23 = {
  reference: 'romans 10:17',
  keyWord: ['hearing', 'hearing'],
  firstWords: 'so then faith cometh by',
  lastWords: 'God of word the by',
};
const v24 = {
  reference: 'romans 12:1',
  keyWord: [
    'beseech',
    'brethren',
    'mercies',
    'present',
    'bodies',
    'living',
    'sacrifice',
    'reasonable',
    'service',
  ],
  firstWords: 'i beseech you therefore brethren',
  lastWords: 'service reasonable your is which',
};
const v25 = {
  reference: '1 corinthians 10:13',
  keyWord: [
    'temptation',
    'taken',
    'such',
    'common',
    'tempted',
    'above',
    'temptation',
    'make',
    'way',
    'escape',
    'bear',
  ],
  firstWords: 'there hath no temptaition taken',
  lastWords: 'it bear to able be',
};
const v26 = {
  reference: '1 corinthians 13:2',
  keyWord: [
    'though',
    'prophecy',
    'understand',
    'mysteries',
    'knowledge',
    'though',
    'could',
    'remove',
    'mountains',
  ],
  firstWords: 'and though i have all',
  lastWords: 'nothing i am charity not',
};
const v27 = {
  reference: '2 corinthians 6:14',
  keyWord: [
    'unequally',
    'yoked',
    'unbelievers',
    'fellowship',
    'communion',
    'darkness',
  ],
  firstWords: 'be ye no unequally yoked',
  lastWords: 'darkness with light hath communion',
};
const v28 = {
  reference: 'galatians 2:20',
  keyWord: [
    'crucified',
    'nevertheless',
    'live',
    'yet',
    'liveth',
    'now',
    'live',
    'flesh',
    'live',
    'himself',
  ],
  firstWords: 'i am crucified with christ',
  lastWords: 'me for himself gave and',
};
const v29 = {
  reference: 'ephesians 2:8-9',
  keyWord: ['grace', 'works', 'boast'],
  firstWords: 'for by grace are ye',
  lastWords: 'boast should man any lest',
};
const v30 = {
  reference: 'philippians 1:6',
  keyWord: ['being', 'confident', 'very', 'begun', 'preform', 'until'],
  firstWords: 'being confident of this very',
  lastWords: 'christ jesus of day until',
};
const v31 = {
  reference: 'philippians 4:13',
  keyWord: ['strengtheneth'],
  firstWords: 'i can do all things',
  lastWords: 'me strenghtheneth which christ through',
};
const v32 = {
  reference: '1 timothy 4:12',
  keyWord: [
    'despise',
    'youth',
    'example',
    'believers',
    'conversation',
    'spirit',
    'purity',
  ],
  firstWords: 'let no man despise thy',
  lastWords: 'purity in faith in spirit',
};
const v33 = {
  reference: 'hebrews 11:6',
  keyWord: ['impossible', 'please', 'rewarder', 'diligently'],
  firstWords: 'but without faith it is',
  lastWords: 'him seek diligently that them',
};
const v34 = {
  reference: 'james 1:22',
  keyWord: ['doers', 'hearers', 'deceiving', 'own', 'selves'],
  firstWords: 'be ye doers of the',
  lastWords: 'selves own your deceiving only',
};
const v35 = {
  reference: 'james 4:7',
  keyWord: ['submit', 'resist', 'devil', 'flee'],
  firstWords: 'submit yourselves therefore to God',
  lastWords: 'you from flee will he',
};
const v36 = {
  reference: 'james 5:16',
  keyWord: ['faults', 'healed', 'effectual'],
  firstWords: 'confess your faults one to',
  lastWords: 'much availeth man righteous a',
};
const v37 = {
  reference: '2 peter 2:9',
  keyWord: [
    'how',
    'deliver',
    'godly',
    'out',
    'temptations',
    'reserve',
    'unjust',
    'judgment',
    'punished',
  ],
  firstWords: 'the Lord knoweth how to',
  lastWords: 'punished be to judgment of',
};
const v38 = {
  reference: '1 john 1:9',
  keyWord: ['sins', 'just', 'forgive', 'sins', 'cleanse'],
  firstWords: 'if we confess our sins',
  lastWords: 'unrightoeusness from us cleanse to',
};
const v39 = {
  reference: '1 john 2:15',
  keyWord: ['father'],
  firstWords: 'love not the world neither',
  lastWords: 'him in not is father',
};
const v40 = {
  reference: '1 john 4:7-8',
  keyWord: ['beloved', 'loveth', 'born', 'loveth'],
  firstWords: 'beloved let us love one',
  lastWords: 'love is god for god',
};

const verses = [
  v1,
  v2,
  v3,
  v4,
  v5,
  v6,
  v7,
  v8,
  v9,
  v10,
  v11,
  v12,
  v13,
  v14,
  v15,
  v16,
  v17,
  v18,
  v19,
  v20,
  v21,
  v22,
  v23,
  v24,
  v25,
  v26,
  v27,
  v28,
  v29,
  v30,
  v31,
  v32,
  v33,
  v34,
  v35,
  v36,
  v37,
  v38,
  v39,
  v40,
];

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
