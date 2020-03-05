// Lesson 8

// const promiseFunc = function (resolve, reject) {
//     const GetMe = () => {
//         resolve ({
//             name: 'Ivan',
//             isAdmin: true
//         })
//     }
//     setTimeout(GetMe, 1000 * 2);
// }

// const promise = new Promise(promiseFunc);
// console.log(promise);
// setTimeout(() => console.log(promise), 1000 * 3);
// promise.then(user => {
//     console.log(user);
// });

// ---------------

// const promiseFunc = function(resolve, reject) {
//     const getMe = () => {
//         resolve({
//             name: 'Serhii',
//             isAdmin: true
//         })
//     }
    
//     setTimeout(getMe, 1000 * 2);
// }
// const promise = new Promise(promiseFunc);

// promise
//     .then(user => {
//         console.log(user);

//         user.email = '';
//         return user;
//     })
//     .then(editedUser => {
//         console.log(editedUser);
//     })

//     console.log()

// ----------

// async function getGithub() {
//     let response = fetch("https://api.github.com");

//     response
//     .then(response =>  {
//         return response.json();
//     })
//     .then (json => {
//         console.log(json);
//     })

// }
// getGithub();

// -------------

// async function getGithub() {
//     let response = await fetch("https://api.github.com");
//     console.log(response);
// }

// getGithub();
// -------------
// async function getGithub() {
//     let response = await fetch("https://api.github.com");
//     let result = await response.json();
//     console.log(result);
// }

// getGithub();

// -------------

// End of lesson 8

// Homework 7 start

let buttonCatalog = document.querySelector ('.catalog__minmax'),
    buttonAdvant = document.querySelector ('.advant__minmax'),
    buttonBrands = document.querySelector ('.brands__minmax'),
    buttonComments = document.querySelector ('.comments__minmax'),
    buttonNews = document.querySelector ('.news__minmax'),
    buttonContacts = document.querySelector ('contacts__minmax'),
    
    blockCatalog = document.querySelector ('.catalog'),
    blockAdvant = document.querySelector ('.advant'),
    blockBrands = document.querySelector ('.brands'),
    blockComments = document.querySelector ('.comments'),
    blockNews = document.querySelector ('.news'),
    blockContacts = document.querySelector ('.contacts');

    buttonCatalog.addEventListener ('click', function () {
        minimize(blockCatalog, buttonCatalog);
    });

    buttonAdvant.addEventListener ('click', function () {
        minimize(blockAdvant, buttonAdvant);
    });
    buttonBrands.addEventListener ('click', function () {
        minimize(blockBrands, buttonBrands);
    });
    buttonComments.addEventListener ('click', function () {
        minimize(blockComments, buttonComments);
    });
    buttonNews.addEventListener ('click', function () {
        minimize(blockNews, buttonNews);
    });
    buttonContacts.addEventListener ('click', function () {
        minimize(blockContacts, buttonContacts);
    });

    function minimize (block, button) {
        if (block.style.height == "60px") {
            button.innerTEXT = "Max";
            block.style.height = "auto";
            block.style.overflow = "hidden";
            
        } else {
            button.innerTEXT = "Min";
            block.style.height = "60px";
            block.style.overflow = "hidden";
        }
    }

// Homework end