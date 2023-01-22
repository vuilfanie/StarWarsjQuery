$(document).ready(function() {
    $('#generate-button').click(function() {
      $.get('https://akabab.github.io/starwars-api/api/all.json', function(data) {
        const character = data[Math.floor(Math.random() * data.length)];
        const characterHTML = `<p><strong>Name:</strong> ${character.name}</p>
                               <p><strong>Gender:</strong> ${character.gender}</p>
                               <p><strong>Homeworld:</strong> ${character.homeworld}</p>
                               <p><strong>Species:</strong> ${character.species}</p>
                               <img src="${character.image}" alt="Character Image">`;
        $('#character-container').html(characterHTML);
      });
    });
  });