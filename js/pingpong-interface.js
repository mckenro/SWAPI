var Starwar = require('./../js/pingpong.js').starwarModule;

var showCharacter = function(named, height, mass, hair_color, skin_color, eye_color, birth_year, gender, home){

    $('#name').text("Heres the character " + named);
    $('#height').text("Height: " + height + " cm");
    $('#mass').text("Mass: " + mass + " Kg");
    $('#hair_color').text("Hair Color: " + hair_color);
    $('#skin_color').text("Skin Color: " + skin_color);
    $('#eye_color').text("Eye Color: " + eye_color);
    $('#birth_year').text("Born: " + birth_year);
    $('#gender').text("Gender: " + gender);
    $('#home').text("Home: " + home);
  };


$(document).ready(function(){
  $('form#nameInput').submit(function(event){
    event.preventDefault();
    var named = $("#goal").val();
    var starwar = new Starwar(name=named, height, mass, hair_color, skin_color, eye_color, birth_year, gender, home);
    starwar.searchByName(named, showCharacter);
});
});
