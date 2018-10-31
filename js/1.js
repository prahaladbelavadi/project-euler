const limit = 1000 // Upper limit

function sumOfMultiples(limit){
    var sum = 0
    for (var num = 0; num < limit; num++) { //iterate through range 0 to limit
        if (num % 3 == 0 || num % 5 == 0) { // if num is a multiple of 3 or 5
            sum = sum + num //add value to sum
        }
    }
    console.log("The sum of multiples of 3 and 5 below " + limit + " is " + sum) //log value of sum

}


sumOfMultiples(limit)