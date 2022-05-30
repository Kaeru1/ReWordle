
const wordlist = ["hello", "alone", "album", "world", "crane", "crate", "point"];
let atempts = 6;
let atempt = 0;

let answer;
let array = [null,null,null,null,null,null];

function reset(){
    answer = wordlist[Math.floor(Math.random()*wordlist.length)];
    atempt = 0;
    for(x = 0; x < atempts; x++){
        array[x] = null;
    };
};

function guess(word){
    let inWordlist = false;
    for(x in wordlist){
        if(word === wordlist[x]){
            inWordlist = true;
        };
    };
    if(inWordlist){
        if(word === answer){
            console.log("correct");
        } else {
            console.log("incorrect");
        };
    } else {
        console.log("not in wordlist")
    };
}

reset();