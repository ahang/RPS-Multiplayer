$(document).ready(function() {

    // Initialize Firebase
    var config = {
    apiKey: "AIzaSyAy3oio7aeJt92EEhN7_ogUYU1yEShljOU",
    authDomain: "rps-multiplayer-355e1.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-355e1.firebaseio.com",
    storageBucket: "rps-multiplayer-355e1.appspot.com",
    messagingSenderId: "156084856160"
    };

    firebase.initializeApp(config);

    //Grabbing a ref to the database service
    var database = firebase.database();

    database.ref().on("value", function(snapshot) {

    });





});