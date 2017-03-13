$(document).ready(function() {

    var maxPlayers = 2;

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

        var playerName = $(".name-input").val().trim();
        if ()

        var newPlayer = {
            name: playerName
        };

        database.ref().push(newPlayer);
        console.log("Successfully add newPlayer");

        $("name-input").val("");
    });





});