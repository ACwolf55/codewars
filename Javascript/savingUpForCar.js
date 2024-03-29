// A man has a rather old car being worth $2000. He saw a secondhand car being worth $8000. He wants to keep his old car until he can buy the secondhand one.
// He thinks he can save $1000 each month but the prices of his old car and of the new one decrease of 1.5 percent per month. Furthermore this percent of loss increases of 0.5 percent at the end of every two months. Our man finds it difficult to make all these calculations.
//  How many months will it take him to save up enough money to buy the car he wants, and how much money will he have left over?


function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
    let money = 0
    let months = 0
    let oldCar = startPriceOld
    let newCar = startPriceNew
    let depreciate = percentLossByMonth
    
    for(let i = 0; money+oldCar < newCar ;i++){
      money += savingperMonth
      oldCar -= (oldCar * (depreciate*.01))
      newCar -= (newCar * (depreciate*.01))
      months ++
    
      if(i%2==0){
        depreciate += .5
      }
    
    }
      if((oldCar+money) >= newCar ){
        return [months,Math.round((oldCar+money)-newCar)]
      }
    }