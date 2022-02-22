// Code your solution in this file!
function distanceFromHqInBlocks(location){
    const hq = 42;
    let distance = 0;
    if(location > hq){
        distance = location - hq;
        return distance;
    }
    else{
        distance = hq - location;
        return distance;
    }
}
function distanceFromHqInFeet(location){
    const hq = 42;
    let distance = 0;
    if(location > hq){
        distance = location - hq;
        return distance*264;
    }
    else{
        distance = hq - location;
        return distance*264;
    }
}
function distanceTravelledInFeet(start, destination){
    let distance = 0;
    if(start > destination){
        distance = start - destination;
        return distance*264;
    }
    else{
        distance = destination - start;
        return distance*264;
    }
}
function calculatesFarePrice(start, destination){
    let distance = 0;
    if(start > destination){
        distance = start - destination;
        distance = distance * 264;
    }
    else{
        distance = destination - start;
        distance = distance * 264;
    }
    if (distance < 400){
        return 0;
    }
    else if (distance >= 400 && distance <= 2000){
        return (distance - 400) * 0.02;
    }
    else if (distance > 2000 && distance <= 2500){
        return 25;
    }
    else{
        return 'cannot travel that far';
    }
}