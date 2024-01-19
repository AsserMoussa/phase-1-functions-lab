function distanceFromHqInBlocks(someValue) {
    let blocks; 
    if (someValue > 41){
    blocks = someValue - 42;
    return blocks;}
    else {
        blocks = 42 - someValue; 
        return blocks;
    } 
  }

  function distanceFromHqInFeet(someValue) {
    let feet = 264 * distanceFromHqInBlocks(someValue);
    return feet;
  }

  function distanceTravelledInFeet(start, destination) {
    if (destination > start)
    {let dist = destination - start;
    let total = dist * 264;
    return total;}
    else {
        let dist = start - destination;
    let total = dist * 264;
    return total;
    }
  }

  function calculatesFarePrice(start, destination) {
    let totalDist = distanceTravelledInFeet(start, destination);
    if (totalDist<401){
        return 0;
    }
    else if (totalDist>400 && totalDist<2001){
        totalDist = totalDist - 400;
        return totalDist*0.02;
    }
    else if (totalDist>2000 && totalDist<2501){
        return 25;
    }
    else {return "cannot travel that far";}
    }