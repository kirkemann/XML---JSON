let pageCounter = 1;
let filmContainer = document.getElementById("film-info");
let btn = document.getElementById("btn");

btn.addEventListener("click", function() { 

    let myFilm = new XMLHttpRequest();

myFilm.open('GET', 'https://raw.githubusercontent.com/kirkemann/XML---JSON/master/film.json');

myFilm.onload = function() {
    let ourData = JSON.parse(myFilm.responseText);
    renderHTML(ourData);
};

myFilm.send();

});

function renderHTML(data) {
    let htmldata = "";

    for (i = 0; i < data.length; i++) {
        htmldata += "<p>" + data[i].title + " is from " + data[i].year + " made of " + data[i].instructor + " made in " + data[i].country + " and have a censur by " + data[i].censur + " and have a rating at " + data[i].rating + ".</p>"; 

    filmContainer.insertAdjacentHTML('beforeend', htmldata);

}
}