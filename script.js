//Rock paper scissors game


   var limitOfRounds=prompt('How many rounds do you want to play?');
   var howManyRounds= 0;
   var wins = 0;
   var lose = 0;
   var ties =0;
  
   while (limitOfRounds > howManyRounds)  
   { 
    var userChoice =prompt('Rock paper or scissors?');
    console.log(userChoice);
    
    const randomNumber = Math.floor(Math.random()*2);

      var options = ['rock', 'paper','scissor'];
   
      alert(options[randomNumber]);
      
      console.log(options[randomNumber]);

    

    if(userChoice===options[randomNumber])
    {
        alert('Ahh its a tie! Try again!');   
        ties++;
    }

   if(userChoice=='scissors'&& options[randomNumber]==='rock')
    { 
      alert('Computer wins you lose! Rock Crushes Scissors!');
      lose++;
    }

     if(userChoice==='scissors' && options[randomNumber]==='paper')
    {
      alert('You win scissors beats paper!');
      wins++;
    }

     if(userChoice=='paper' && options[randomNumber]=='rock')
    {
      alert ('you win paper covers rock!!!!');
      wins++;
    }

    if(userChoice==='rock' && options[randomNumber]==='paper')
    {
      alert('You lose! Computer chose paper!Paper covers rock!');
      lose++;
    }
    console.log('wins ', wins,' lose ',lose,' ties ',ties);

    
    console.log('We looped ',howManyRounds+1, ' rounds.');
    howManyRounds++;

  }
    
    
   