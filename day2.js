/* Create a function that takes a juice from the menu as an argument 
and retruns the number of minutes it takes to mix that drink 

Pure strawberry joy takes 0.5 minutes 
Enegizer and green garden take 1.5 minutes 
tropical island take 3 minutes 
all of nothing takes 5 minutes 
every other drink takes 2.5 minutes
*/

/*function timeToMixJuice(juice){
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

console.log(timeToMixJuice("Jay")) */
/*She can get 6 wedges from a 'small' lime, 8 wedges from a 
'medium' lime and 
10 from a 'large' lime.*/

function limesToCut(wedgesNeeded, limes){
    console.log("wedges i need today " + wedgesNeeded)
let numberOfLimesCut  = 0
let wedgesCount  = 0
/*for (i = 0; i< limes.length; i++){
    console.log("Using for loop;"+limes[i])
} */

var i = 0
while(wedgesCount <= wedgesNeeded  && i< limes.length){
    if ( limes[i]== "small"){
        wedgesCount +=  6
        numberOfLimesCut += 1
        console.log("im cutting  a small lime")
    }else  if( limes[i]== "medium"){
        wedgesCount +=  8
        numberOfLimesCut += 1
        console.log("im cutting a medium lime")
    }else if(limes[i]==  "large"){
        wedgesCount +=  10
        numberOfLimesCut += 1
        console.log("im cutting a large lime")
    }
    //console.log("Using while loop;"+limes[i])
    i++;

}
console.log("Wedges on my table  " +wedgesCount )


    return numberOfLimesCut
}

console.log("Limes needed to cut  " + limesToCut(25,['small', 'small', 'large', 'medium', 'small']))