// help with an application form that will tell prospective members which category they will be placed.
// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
// Input
// Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
// Example input: [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
// EXample output: ["Open", "Open", "Senior", "Open", "Open", "Senior"]


function openOrSenior(data){
    let results = []
    data.forEach((el) =>{
      if(el[0] >54 && el[1]>7){
        results.push('Senior')
      }
      else{results.push('Open')}
    })
    return results
  
  }
  