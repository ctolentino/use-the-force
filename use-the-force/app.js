var oReqPeople = new XMLHttpRequest();

oReqPeople.addEventListener('load', getPeopleData);
oReqPeople.open('GET', 'https://swapi.co/api/people/');
oReqPeople.send();

function getPeopleData(){
    var data = JSON.parse(this.responseText);
    for(var i = 0; i<4; i++){
        var person = document.createElement('ul');
        person.innerHTML = data.results[i].name;
        peopleResult.appendChild(person);

        var height = document.createElement('li');
        height.innerHTML = data.results[i].height;
        peopleResult.appendChild(height);       
    }
    
}