let locationHQ = 42;
function distanceFromHqInBlocks(currentLocation) {
    return Math.abs(currentLocation - locationHQ);
}
function distanceFromHqInFeet(currentLocation) {
    return Math.abs(currentLocation - locationHQ)*264;
}
function distanceTravelledInFeet(beginning, destination) {
    return Math.abs(beginning - destination)*264;
}
function calculatesFarePrice(beginning, destination) {
    let distance = distanceTravelledInFeet(beginning, destination);
    // console.log(distance);
    if (distance <= 400) {
        return 0;
    }
    else if (distance > 400 && distance <= 2000) {
        return (distance - 400)*0.02;
    }
    else if (distance > 2000 && distance <= 2500) {
        return 25;
    }
    else if (distance > 2500) {
        return "cannot travel that far";
    }
}

// console.log(calculatesFarePrice(30,44));
// console.log(calculatesFarePrice(30,44));