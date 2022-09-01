// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

//MY SOLUTION ---

const rps = (p1, p2) => {
    if(p1 == p2){
      return "Draw!"
    }
    else if(p1 == 'scissors'){
      if (p2 == 'rock'){
        return 'Player 2 won!'
      }
      else {
        return 'Player 1 won!'
      }
    }
    else if (p1 == 'paper'){
      if (p2 == 'scissors'){
        return 'Player 2 won!'
      }
      else {
        return 'Player 1 won!'
      }
    }
    else {
      if (p2 == 'paper'){
        return 'Player 2 won!'
      }
      else {
        return 'Player 1 won!'
      }
    }
  };

// Looking at my solution compared to some of the other answers, I realize that I could have simply clarified the 'Player 1 won' cases and then returned "Player 2 won" if they were false. I also saw what looks to be indexes mapping out the pairs of responses that result in any player winning, then using that index to compare results.