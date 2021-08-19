//Game States
//"WIN" - Player robot has defeated all enemy-robots
//      * Fight all enemy-robots
//      * Defeat each enemy-robot
//"LOSE" - Player robot's health is zeroor less
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney= 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
console.log(enemyNames.length);
for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + "is at" + i + "index");
}

var fight = function(enemyName) {
//Alert players that they are starting the round
window.alert("Welcome to Robot Gladiators!");

var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT or 'SKIP' to choose.");
    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") { 
    //Subtract the value of 'playerAttack' from the value of 'enemyHealth and use the result to update the value in the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;
    //Log a resulting message to the console so we know it worked.
    console.log(
        playerName + "attacked" + enemyName + "." + enemyName + "now has" + enemyHealth + "health remaining"
    );
    //Check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + "has died!");
    } 
    else {
        window.alert(enemyName + "still has" + enemyHealth + "health left.");
    }
    //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value 'playerHealth' variable.
    playerHealth = playerHealth - enemyAttack;
    //Log a resulting message to the console so we know it worked.
    console.log(
        enemyName + "attacked" + playerName + "." + playerName + "now has" + playerHealth + "health remaining."
    );
    //Check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + "has died!");
    } 
    else {
        window.alert(playerName + "still has" + playerHealth + "health left."); 
    }
    }else if (promptFight === "skip" || promptFight === "SKIP") {
        //Confirm if player wants to skip
    var confirmSkip= window.confirm("Are you sure you would like to quit?");
    //If yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!")
        //Subtract the money from playerMoney for skipping
        playerMoney = playerMoney -2;
    }
    //If no (false), ask question again by running fight() again
    else {
        fight ();
    }
    }else {
         window.alert("You need to pick a valid option. Try Again!");
    }
  };

for(var i = 0; i < enemyNames.length; i ++) {
    fight(enemyNames[i]);
}