// Code your solution in this file!

const drivers = ["Autona", "Nuru", "Amari", "Mo"];

const returnFirstTwoDrivers = (drivers) =>{
    return drivers.slice(0, 2);

}


const returnLastTwoDrivers = (drivers) =>{
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = function (fare){
    return function (multiplier){
        return multiplier * fare
    }
}

const fareDoubler = createFareMultiplier(2);
    console.log(fareDoubler);

const fareTripler = createFareMultiplier(3);
    console.log(fareTripler);


 const selectDifferentDrivers = function(drivers,array){
    return array(drivers);
 };  