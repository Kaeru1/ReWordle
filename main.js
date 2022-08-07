
// variables
var ctx = document.getElementById("canvas").getContext("2d");
const wordlist = fullList;
const answerList = advanced;
let possibleAnswerList = answerList;
let attempts = [null,null,null,null,null,null];
let failed = false;
let attempt;
let answer;

// resets variables
function reset(){
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 150, 150);
    answer = answerList[Math.floor(Math.random()*answerList.length)];
    console.log(answer)
    possibleAnswerList = structuredClone(answerList);
    failed = false;
    attempt = 0;
    for(x=0; x<6; x++){
        attempts[x] = null;
    };
};

// prosseses guess and returns letterHighlights
function guess(guessedWord = document.getElementById("input").value.toUpperCase()){
    document.getElementById("input").value = "";
    document.getElementById("tempId").innerText = "";
    console.log(guessedWord);
    //console.log(answer);
    let inWordlist = false;
    for(x in wordlist){
        if(guessedWord == wordlist[x]){
            inWordlist = true;
        };
    };

    // checks if guessedWord is in wordlist and if player has failed
    if(inWordlist && !failed){
        attempt += 1;
        document.getElementById("attempt").innerText = attempt;
        if(guessedWord == answer){

            ctx.fillStyle = "green";
            ctx.fillRect(0, attempt*24-24, 150,24);

            for(x=0;x<5;x++){
                ctx.fillStyle = "black";
                ctx.font = "20px Arial";
                ctx.fillText(guessedWord[x], x*30+5 , attempt*24);
                console.log("correct");
            };
        } else {

            let letterHighlights = ["lightgray","lightgray","lightgray","lightgray","lightgray"];
            for(x=0; x<5; x++){
                for(y=0; y<5; y++){
                    if(guessedWord[x] == answer[y]){
                        letterHighlights[x] = "yellow";
                    };
                };

                if(guessedWord[x] === answer[x]){
                    letterHighlights[x] = "green";
                };

                ctx.fillStyle = letterHighlights[x];
                ctx.fillRect(x*30, attempt*24-24, 30,24);

                ctx.fillStyle = "black";
                ctx.font = "20px Arial";
                ctx.fillText(guessedWord[x], x*30+5 , attempt*24);
            };
            if(attempt == 6){
                console.log("you lost");
                failed = true;
            };
            checkPossibleAnswers(letterHighlights, guessedWord);
        };
    } else {
        if(failed){
            document.getElementById("tempId").innerText = "you have no more attempts";
        } else {
            document.getElementById("tempId").innerText = "not in wordlist";
        };
    };
};

// 
function checkPossibleAnswers(letterHighlights,guessedWord){
    let possibleAnswerAmount = 0;
    for(z in possibleAnswerList){
            if(possibleAnswerList[z] != null){
            let tempName = ["lightgray","lightgray","lightgray","lightgray","lightgray"];
            for(x=0; x<5; x++){
                if(possibleAnswerList[z].includes(guessedWord[x])){
                    tempName[x] = "yellow";
                };

                if(guessedWord[x] === possibleAnswerList[z][x]){
                    tempName[x] = "green";
                };
            };

            // checks if letterHighlights == tempname with nested loop
            let keepAsPossibleAnswer = false;
            if(letterHighlights[0] == tempName[0]){
                if(letterHighlights[1] == tempName[1]){
                    if(letterHighlights[2] == tempName[2]){
                        if(letterHighlights[3] == tempName[3]){
                            if(letterHighlights[4] == tempName[4]){
                                console.log(possibleAnswerList[z]);
                                keepAsPossibleAnswer = true;
                                possibleAnswerAmount += 1;
                            };
                        };
                    };
                };
            };

            // removes answers that are not possible from possibleAnswerList
            if(!keepAsPossibleAnswer){
                possibleAnswerList[z] = null;
            };
        };
    };
    console.log(`There are ${possibleAnswerAmount} possible answers left`);
    document.getElementById("possible answers").innerText = `There are ${possibleAnswerAmount} possible answers left`;
};

reset();