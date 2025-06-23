/*

// DOM (DOCUMENT OBJECT MODEL)

//to see the element of the site
console.log(document.querySelector(".status"));

// to see the text content
console.log(document.querySelector(".status").textContent);

// to see the value
console.log(document.querySelector(".input").textContent);

//to insert a value
document.querySelector(".input").value=20;
*/

// to embed random numbers in the input box
let randomNumber= Math.trunc(Math.random() * 50 + 1);
let chance = 20;
//Math.random()         =0.000001 - 0.999999
//Math.random() * 20    =0.000020 - 19.99998
//Math.random() * 20 + 1=1.000020 - 20.99998
//Math.trunc(Math.random() * 20 +1) = 1 - 20
let highscore=0;
function handleclick(){
    const GuessNum=Number(document.querySelector(".input").value);
    console.log(GuessNum,randomNumber);
    
    if(GuessNum==randomNumber){
        document.querySelector(".status").textContent="Correct Guess";
        if(chance>highscore){
            highscore=chance;
        document.querySelector(".score").textContent=highscore;
        }
        document.querySelector(".secretNumber").textContent = randomNumber;
    }else if(GuessNum==0){
        document.querySelector(".status").textContent="Not a valid Guess";
        document.querySelector(".score").textContent=highscore+0;   
    }else if(GuessNum>randomNumber){
        document.querySelector(".status").textContent="high Guess";
        if(chance>1){
        chance--;
        document.querySelector(".chances").textContent=chance;
        }else{
            chance=0;
            document.querySelector(".chances").textContent=chance;
            document.querySelector(".status").textContent="You Lost The Game";
        }
    }else if(GuessNum<randomNumber){
        document.querySelector(".status").textContent="Low Guess";
        if(chance>1){
        chance--;
        document.querySelector(".chances").textContent=chance;
        }else{
            chance=0;
            document.querySelector(".chances").textContent=chance;
            document.querySelector(".status").textContent="You Lost The Game";
        }
    }
}
document.querySelector(".check").addEventListener("click",handleclick);

document.querySelector(".restart").addEventListener("click",function(){
    let randomNumber= Math.trunc(Math.random() * 50 + 1);
    let chance=20;
    document.querySelector(".chances").textContent=chance;
    document.querySelector(".status").textContent="Game status...";
    document.querySelector(".check").addEventListener("click",handleclick);
    document.querySelector(".secretNumber").textContent="?";
});
