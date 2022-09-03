const { fetchISSFlyOverTimes } = require('./iss');

const exampleCoords = { latitude: '45.8982631', longitude: '-77.2828772' };

fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned flyover times:' , passTimes);
});




















// const { nextISSTimesForMyLocation } = require('./iss');

// nextISSTimesForMyLocation((error, passTimes) => {
//   if (error) {
//     return console.log("It didn't work!", error);
//   }
//   // success, print out the deets!
//   console.log(passTimes);
// });




// const { fetchMyIP } = require("./iss");
// const { fetchCoordsByIP } = require("./iss");

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("It worked! Returned IP:", ip);
// });

// fetchCoordsByIP("24.235.229.192", (error, coordinates) => {
//   if (error) {
//     console.log("Error: ", error);
//     return;
//   }
//   console.log(("Success: ", coordinates));
// });
