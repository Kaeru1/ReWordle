
// variables
const wordlist = ["hello", "alone", "album", "world", "crane", "crate", "point"];
let attepts = [null,null,null,null,null,null];
let atempt;
let answer;

// resets/initalizes variables
function reset(){
    answer = wordlist[Math.floor(Math.random()*wordlist.length)];
    atempt = 0;
    for(x=0; x<6; x++){
        attepts[x] = null;
    };
};

// prosseses guess and returns placement
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
            let placement = ["not","not","not","not","not"];
            for(x=0; x<5; x++){
                for(y=0; y<5; y++){
                    if(word[x] === answer[y]){
                        placement[x] = "move";
                    };
                };

                if(word[x] === answer[x]){
                    console.log(undefined)
                    placement[x] = "yes";
                };
            };
            console.log(placement);
        };
    } else {
        console.log("not in wordlist");
    };
}

reset();