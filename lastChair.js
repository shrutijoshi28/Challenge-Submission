/**
 * find survivor chair
 * @param {Array} : chairs
 * @return {Array} : chairs
 */
function getSurvivorChair(chairs){
    var iteration = 0;
    var skip = 0;
    //until one chair left
    while (chairs.length > 1) {
        chairs.splice(skip, 1);
        //calculate skip in each iteration
        skip = (skip + 1 + iteration) % chairs.length;
        iteration++;
        //console.log(chairs);
    }
    return chairs;
}

/**
 * add chairs to an array
 * @param {Var} : countOfChair
 * @return {Array} : chairs
 */
function addChairs(countOfChairs){   
    var chairs = []; 
    for(var i = 1; i<= countOfChairs; i++){
        chairs.push(i);
    }
    return chairs;
}

//creating an array of 100 chairs
var arrayOfChairs = addChairs(100);
var survivorChair = getSurvivorChair(arrayOfChairs);

console.log(survivorChair[0]+ ' is the last chair.');

