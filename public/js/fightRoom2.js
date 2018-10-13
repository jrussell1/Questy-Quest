$(document).ready(function() {

  var gameState = {
    Room1: false,
    Room2: false,
    Room3: false,
    fightRoom1: false,
    fightRoom2: false,
    hasTorch: false,
    hasDagger: false,
    hasDust: false
  };

    $.get( "/api/state", function( data ) {
      console.log(data[0]);
      var data = data[0]
      gameState.Room1 = data.Room1;
      gameState.Room2 = data.Room2;
      gameState.Room3 = data.Room3;
      gameState.fightRoom1 = data.fightRoom1;
      gameState.fightRoom2 = data.fightRoom2;
      gameState.hasTorch = data.hasTorch;
      gameState.hasDagger = data.hasDagger;
      gameState.hasDust = data.hasDust;
    })



  // Character object
  var characters = {
    Torch: {
      name: "Torch",
      health: 2,
      attack: 2,
      imageUrl: "/images/torch.jpg",
      enemyAttackBack: 20
    },


    Dagger: {
      name: "Dagger",
      health: 100,
      attack: 14,
      imageUrl: "/images/dagger.png",
      enemyAttackBack: 5
    },
    BirdPerson: {
      name: "BirdPerson",
      health: 100,
      attack: 25,
      imageUrl: "/images/monster2.png",
      enemyAttackBack: 10
    }
  };

  // Selction of character
  var attacker;
  // combatant is BirdPersonin variable
  var combatants = [];
  var defender;
  var turnCounter = 1;
  var killCount = 0;

  // Renders character card to the page.
  // The ch
  var renderCharacter = function(character, renderArea) {
    // This block of code builds the character card, and renders it to the page.
    var charDiv = $("<div class='character' data-name='" + character.name + "'>");
    var charName = $("<div class='character-name'>").text(character.name);
    var charImage = $("<img alt='image' class='character-image'>").attr("src", character.imageUrl);
    var charHealth = $("<div class='character-health'>").text(character.health);
    charDiv.append(charName).append(charImage).append(charHealth);
    $(renderArea).append(charDiv);
  };

  // this function will load all the characters into the character section to be selected
  var initializeGame = function() {
    // Loop through the characters object and call the renderCharacter function on each character to render their card.
    for (var key in characters) {
      if (characters[key].name == "BirdPerson"){
        continue;
      }
    renderCharacter(characters[key], "#characters-section");
    }
  }

  initializeGame();

  // This function handles updating the selected player or the current defender. If there is no selected player/defender this
  // function will also place the character based on the areaRender chosen (e.g. #selected-character or #defender)
  var updateCharacter = function(charObj, areaRender) {
    // First we empty the area so that we can re-render the new object
    $(areaRender).empty();
    renderCharacter(charObj, areaRender);
  };

  // This function will render the available-to-attack enemies. This should be run once after a character has been selected
  var renderEnemies = function(enemyArr) {
    renderCharacter(enemyArr[1], "#available-to-attack-section");
    };

  // Function to handle rendering game messages.
  var renderMessage = function(message) {
    // Builds the message and appends it to the page.
    var gameMessageSet = $("#game-message");
    var newMessage = $("<div>").text(message);
    gameMessageSet.append(newMessage);
  };

  // Function which handles restarting the game after victory or defeat.
  var restartGame = function(resultMessage) {
    // When the 'Restart' button is clicked, reload the page.
    var restart = $("<button>Restart</button>").click(function() {
      location.reload();
    });

    // Build div that will display the victory/defeat message.
    var gameState = $("<div>").text(resultMessage);

    // Render the restart button and victory/defeat message to the page.
    $("body").append(gameState);
    $("body").append(restart);
  };

  // Function to clear the game message section
  var clearMessage = function() {
    var gameMessage = $("#game-message");

    gameMessage.text("");
  };

  // ===================================================================

  // On click event for selecting our character.
  $("#characters-section").on("click", ".character", function() {
    // Saving the clicked character's name.
    var name = $(this).attr("data-name");

    // If a player character has not yet been chosen...
    if (!attacker) {
      // We populate attacker with the selected character's information.
      attacker = characters[name];
      // We then loop through the remaining characters and push them to the combatants array.
      for (var key in characters) {
        if (key !== name) {
          combatants.push(characters[key]);
        }
      }

      // Hide the character select div.
      $("#characters-section").hide();

      // Then render our selected character and our combatants.
      updateCharacter(attacker, "#selected-character");
      renderEnemies(combatants);
    }
  });



  // Creates an on click event for each enemy.
  $("#available-to-attack-section").on("click", ".character", function() {
    // Saving the opponent's name.
    var name = $(this).attr("data-name");

    // If there is no defender, the clicked enemy will become the defender.
    if ($("#defender").children().length === 0) {
      defender = characters[name];
      updateCharacter(defender, "#defender");

      // remove element as it will now be a new defender
      $(this).remove();
      clearMessage();
    }
  });

  // When you click the attack button, run the following game logic...
  $("#attack-button").on("click", function() {
    // If there is a defender, combat will occur.
    if ($("#defender").children().length !== 0) {
      // Creates messages for our attack and our opponents counter attack.
      var attackMessage = "You attacked " + defender.name + " for " + attacker.attack * turnCounter + " damage.";
      var counterAttackMessage = defender.name + " attacked you back for " + defender.enemyAttackBack + " damage.";
      clearMessage();

      // Reduce defender's health by your attack value.
      defender.health -= attacker.attack * turnCounter;

      // If the enemy still has health..
      if (defender.health > 0) {
        // Render the enemy's updated character card.
        updateCharacter(defender, "#defender");

        // Render the combat messages.
        renderMessage(attackMessage);
        renderMessage(counterAttackMessage);

        // Reduce your health by the opponent's attack value.
        attacker.health -= defender.enemyAttackBack;

        // Render the player's updated character card.
        updateCharacter(attacker, "#selected-character");

       // ====================================================================================//

        //REDIRECT LOSE

        // If you have less than zero health the game ends and page redirects to lose page
        if (attacker.health <= 0) {
          clearMessage();
          window.location.replace("/death");

        }
      }
      else {
        // If the enemy has less than zero health they are defeated.
        // Remove your opponent's character card.
        $("#defender").empty();

        var gameStateMessage = "You have defeated " + defender.name + ", you can choose to fight another enemy.";
        renderMessage(gameStateMessage);

        // Increment your kill count.
        killCount++;

      //==================================================================================//
            //REDIRECT WIN//

        // If you win page redirects you to win page
        if (killCount >= 1) {
          clearMessage();
          updateGameState()
          window.location.replace("/victory");
        }
      }
      // Increment turn counter. This is used for determining how much damage the player does.
      turnCounter++;
    }
    else {
      // If there is no defender, render an error message.
      clearMessage();
      renderMessage("No enemy here.");
    }
  });
  function updateGameState(){
    gameState.hasDust = true;
    $.ajax("/api/state", {
      type: "PUT",
      data: gameState
    }).then(
      function() {
        console.log("changed state to", gameState);
      }
    );

}
});


