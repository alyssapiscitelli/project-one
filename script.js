//Rock paper scissors game
   var howManyRounds =[1,2,3,4,5]
   
   var howManyRounds =prompt('How many rounds do you want to play?');
    
    
    var userChoice =prompt('Rock paper or scissors?');
    console.log(userChoice);
    
    const randomNumber = Math.floor(Math.random()*2);
    var options = ['rock', 'paper','scissor'];
    alert(options[randomNumber]);
    console.log(options[randomNumber]);

    if(userChoice===options[randomNumber])
    {
        alert('Ahh its a tie! Try again!');    
    }

    if(userChoice=='scissors'&& options[randomNumber]){
        alert('Computer wins you lose!');

        if(userChoice==='scissors' && options[randomNumber])
        alert('You win scissors beats paper!');
        if(userChoice==='paper' && options[randomNumber])
    alert ('computer loses paper covers rock!!!!');
    }
        
  //    if (userChoice === "paper") {
  //    if (options === "rock") {
  //        alert ("paper wins");
  //    } else {
  //        if (userChoice === "scissors") {
  //            alert("scissors wins");
  //        }
  //    }
  //    if (userChoice === "scissors") {
  //        if (options === "rock") {
  //            alert("rock wins");
  //        } else {
  //            if (options === "paper") {
  //                alert( "scissors wins");
  //            }
  //        }
  //    }
  //}


    


  

    