$(document).ready(function() {

  randomPlayer();

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
    }).then(checkGameState)



var response1 = {
  numer: 0,
  result: "You amble forward untill the sound of water increases, until it starts dripping on your heard. This is stickier than water, almost like saliva? The last sound you hear is a rush of hot steam in your ear and then only silence.",
  reload: function(){
    location.replace("/death")
  },
  alert: "You have died!"
};

var response2 = {
  number: 1,
  result: "Oddly enough you find everything you need to make a rudimentary torch. Wow, you're more skilled than you thought!",
  description: "You look around, you see a hallway on every side of you. If you listen carefully you can hear laughter from the east.",
  choices: ["Head North", "Head East", "Head South", "Head West"],
  responses: [2, 3, 4, 5]
};

var response2_1 = {
  number: 2,
  alert: "You head north",
  reload: function(){
    location.replace("/Room2")
  },
  update: function(){
    gameState.Room1 = true;
    gameState.hasTorch = true;

    $.ajax("/api/state", {
      type: "PUT",
      data: gameState
    }).then(
      function() {
        console.log("changed state to", gameState);
      }
    );
  }
};

var response2_2 = {
  number: 3,
  alert: "You head East",
  reload: function(){
    location.replace("/Room3")
  },
  update: function(){
    gameState.Room1 = true;
    gameState.hasTorch = true;
    $.ajax("/api/state", {
      type: "PUT",
      data: gameState
    }).then(
      function() {
        console.log("changed state to", gameState);
      }
    );
  }
};

var response2_3 = {
  number: 4,
  alert: "You head South",
  reload: function(){
    location.replace("/fightRoom1")
  },
  update: function(){
    gameState.Room1 = true;
    gameState.hasTorch = true;
    $.ajax("/api/state", {
      type: "PUT",
      data: gameState
    }).then(
      function() {
        console.log("changed state to", gameState);
      }
    );
  }
};

var response2_4 = {
  number: 5,
  alert: "Under construction",
  reload: function(){
    location.reload()
  },
  update: function(){
    gameState.Room1 = true;
    gameState.hasTorch = true;
    gameState.fightRoom1 = true;
    $.ajax("/api/state", {
      type: "PUT",
      data: gameState
    }).then(
      function() {
        console.log("changed state to", gameState);
      }
    );
  }
};

var response3 = {
  number: 6,
  result: "Nobody, or nothing, replies.",
  choices: ["Try Again", "Feel around the floor for something, anything!"],
  responses: [7, 1]
};

var response3_1 = {
  number: 7,
  result: "Only your echo is with you",
  choices: ["Follow your echo", "Feel around the floor for something, anything!"],
  responses: [8, 1]
};

var response3_1_1 = {
  number: 8,
  update: function(){
    gameState.Room1 = true
    $.ajax("/api/state", {
      type: "PUT",
      data: gameState
    }).then(
      function() {
        console.log("changed state to", gameState);
      }
    );
  },
  reload: function(){
    location.replace("/Room3")
  }
}

var responseTree = [
  response1,
  response2,
  response2_1,
  response2_2,
  response2_3,
  response2_4,
  response3,
  response3_1,
  response3_1_1
]

var room_1 = {}

var responses = []

function checkGameState(){
    if (gameState.Room1 || gameState.hasTorch) {
    room_1 = {
      description: "You look around, you see a hallway on every side of you. If you listen carefully you can hear laughter from the east.",
      first_options: [
        "Head North",
        "Head East",
        "Head South",
        "Head West"
      ]
    };
    responses = [response2_1, response2_2, response2_3, response2_4]
    console.log(gameState.Room1)
    console.log(room_1)
  }
  else {
    room_1 = {
      description: "The light from the cracks in the ceiling is hardly enough to make out your own hands. You hear water dripping everywhere.",
      first_options: ["Continue forward, you fear no darkness!", "Feel around the floor for something, anything!", "Cry out for help"],
    };
    responses = [response1, response2, response3]
    console.log(gameState.Room1)
    console.log(room_1)
  }

  $("#gameText").text(room_1.description);

  for (var i = 0; i < room_1.first_options.length; i++) {
    var but = $("<button>")
    but.addClass("btn btn-link room")
    but.text(room_1.first_options[i])
    but.attr("value", i)
    $("#gameScreen").append(but)
  }

  $(document.body).on("click", ".room", function(){
    $("#gameScreen").empty()
    var position = $(this).attr("value")
    var response = responses[position]
    $("#gameText").empty()
    $("#gameText").text(response.result)
    if (response.description) {
      $("#gameText").append(response.description)
    };
    if (response.choices) {
      for (var i = 0; i < response.choices.length; i++) {
        var but = $("<button>")
        but.addClass("btn btn-link response")
        but.text(response.choices[i])
        but.attr("value", i)
        but.attr("location", response.number)
        $("#gameScreen").append(but)
      }
    };
    if (response.update) {
      response.update()
    };
    if (response.reload) {
      alert(response.alert)
      response.reload()
    }
  })

  $(document.body).on("click", ".response", function(){
    $("#gameScreen").empty()
    var position = $(this).attr("value")
    var location = $(this).attr("location")
    var firstResponse = responseTree[location]
    var secondResponse = firstResponse.responses[position]
    var thirdResponse = responseTree[secondResponse]
    var response = thirdResponse
    $("#gameText").empty()
    if (response.result) {
    $("#gameText").text(response.result)
    }
    if (response.description) {
      $("#gameText").append(response.description)
    }
    if (response.choices) {
      for (var i = 0; i < response.choices.length; i++) {
        var but = $("<button>")
        but.addClass("btn btn-link response")
        but.text(response.choices[i])
        but.attr("value", i)
        but.attr("location", response.number)
        $("#gameScreen").append(but)
      }
    };
    if (response.update) {
      response.update();
    }
    if (response.reload) {
      alert(response.alert)
      response.reload();
    }
    console.log(response)
  })
}


function randomPlayer(){


    $.ajax("/api/player", {
      type: "GET",
    }).then(
      function(data) {
        window.sessionStorage.setItem('playerName', data[0].playerName);
        window.sessionStorage.setItem('ap', data[0].playerAttack);
        window.sessionStorage.setItem('hp', data[0].playerHp);
        window.sessionStorage.setItem('type', data[0].playerType);

        $(".pName").text(data[0].playerName);
        $(".pRace").text(data[0].playerType);
        $(".pHp").text(data[0].playerHp);
        $(".pAp").text(data[0].playerAttack);
      }
    );

   


}



  // $("#gameText").text(room_1.description);
  //
  //
  // for (var i = 0; i < room_1.first_options.length; i++) {
  //   var but = $("<button>")
  //   but.addClass("btn btn-link room")
  //   but.text(room_1.first_options[i])
  //   but.attr("value", i)
  //   $("#gameScreen").append(but)
  // }
  //
  //
  //
  //
  // $(document.body).on("click", ".room", function(){
  //   $("#gameScreen").empty()
  //   var position = $(this).attr("value")
  //   var response = responses[position]
  //   $("#gameText").empty()
  //   $("#gameText").text(response.result)
  //   if (response.description) {
  //     $("#gameText").append(response.description)
  //   };
  //   if (response.choices) {
  //     for (var i = 0; i < response.choices.length; i++) {
  //       var but = $("<button>")
  //       but.addClass("btn btn-link response")
  //       but.text(response.choices[i])
  //       but.attr("value", i)
  //       but.attr("location", response.number)
  //       $("#gameScreen").append(but)
  //     }
  //   };
  //   if (response.update) {
  //     response.update()
  //   };
  //   if (response.reload) {
  //     alert(response.alert)
  //     response.reload()
  //   }
  // })
  //
  // $(document.body).on("click", ".response", function(){
  //   $("#gameScreen").empty()
  //   var position = $(this).attr("value")
  //   var location = $(this).attr("location")
  //   var firstResponse = responseTree[location]
  //   var secondResponse = firstResponse.responses[position]
  //   var thirdResponse = responseTree[secondResponse]
  //   var response = thirdResponse
  //   $("#gameText").empty()
  //   if (response.result) {
  //   $("#gameText").text(response.result)
  //   }
  //   if (response.description) {
  //     $("#gameText").append(response.description)
  //   }
  //   if (response.choices) {
  //     for (var i = 0; i < response.choices.length; i++) {
  //       var but = $("<button>")
  //       but.addClass("btn btn-link response")
  //       but.text(response.choices[i])
  //       but.attr("value", i)
  //       but.attr("location", response.number)
  //       $("#gameScreen").append(but)
  //     }
  //   };
  //   if (response.update) {
  //     response.update()
  //   }
  //   if (response.reload) {
  //     alert(response.alert)
  //     response.reload()
  //   }
  //   console.log(response)
  // })
























});
