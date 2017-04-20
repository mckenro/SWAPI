function Starwar(name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, home){
  this.name = name;
  this.height = height;
  this.mass = mass;
  this.hair_color = hair_color;
  this.skin_color = skin_color;
  this.eye_color = eye_color;
  this.birth_year = birth_year;
  this.gender = gender;
  this.home = home;
}
Starwar.prototype.searchByName = function(userName, showCharacter){
      var homeWorldArray = [];
      for (j=1; j<10; j++) {
        $.get('http://swapi.co/api/people/?page=' + [j] ).then(function(response){
        var home = [];
        for(var i = 0; i < 10; i++) {
          if(response.results[i].name == userName) {
          home.push(response.results[i].homeworld);

          var character = new Starwar(response.results[i].name, response.results[i].height, response.results[i].mass, response.results[i].hair_color, response.results[i].skin_color, response.results[i].eye_color, response.results[i].birth_year, response.results[i].gender);
        }
        }
        console.log(home[0]);
        if(home[0] !== null){
          $.get(home[0]).then(function(homey){
            character.home = homey.name;
            homeWorldArray.push(character.home);
            var planet = homeWorldArray[0];

            showCharacter(character.name, character.height, character.mass, character.hair_color, character.skin_color, character.eye_color, character.birth_year, character.gender, planet);
          });

        }

      });
      }
};

exports.starwarModule = Starwar;
