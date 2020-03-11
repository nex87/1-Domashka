// Создаю Header
let addHeader = document.createElement('header');
addHeader.className = "header _bg-white";
document.body.append(addHeader);

const addDivBlock = document.createElement('div');
addDivBlock.className = "header__block";
addHeader.appendChild(addDivBlock);

let addDivL3 = document.createElement('div');
addDivL3.className = 'logo__block';
addDivBlock.appendChild(addDivL3);

let addDivL3_2 = document.createElement('div');
addDivL3_2.className = 'login';
addDivBlock.appendChild(addDivL3_2);



// Создаю слайдер
let addSlider = document.createElement('slider');
addSlider.className = "slider _bg-white";
document.body.append(addSlider);

const addImg = document.createElement('img');
addImg.className = "slider__image";
addSlider.appendChild(addImg);


let sectionClasses = ['catalog _bg-blue', 
                      'advant _bg-white',
                      'brands _bg-blue',
                      'comments _bg-white',
                      'news _bg-blue',
                      'contacts _bg-gray'];

let blocksClasses = ['catalog__block',
                     'advant__lock',
                     'brands__block',
                     'comments__block',
                     'news__block',
                     'contacts__block'

];

sectionClasses.forEach(function(sectionClass) {
    let section = document.createElement('section');
    document.body.append(section);
    section.className = sectionClass;
});

let sections = document.querySelectorAll('section');
sections.forEach(function(sectionS) {
    let addDivS = document.createElement('div');
    addDivS.className = "__block";
    sectionS.appendChild(addDivS);
});

let blocks = document.querySelectorAll('div.__block');

blocks.forEach(function(blockS) {
    
});

console.log(blocks);

let addFooter = document.createElement('footer');
addFooter.className = "footer";
document.body.append(addFooter);

