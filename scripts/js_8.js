'use strict';
// 'https://votesystem.mobius.team/api/result/25'
// 'https://votesystem.mobius.team/api/tests'


let buttonMyResult = document.querySelector ('.myResult'),
    buttonListQuestions = document.querySelector ('.listQuestions'),
    buttonMyToken = document.querySelector ('.myToken');

    buttonListQuestions.addEventListener ('click', function () {
    (async () => {
        let url = 'https://votesystem.mobius.team/api/tests';
        let response = await fetch(url);
        let commits = await response.json();
        let arrayListQuestions = commits.tests;

        function output (arrayListQuestions) {
            let blockListQuestions = document.querySelector('.outputListQuestions');
            for (let i = 0; i < arrayListQuestions.length; i++) {
                let myQuestion = document.createElement('h3');
                myQuestion.innerText = arrayListQuestions[i].label + '. ' + arrayListQuestions[i].text;
                blockListQuestions.appendChild(myQuestion);

                let answers = arrayListQuestions[i].conditions;
                for (let k = 0, n = 1; k < answers.length; k++, n++) {
                    let myAnswer = document.createElement('p');
                    if (answers[k].is_correct == '0') {
                        myAnswer.innerText = n + ') ' + answers[k].text;
                    } else {
                        myAnswer.innerText = n + ') ' + answers[k].text + ' - Это правильный ответ!';
                    }
                    blockListQuestions.appendChild(myAnswer);
                }
            }
        }
        output (arrayListQuestions);
        })();
});

buttonMyResult.addEventListener ('click', function () {

    (async () => {
        let url = 'https://votesystem.mobius.team/api/result/25';
        let response = await fetch(url);
        let commits = await response.json();

        let blockMyREsults = document.querySelector('.outputMyResults');

        const myDate = document.createElement('p');
        myDate.innerText = 'created: ' + commits.user.created_at;
        blockMyREsults.appendChild(myDate);

        const myId = document.createElement('p');
        myId.innerText = 'id: ' + commits.user.id;
        blockMyREsults.appendChild(myId);

        const myName = document.createElement('p');
        myName.innerText = 'name: ' + commits.user.name;
        blockMyREsults.appendChild(myName);

        const myResult = document.createElement('p');
        myResult.innerText = 'result: ' + commits.user.result;
        blockMyREsults.appendChild(myResult);
    })();
});

buttonMyToken.addEventListener ('click', function () {
    (async () => {
        let url = 'https://votesystem.mobius.team/api/result/25/token';
        let response = await fetch(url);
        let commits = await response.json();
        console.log(commits);

        let blockMyToken = document.querySelector('.outputMyToken');
        const myToken = document.createElement('p');
        myToken.innerText = 'My Token: ' + commits.token;
        blockMyToken.appendChild(myToken);
    })();
});