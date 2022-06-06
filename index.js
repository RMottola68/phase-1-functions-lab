let distanceFromHqInBlocks = (pickUp) => {
    let distance = Math.abs(42 - pickUp);
    return distance;
}

let distanceFromHqInFeet = (pickUp) => {
    let distanceInFeet = (Math.abs(42-pickUp) * 264);
    return distanceInFeet;
}

let distanceTravelledInFeet = (num1, num2) => {
 return (Math.abs(num1 - num2)) * 264;
}

let calculatesFarePrice = (start, destination) => {
    
    let farePrice = 0;
    let feetTravelled = distanceTravelledInFeet(start, destination)
    if( feetTravelled < 400) {
        return farePrice;
    } else if((feetTravelled >= 400) && (feetTravelled < 2000)){
        farePrice = (feetTravelled -400) * .02;
        return farePrice;
    } else if(feetTravelled > 2000 && feetTravelled <= 2500) {
        farePrice = 25
        return farePrice;
    } else if(feetTravelled > 2500) {
        farePrice =  "cannot travel that far";
        return farePrice;
    }
}