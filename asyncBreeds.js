// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, runThisFunctionWhenDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (!error) return runThisFunctionWhenDone(data);
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

printCatBreed = (breed) => {
console.log(`details for`, breed); // => will NOT print out details, instead we will see undefined!
}

// we try to get the return value
const bombay = breedDetailsFromFile('Bombay', printCatBreed);
