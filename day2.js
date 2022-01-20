/* Create a function that takes a juice from the menu as an argument 
and retruns the number of minutes it takes to mix that drink 

Pure strawberry joy takes 0.5 minutes 
Enegizer and green garden take 1.5 minutes 
tropical island take 3 minutes 
all of nothing takes 5 minutes 
every other drink takes 2.5 minutes
*/

function timeToMixJuice(juice){
  var waitTime = 0
    switch(juice){
        case "Pure Strawberry Joy": 
             return  waitTime= 0.5  + " "+"minutes" ;
            break;
        case "Enegizer":
        case "Green Garden":
            return  waitTime= 1.5  + " "+"minutes" ;
            break;
        case "Tropical Island":
            return  waitTime= 3  + " "+"minutes" ;
            break;
        case "All or nothing":
            return  waitTime= 5  + " "+"minutes" ;
        default:
            return  waitTime= 2.5  + " "+"minutes" ;

    }
    
}

console.log(timeToMixJuice("Green Garden")) 


