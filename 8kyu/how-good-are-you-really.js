// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

//MY SOLUTION ---

function betterThanAverage(classPoints, yourPoints) {
    let totalPoints = yourPoints;
    for(let i=0; i<classPoints.length; i++){
      totalPoints += classPoints[i]
    }
    let average = totalPoints / (classPoints.length +1)
    if (yourPoints > average){
      return true
    }
    else if (yourPoints <= average){
      return false
    }
  }

  //Comments: I realize now that I could have just written retun yourPoint >= average instead of the if, else-if statement.