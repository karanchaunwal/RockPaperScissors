// let stone=document.querySelector("#stone");
// let paper=document.querySelector("#paper");
// let scissor=document.querySelector("#scissor");
let Choices=document.querySelectorAll(".options");
let userChoice;
let compChoice;
let result;
let userscore=0;
let computerscore=0;


function compChoicefunc(){
    let optionsArr=["stone","paper","scissor"];
    //rock, paper, scissor
    let randomIdx = Math.floor(Math.random()*3);
    compChoice= optionsArr[randomIdx];
    return compChoice;
}


function checkWinner(){
    if(compChoice==="stone"){
        if(userChoice==="stone"){
            result="Draw";
            document.querySelector("#result").innerText="It's a Draw, Play again.";
            document.querySelector("#result").style.backgroundColor="rgb(19, 27, 60)";
            return result;
        }else if(userChoice==="paper"){
            result="You won";
            document.querySelector("#result").innerText=`You Win! Your ${userChoice} beats ${compChoice}.`;
            document.querySelector("#result").style.backgroundColor="rgb(73, 159, 73)";
            userscore++;
            return result;
        }else{
            result="You Lose";
            document.querySelector("#result").innerText=`You lose. Computer's ${compChoice} beats your ${userChoice}.`;
            document.querySelector("#result").style.backgroundColor="rgb(242, 66, 43)";
            computerscore++;
            return result;
        }
    }else if(compChoice==="paper"){
        if(userChoice==="stone"){
            result="You Lose";
            document.querySelector("#result").innerText=`You lose. Computer's ${compChoice} beats your ${userChoice}.`;
            document.querySelector("#result").style.backgroundColor="rgb(242, 66, 43)";
            computerscore++;
            return result;
        }else if(userChoice==="paper"){
            result="Draw";
            document.querySelector("#result").innerText="It's a Draw, Play again.";
            document.querySelector("#result").style.backgroundColor="rgb(19, 27, 60)";
            return result;
        }else{
            result="You Won";
            document.querySelector("#result").innerText=`You Win! Your ${userChoice} beats ${compChoice}.`;
            document.querySelector("#result").style.backgroundColor="rgb(73, 159, 73)";
            userscore++;
            return result;
        }
    }else {// if(compChoice==="scissor")
        if(userChoice==="stone"){
            result="You Won";
            document.querySelector("#result").innerText=`You Win! Your ${userChoice} beats ${compChoice}.`;
            document.querySelector("#result").style.backgroundColor="rgb(73, 159, 73)";
            userscore++;
            return result;
        }else if(userChoice==="paper"){
            result="You Lose";
            document.querySelector("#result").innerText=`You lose. Computer's ${compChoice} beats your ${userChoice}.`;
            document.querySelector("#result").style.backgroundColor="rgb(242, 66, 43)";
            computerscore++;
            return result;
        }else{
            result="Draw";
            document.querySelector("#result").innerText="It's a Draw, Play again.";
            document.querySelector("#result").style.backgroundColor="rgb(19, 27, 60)";
            return result;
        }
    }
    
}


function playGame(userChoice){
    // console.log(userChoice,"was clicked by user");
    compChoice=compChoicefunc();
    // console.log(compChoice,"was clicked by computer")
    checkWinner();
    // let Result=checkWinner();
    // console.log(Result);
}


function updateScore(){
    document.querySelector("#user_score").innerText=userscore;
    document.querySelector("#computer_score").innerText=computerscore;
}

//program starts

for(let options of Choices){
    options.addEventListener("click",()=>{

        let optionsID=options.getAttribute("id");
        userChoice=optionsID;
        
        playGame(userChoice);
        updateScore(); 
        
    });
}
