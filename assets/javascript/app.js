$(document).ready(function() {

    var maxPlayers = 2;
    var playerOne = false;
    var playerTwo = false;

    function getPlayerOne() {
    	return playerOne;
    }

    function setPlayerOne(val) {
    	playerOne = val;
    }

    function getPlayerTwo() {
    	return playerTwo;
    }

    function setPlayerTwo(val) {
    	playerOne = val;
    }

    // Initialize Firebase
    var config = {
	    apiKey: "AIzaSyAy3oio7aeJt92EEhN7_ogUYU1yEShljOU",
	    authDomain: "rps-multiplayer-355e1.firebaseapp.com",
	    databaseURL: "https://rps-multiplayer-355e1.firebaseio.com",
	    storageBucket: "rps-multiplayer-355e1.appspot.com",
	    messagingSenderId: "156084856160"
    };

    firebase.initializeApp(config);

    var database = firebase.database();

    $(".add-player-btn").on("click", function(event) {
        
        event.preventDefault();
        
        console.log(getPlayerOne());
		
		if (getPlayerOne() === false) { 
			console.log('playerOne is: ' + getPlayerOne());
	        var playerName = $(".name-input").val().trim();
	        
	        var playerOne = {
	            name: playerName
	        };
		
			database.ref().push(playerOne);
	        console.log("Successfully add newPlayer");

	        $("name-input").val("");

	        setPlayerOne(true)

      	} else if (setPlayerOne() === true && getPlayerTwo() === false) {
      		console.log('playerOne is: ' + getPlayerTwo + ', playerTwo is: ' + getPlayerTwo);
	        var playerName = $(".name-input").val().trim();
	        
	        var playerTwo = {
	            name: playerName
	        };
		
			database.ref().push(playerTwo);
	        console.log("Successfully add newPlayer");

	        $("name-input").val("");

	        setPlayerTwo(true)

      	} else {
      		console.log("Start the FUCKING game!")
      	}

    });





});