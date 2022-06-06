
// variables
var ctx = document.getElementById("canvas").getContext("2d");
const wordlist = advanced;
let attepts = [null,null,null,null,null,null];
let atempt;
let answer;

// resets/initalizes variables
function reset(){
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, 150, 150)
    answer = wordlist[Math.floor(Math.random()*wordlist.length)];
    atempt = 0;
    for(x=0; x<6; x++){
        attepts[x] = null;
    };
};

// prosseses guess and returns placement
function guess(word = document.getElementById("input").value.toUpperCase()){
    document.getElementById("input").value = "";
    console.log(word)
    console.log(answer)
    let inWordlist = false;
    for(x in wordlist){
        if(word == wordlist[x]){
            inWordlist = true;
        };
    };
    if(inWordlist){
        atempt += 1;
        if(word == answer){

            ctx.fillStyle = "green";
            ctx.fillRect(0, atempt*24-24, 150,24);

            for(x=0;x<5;x++){
                ctx.fillStyle = "black"
                ctx.font = "20px Arial";
                ctx.fillText(word[x], x*30+5 , atempt*24);
                console.log("correct");
            }
        } else {

            let placement = ["lightgray","lightgray","lightgray","lightgray","lightgray"];
            for(x=0; x<5; x++){

                for(y=0; y<5; y++){
                    if(word[x] === answer[y]){
                        placement[x] = "yellow";
                    };
                };

                if(word[x] === answer[x]){
                    placement[x] = "green";
                };

                ctx.fillStyle = placement[x];
                ctx.fillRect(x*30, atempt*24-24, 30,24);

                ctx.fillStyle = "black"
                ctx.font = "20px Arial";
                ctx.fillText(word[x], x*30+5 , atempt*24);
            };
            //ctx.font = "20px Arial";
            //ctx.fillText(placement, 10 , atempt*24);
            console.log(placement);
        };
    } else {
        console.log("not in wordlist");
    };
};

reset();