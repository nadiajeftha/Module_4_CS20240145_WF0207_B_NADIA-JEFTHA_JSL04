let userPreference = ''; //'Regular', 'Sugar-free', or undefined
console.log(userPreference === 'Sugar-free' ? 'Sugar-free' : 'Regular'); //if input says 'sugar-free' , prints out 'sugar-free'. if input says nothing or 'regular' , prints out regular.

let cansLeft = 5; // Any number of cans
console.log(cansLeft < 5 ? "TIME TO RESTOCK!" : "WE'RE STOCKED!"); //if there are less than 5 cans left,restock. if 5 and more left,stocked


let heartRate = 100; // Current heart rate in bpm
console.log(heartRate < 100 ? "BOOST NEEDED!" : "ENERGY LEVELS ARE HIGH!"); // if heartrate is under 100,boost needed. if heartrate 100 and + , energy levels too high


let currentTemp = 6; // Current temperature in °C
console.log(currentTemp<= 5 ? "CHILLED TO PERFECTION!" : "NEEDS A COOLER!"); //if temp higher than 5,need to cool. if 5 and lower,no need to cool.


let currentHour = 1; //current time in 24-hr format
console.log(currentHour >=7 && currentHour <24 ? "UNLEASH THE BEAST!" : "BETTER STICK TO WATER.") //if time is between 7am - 12am, drink energy drink. otherwise,drink water.

