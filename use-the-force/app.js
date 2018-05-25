console.log('sanitycheck');

function getData(){
    var data = JSON.parse(this.responseText);
    console.log(data);
        name0.innerHTML = data.results[0].name;
        height0.innerHTML = data.results[0].height;
        mass0.innerHTML = data.results[0].mass;
        birthyear0.innerHTML = data.results[0].birth_year;
        gender0.innerHTML = data.results[0].gender;

        name1.innerHTML = data.results[4].name;
        height1.innerHTML = data.results[4].height;
        mass1.innerHTML = data.results[4].mass;
        birthyear1.innerHTML = data.results[4].birth_year;
        gender1.innerHTML = data.results[4].gender;

        name2.innerHTML = data.results[3].name;
        height2.innerHTML = data.results[3].height;
        mass2.innerHTML = data.results[3].mass;
        birthyear2.innerHTML = data.results[3].birth_year;
        gender2.innerHTML = data.results[3].gender;
    }

var reqPeople = new XMLHttpRequest();

reqPeople.addEventListener('load', getData);
reqPeople.open('GET', 'https://swapi.co/api/people');
reqPeople.send();

//Planets
function getPlanetData(){
    var planetData = JSON.parse(this.responseText);
    console.log(planetData);

    var printPlanet = document.getElementById('planetsResult');

   for(var i = 0; i<planetData.results.length; i++){
        console.log(planetData);
        var planet = document.createElement('ul');
        planet.innerHTML = planetData.results[i].name;
        planetsResult.appendChild(planet);
    }
}

var reqPlanet = new XMLHttpRequest();

reqPlanet.addEventListener('load', getPlanetData);
reqPlanet.open('GET', 'https://swapi.co/api/planets');
reqPlanet.send();

//Films
function getFilmData(){
    var filmData = JSON.parse(this.responseText);
    console.log(filmData);

    var printFilm = document.getElementById('filmsResult');

    for(var i = 0; i<filmData.results.length; i++){
        console.log(filmData.results[i].title, filmData.results[i].episode_id, filmData.results[i].director);
        var film = document.createElement('ul');
        film.innerHTML = filmData.results[i].title;
        filmsResult.appendChild(film);

        var filmEp = document.createElement('li');
        filmEp.innerHTML = filmData.results[i].episode_id;
        filmsResult.appendChild(filmEp);     
        
        var filmDir = document.createElement('li');
        filmDir.innerHTML = filmData.results[i].director;
        filmsResult.appendChild(filmDir);     
    }
}

var reqFilms = new XMLHttpRequest();

reqFilms.addEventListener('load', getFilmData);
reqFilms.open('GET', 'https://swapi.co/api/films');
reqFilms.send();