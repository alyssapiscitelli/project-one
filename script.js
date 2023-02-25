//Rock paper scissors game


   var limitOfRounds=prompt('How many rounds do you want to play?');
   var howManyRounds= 0;
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
    }

   if(userChoice=='scissors'&& options[randomNumber]==='rock')
    { 
      alert('Computer wins you lose! Rock Crushes Scissors!');
    }

     if(userChoice==='scissors' && options[randomNumber]==='paper')
    {
      alert('You win scissors beats paper!');
    }

     if(userChoice=='paper' && options[randomNumber]=='rock')
    {
      alert ('you win paper covers rock!!!!');
    }

    if(userChoice==='rock' && options[randomNumber]==='paper')
    {
      alert('You lose! Computer chose paper!Paper covers rock!');
    }
    
    console.log('We looped ',howManyRounds+1, ' rounds.');
    howManyRounds++;
  }
    
    
   