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
    }).then(checkGameState)



var response1 = {
  number: 0,
  description: "The woman doesn't stop.",
  choices: [
    "Try to introduce yourself",
    "'I need help looking for someone'",
    "Throw a rock at the woman",
    "Back away slowly"
  ],
  responses: [1, 3, 18, 14]
};

// var response1_1 = {
//   number: 1,
//   result: "You say hello and the woman stops, she meets your eyes for a brief period before uttering some things under her breath",
//   description: "'I don't need what you have, if that's what you're thinking. I got others too down here, they're nice.'",
//   choices: [
//     "'I'm sorry...?'",
//     "'Well I'm happy you have friends!'",
//     "'Okay you're officially strange'",
//     "'What's up with that weird bookshelf?'"
//   ],
//   responses: [2, 15, 17, 19]
// };

var response1_1 = {}

var response1_1_1 = {
  number: 2,
  result: "'Oh you know. The talk is always in the air. They say. Do I have what you need?'",
  choices: [
    "'I'm looking for someone'",
    "'I'm looking for a fight'",
    "'I came here for you'",
    "'I should probably be leaving...'"
  ],
  responses: [4, 5, 4, 14]
};

var response1_1_1_1 = {
  number: 3,
  result: "'Ah yes! The quest is the reward. Journey awaits. Hehehe. You're looking for the newcomer then?'",
  choices: [
    "'I hope so, do you know where I can find them?'",
    "'How new are we talking?'",
    "'Actually I'm looking for a fight'",
    "Walk away"
  ],
  responses: [4, 13, 5, 14]
};

// var response1_1_1_1_1 = {
//   number: 4,
//   result: "'Now nothing comes good in life for free. Do you have what I need then, eh? I don't smell it on ya.'",
//   choices: [
//     "'I don't have anything on me, what do you need?",
//     "'I have this sword...?'",
//     "'Sorry, haven't bathed in a while'",
//     "'I have this strange dust'"
//   ],
//   responses: [5, 5, 9, 10]
// };

var response1_1_1_1_1 = {}

var response1_1_1_1_1_1 = {
  number: 5,
  result: "'I want dust. Not want. I need dust. A monster, I hate him. If you give me dust, I can help.'",
  choices: [
    "'A Monster? Can you be more specific'",
    "'I'll try'",
    "'No way. I'm in no position to fight!'",
    "Walk away"
  ],
  responses: [6, 14, 8, 14]
};

var response1_1_1_1_1_1_1 = {
  number: 6,
  alert: "He is before the begining. He waits angrily",
  reload: function(){
    location.replace("/Room1")
  },
  update: function(){
    gameState.Room3 = true;
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
var response1_1_1_1_1_1_2 = {
  number: 7,
  reload: function(){
    location.reload()
  }
};
var response1_1_1_1_1_1_3 = {
  number: 8,
  alert: "'Then you will get nowhere in life, or death!'",
  reload: function(){
    location.replace("/Room1")
  }
};

var response1_1_1_1_1_3 = {
  number: 9,
  result: "'Nonsense, that is the best scent! Me Neither hehehehehe'",
  description: "'I want dust. Not want. I need dust. A monster, I hate him. If you give me dust, I can help.'",
  choices: [
    "'A Monster? Can you be more specific'",
    "'I'll try'",
    "'No way. I'm in no position to fight!'",
    "Walk away"
  ],
  responses: [6, 6, 8, 14]
};

var response1_1_1_1_1_4 = {
  number: 10,
  result: "'YES! YES! This is what I always wanted! Oh thank you thank you, now I can sleep for nights'",
  choices: [
    "'Right okay, can you help me now?'",
    "'What are you going to do with that?!'",
    "'I should be going...'"
  ],
  responses: [11, 12, 11]
};

var response1_1_1_1_1_4_1 = {
  number: 11,
  result: "'Mmm. The second book is good, the first is better. I like the fourth the most though, although people don't appreciate the third enough.'",
  description: "Unsure what that means, you wait for more. But the woman has drifted off to a deep sleep.",
  choices: ["Leave"],
  responses: [14],
  update: function(){
    gameState.Room3 = true;
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
var response1_1_1_1_1_4_2 = {
  number: 12,
  result: "'Sleep! I'm going to sleep! It's been whatever months of years I suppose now. I need dreams again. Collect thoughts'",
  choices: [
    "'Right okay, can you help me now?'"
  ],
  responses: [11]
};

var response1_1_1_1_2 = {
  number: 13,
  result: "'Who can tell time anymore. Time is just the space between thoughts. But if you must know, five nights. Hehe!'",
  description: "'Ah yes! The quest is the reward. Journey awaits. Hehehe. You're looking for the newcomer then?'",
  choices: [
    "'I hope so, do you know where I can find them?'",
    "'How new are we talking?'",
    "'Actually I'm looking for a fight'",
    "Walk away"
  ],
  responses: [4, 13, 5, 7]
};


var response1_1_1_4 = {
  number: 14,
  reload: function(){
    location.replace("/Room1")
  },
  alert: "You leave the room",
  update: function(){
    gameState.Room3 = true;
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
  result: "'Why would you lie to me, I know you wish I was alone forever!'",
  choices: [
    "'No I was being sincere!'",
    "'You're right, I think you're weird'",
    "'I'm just hoping you're friends with my friend!'"
  ],
  responses: [16, 17, 3]
};

var response1_1_2_1 = {
  number: 16,
  result: "The woman sits down facing the wall ignoring you, maybe you should try again later.",
  reload: function(){
    location.replace("/Room1")
  },
  alert: "You decide to leave",
  update: function(){
    gameState.Room3 = true;
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
  result: "The woman walks over to you, she grips you by the throat with her long, cold fingers. My she is strong you think as she effortlessly snaps you neck.",
  reload: function(){
    location.replace("/death")
  },
  alert: "The woman walks over to you, she grips you by the throat with her long, cold fingers. My she is strong you think as she effortlessly snaps you neck."
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
  },
  alert: "You head back to the bookshelf"
};


// var responses = [response1, response1_1, response1_1_2_2_1, response1_1_1_4];
//
// var room_3 = {
//   description: "The room is sparse with no decoration, you see a cauldron bubbling over with some strange liquid along with a woman dancing around manically.",
//   first_options: [
//       "Stand in silence and wait this out",
//       "Say Hello",
//       "Throw a rock at the woman",
//       "Walk away"
//     ],
//     responses: [response1, response1_1, response1_1_2_2_1, response1_1_1_4]
// };

// var responseTree = [
//   response1,
//   response1_1,
//   response1_1_1,
//   response1_1_1_1,
//   response1_1_1_1_1,
//   response1_1_1_1_1_1,
//   response1_1_1_1_1_1_1,
//   response1_1_1_1_1_1_2,
//   response1_1_1_1_1_1_3,
//   response1_1_1_1_1_3,
//   response1_1_1_1_1_4,
//   response1_1_1_1_1_4_1,
//   response1_1_1_1_1_4_2,
//   response1_1_1_1_2,
//   response1_1_1_4,
//   response1_1_2,
//   response1_1_2_1,
//   response1_1_2_2,
//   response1_1_2_2_1,
//   response1_1_4,
//   response1_1_4_1,
//   response1_1_4_1_2
// ];




















function checkGameState(){
  if (gameState.Room2) {
    response1_1 = {
      number: 1,
      result: "You say hello and the woman stops, she meets your eyes for a brief period before uttering some things under her breath",
      description: "'I don't need what you have, if that's what you're thinking. I got others too down here, they're nice.'",
      choices: [
        "'I'm sorry...?'",
        "'Well I'm happy you have friends!'",
        "'Okay you're officially strange'",
        "'What's up with that weird bookshelf?'"
      ],
      responses: [2, 15, 17, 19]
    };
  }
  else {
    response1_1 = {
      number: 1,
      result: "You say hello and the woman stops, she meets your eyes for a brief period before uttering some things under her breath",
      description: "'I don't need what you have, if that's what you're thinking. I got others too down here, they're nice.'",
      choices: [
        "'I'm sorry...?'",
        "'Well I'm happy you have friends!'",
        "'Okay you're officially strange'",
      ],
      responses: [2, 15, 17]
    };
  }
  if (gameState.hasDust) {
    response1_1_1_1_1 = {
      number: 4,
      result: "'Now nothing comes good in life for free. Do you have what I need then, eh? I don't smell it on ya.'",
      choices: [
        "'I don't have anything on me, what do you need?",
        "'I have this sword...?'",
        "'Sorry, haven't bathed in a while'",
        "'I have this strange dust'"
      ],
      responses: [5, 5, 9, 10]
    };
  }
  else {
    response1_1_1_1_1 = {
      number: 4,
      result: "'Now nothing comes good in life for free. Do you have what I need then, eh? I don't smell it on ya.'",
      choices: [
        "'I don't have anything on me, what do you need?",
        "'I have this sword...?'",
        "'Sorry, haven't bathed in a while'",
      ],
      responses: [5, 5, 9]
    };
  }

  var responses = [response1, response1_1, response1_1_2_2_1, response1_1_1_4];

  var room_3 = {
    description: "The room is littered with beakers and measuring glasses. Standing by the table you see a white-haired woman laughing manically as she pours fluids from one conatiner to the next...",
    first_options: [
        "Stand in silence and wait this out",
        "Say Hello",
        "Throw a rock at the woman",
        "Walk away"
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

console.log(response1_1)
$("#gameText").text(room_3.description)

for (var i = 0; i < room_3.first_options.length; i++) {
  var but = $("<button>")
  but.addClass("btn btn-link room")
  but.text(room_3.first_options[i])
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
  };
  if (response.reload) {
    alert(response.alert)
    response.reload()
  };
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
    response.update()
  };
  if (response.reload) {
    alert(response.alert)
    response.reload()
  };
  console.log(response)
})

}





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
