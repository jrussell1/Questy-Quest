$(document).ready(function() {

  getStats();

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


var response1 = {
  number: 0,
  description: "Two six-sided die sit on the table, they appear to made of bone. The dice only show the number 1 on two different sides, the other four are blank. There are some odd carvings in a different language which might indicate rules, or they may be insulting you. You can't be too sure.",
  choices: [
    "Pick up the dice",
    "Walk away"
  ],
  responses: [1, 14]
};

var response1_1 = {
  number: 1,
  result: "The dice feel warm in your hands, as if they had recently been held. You feel compelled to roll them...",
  choices: [
    "Roll the dice",
    "Walk away"
  ],
  responses: [2, 14]
};

var response1_1_1 = {
  number: 2,
  result: "Snake eyes! What are the odds? You feel accomplished, but also unfulfilled. Maybe you should roll them again...",
  choices: [
    "Roll the dice again",
    "Walk away"
  ],
  responses: [2, 3]
};

var response1_1_1_1 = {
  number: 3,
  result: "It takes only two steps before you find yourself back at the table. How long have you been here? It doesn't seem to matter so long as you have your dice. Snake eyes! What are the odds? You feel accomplished, but also unfulfilled. Maybe you should roll them again...",
  // responses: [4, 13, 5, 7]
};

var response1_1_1_1_1 = {
  number: 4,
  result: "The bookshelf stands about 2 feet overhead. The books are dusty and old and the smell of pages fills your nostrils. You notice a section in the shelf with some books extended out.",
  choices: [
    "Take down a random book",
    "Examine the extended books",
    "Walk away"
  ],
  responses: [5, 6, 14]
};

var response1_1_1_1_1_1 = {
  number: 5,
  result: "Random quote",
};

var response1_1_1_1_1_1_1 = {
  number: 6,
  result: "Four books strut out from the neatly organized row. When you push one in it slides itself right back to how it was.",
  choices: [
    "Push in the first, third, second, and fourth book",
    "Push in the second, third, fourth, and first book",
    "Push in the second, first, fourth, and third book",
    "Push in the third, fourth, second, and first book",
    "Walk away"
  ],
  responses: [15, 15, 7, 15, 14]
};

var response1_1_1_1_1_1_2 = {
  number: 7,
  result: "The bookshelf opens up to reveal a hidden chamber...",
  choices: [
    "Enter the chamber",
    "Not yet..."
  ],
  responses: [8, 14]
};

var response1_1_1_1_1_1_3 = {
  number: 8,
  result: "Entering chamber",
  reload: function(){
    location.replace("/fightRoom2")
  },
  alert: "Prepare for battle!"
};

var response1_1_1_1_1_3 = {
  number: 9,
  result: "The piano is old and out of tune, some of the keys seem to be stuck down. It's been years since you've played. You only remember one song.",
  choices: [
    "Attempt to fix the broken keys",
    "Play the piano",
    "Walk away"
  ],
  responses: [10, 13, 14]
};

var response1_1_1_1_1_4 = {
  number: 10,
  result: "You manage to unstick all the keys after a few attempts. Good job!",
  choices: [
    "Play the piano",
    "Walk away"
  ],
  responses: [11, 14]
};

var response1_1_1_1_1_4_1 = {
  number: 11,
  result: "It's a bit out of tune, but you slowly manage through the song your mother taught you.",
  choices: [
    "Try again, with confidence",
    "Walk away"
  ],
  responses: [12, 14]
};
var response1_1_1_1_1_4_2 = {
  number: 12,
  result: "You hear a loud click and a compartment near the pedals has opened up to reveal a dagger.",
  choices: [
    "Walk to the table",
    "Walk to the bookshelf",
    "Leave the room"
  ],
  responses: [0, 6, 14],
  update: function(){
    gameState.hasDagger = true
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

var response1_1_1_1_2 = {
  number: 13,
  result: "The song sure would sound better if all the keys were working, but you still fumble through.",
  choices: [
    "Attempt to fix the broken keys",
    "Play the piano",
    "Walk away"
  ],
  responses: [10, 13, 14]
};


var response1_1_1_4 = {
  number: 14,
  reload: function(){
    location.replace("/Room1")
  },
  alert: "You head back",
  update: function(){
    gameState.Room2 = true
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


var response1_1_2 = {
  number: 15,
  result: "That didn't seem to work...",
  choices: [
    "Push in the first, third, second, and fourth book",
    "Push in the second, third, fourth, and first book",
    "Push in the second, first, fourth, and third book",
    "Push in the third, fourth, second, and first book",
    "Walk away"
  ],
  responses: [15, 15, 7, 15, 14]
};

var response1_1_2_1 = {
  number: 16,
  result: "The woman sits down facing the wall ignoring you, maybe you should try again later.",
  reload: function(){
    location.replace("/Room1")
  }
};
var response1_1_2_2 = {
  number: 17,
  result: "If you speak again I will kill you. Hehehe...",
  choices: [
    "'Okay'",
    "Say nothing and walk away."
  ],
  responses: [18, 14]
};

var response1_1_2_2_1 = {
  number: 18,
  result: "The woman walks over to you, she grips you by the throat with her long, cold fingers. My she is strong you think as she effortlessly snaps you neck."
}

var response1_1_4 = {
  number: 19,
  result: "'Ahhhh behind that is a being I do not think about. We've never seen eye to eye. So mean that one, so mean'",
  choices: [
    "'I keep hearing clicking noises when moving the books around. Is it a secret door!?'",
    "'Oh like a monster?'",
    "'On second thought, I need help looking for someone'"
  ],
  responses: [20, 5, 3]
};

var response1_1_4_1 = {
  number: 20,
  result: "Isn't it obvious?",
  choices: [
    "'Well how do I open it?'",
    "'You're right, I'll go fiddle with it some more'",
    "On second thought, I need help looking for someone"
  ],
  responses: [4, 21, 3]
};

var response1_1_4_1_2 = {
  number: 21,
  reload: function(){
    location.replace("/Room2")
  }
};


var responses = [response1, response1_1_1_1_1, response1_1_1_1_1_3, response1_1_1_4];

var room_2 = {
  description: "You come into a room that seems exceedingly out of place given the circumstances. It is well kept, with mood lighting to accentuate the decor. On each wall rests a different object. There is a table with what appears to be a simple dice game, a bookshelf filled with tomes, and a grand piano with no stool.",
  first_options: [
      "Walk over to the table",
      "Walk over to the bookshelf",
      "Walk over to the piano",
      "Leave"
    ],
    responses: [response1, response1_1, response1_1_2_2_1, response1_1_1_4]
};

var responseTree = [
  response1,
  response1_1,
  response1_1_1,
  response1_1_1_1,
  response1_1_1_1_1,
  response1_1_1_1_1_1,
  response1_1_1_1_1_1_1,
  response1_1_1_1_1_1_2,
  response1_1_1_1_1_1_3,
  response1_1_1_1_1_3,
  response1_1_1_1_1_4,
  response1_1_1_1_1_4_1,
  response1_1_1_1_1_4_2,
  response1_1_1_1_2,
  response1_1_1_4,
  response1_1_2,
  response1_1_2_1,
  response1_1_2_2,
  response1_1_2_2_1,
  response1_1_4,
  response1_1_4_1,
  response1_1_4_1_2
];























$("#gameText").text(room_2.description)

for (var i = 0; i < room_2.first_options.length; i++) {
  var but = $("<button>")
  but.addClass("btn btn-link room")
  but.text(room_2.first_options[i])
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
  }
  if (response.update) {
    response.update()
  }
  if (response.reload) {
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
  }
  if (response.reload) {
    alert(response.alert)
    response.reload()
  }
  if (response.update) {
    response.update()
  }
  console.log(response)
})







function getStats(){

  var playerName = sessionStorage.getItem("playerName");
  var type = sessionStorage.getItem("type");
  var hp = sessionStorage.getItem("hp");
  var ap =sessionStorage.getItem("ap");
  
    $(".pName").text(playerName);
    $(".pRace").text(type);
    $(".pHp").text(hp);
    $(".pAp").text(ap);
  }




});
