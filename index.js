// Code your solution in this file

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function (drivers) {
    return [drivers[0], drivers[1]]
}

const returnLastTwoDrivers = function(array){
 return [array[2],array[3]]
}


const selectingDrivers= [returnFirstTwoDrivers, returnLastTwoDrivers]


 function createFareMultiplier(integer) {
    function calculator(fare){
       return integer*fare
    }
    return calculator
 }


 const fareDoubler= function (fare){

   return createFareMultiplier(2)(fare)

 }

 const fareTripler= function(fare){
   return createFareMultiplier(3)(fare)
 }

 function selectDifferentDrivers(drivers,returnFirstTwoDrivers){
   return returnFirstTwoDrivers(drivers);
 }
 