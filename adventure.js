const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
const hasSword = true;
const hasCompass = false;

console.log("You wake up in a dark forest.");
console.log("You see two paths: one leads to the mountains, the other to the village.");

const choice = readline.question("Do you go to the 'mountains' or the 'village'? ");

if (choice === "mountains") {
  console.log("You head toward the mountains...");

  if (hasTorch && hasSword) {
    console.log("With your torch and sword, you fight off creatures and reach the summit safely.");
  } else if (hasTorch && !hasSword) {
    console.log("You can see, but without a weapon, you're forced to retreat.");
  } else if (!hasTorch) {
    console.log("It's too dark! You fall and must turn back.");
  }

} else if (choice === "village") {
  console.log("You walk toward the village...");

  if (hasMap || hasCompass) {
    console.log("Using your navigation tools, you easily find the village.");

    const villageChoice = readline.question("Do you enter the 'inn' or visit the 'market'? ");

    if (villageChoice === "inn" && hasSword) {
      console.log("You rest safely at the inn and protect yourself from thieves.");
    } else if (villageChoice === "inn" && !hasSword) {
      console.log("Without protection, you get robbed while sleeping!");
    } else if (villageChoice === "market") {
      console.log("You explore the market and find useful supplies.");
    } else {
      console.log("You wander around the village confused.");
    }

  } else {
    console.log("You get lost on the way to the village.");
  }

} else {
  console.log("You stand still and eventually get lost in the forest.");
}