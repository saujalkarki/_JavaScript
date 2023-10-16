"use strict";
/*------------------------------------------------Note Before Starting-----------------------------------
The codes in this file may contain same variable names multiple times
so if you are going through this codes please uncomment any one seection first that is inside the multiple line comments
and comment it down again to view another section 
---------------------------------------------------------------------------------------------------------*/

// The VS code editor setup section-------

/*
// The Smart Thermometer----
const tempRoom = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTemp = (temperature) => {
  let min = temperature[0];
  let max = temperature[0];

  for (let i = 0; i < temperature.length; i++) {
    if (typeof temperature[i] !== "number") continue;
    if (temperature[i] > max) {
      max = temperature[i];
    }
    if (temperature[i] < min) {
      min = temperature[i];
    }
  }

  return [max, min, max - min];
};

console.log(calcTemp(tempRoom));

function tempAmp(tempMax, tempMin) {
  let Amplitude = tempMax - tempMin;
  return Amplitude;
}

const result = `The temperature Amplitude of the room within the 24 hrs of time is ${tempAmp(
  calcTemp(tempRoom)[0],
  calcTemp(tempRoom)[1]
)}`;

console.log(result);
*/

/*
// The Debugging Part----
const measureKelvin = function () {
  const measurement = {
    type: "temperature",
    unit: "celsius",
    value: prompt("Degrees Celsius:"),
  };

  console.log(measurement);
  // console.table(measurement);--Shows the objects keys and values in table.
  console.log(measurement.value);
  console.log(typeof measurement.value);
  // console.warn(measurement.value);--Shows the value as a warning.
  // console.error(measurement.value);--Shows the value as a error.

  const tempInCelsius = Number(measurement.value);
  console.log(tempInCelsius);
  console.log(typeof tempInCelsius);

  const kelvin = tempInCelsius + 273;

  return kelvin;
};

console.log(measureKelvin());
*/

/*---------------------------------------------Coding Challange 1-----------------------------------------
const temp1 = [];
const temp2 = [];

for (let i = 0; i < 3; i++) {
  temp1[i] = prompt(`Enter the temperature of the room in day ${i + 1}.`);
}

for (let j = 0; j < 5; j++) {
  temp2[j] = prompt(`Enter the temperature of the room in day ${j + 1}.`);
}

console.log(temp1);
console.log(temp2);

let str = ``;
function printForecast(arr) {
  for (let k = 0; k < arr.length; k++) {
    str += `${arr[k]}ºC in ${arr.indexOf(arr[k]) + 1} day.....`;
  }
  console.log(str);
}

printForecast(temp1);
printForecast(temp2);

// Only one can be printed at a time.....
----------------------------------------------------------------------------------------------------------*/
