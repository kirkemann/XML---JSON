let pageCounter = 1;
let filmContainer = document.getElementById("film-info");
let btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    
let wsurl = 'https://raw.githubusercontent.com/kirkemann/XML---JSON/master/film-' + pageCounter + '.json';

fetch(wsurl, {
    method: 'GET'
}).then(function(data) {
    return data.json();
}).then(function(jsondata) {
    renderHTML(jsondata);
}).catch(function(error) {
    console.log("Noget gik galt" + error);  
})



//     let myFilm = new XMLHttpRequest();

// myFilm.open('GET', 'https://raw.githubusercontent.com/kirkemann/XML---JSON/master/film-' + pageCounter + '.json');

// myFilm.onload = function() {
//     if (myFilm.status >= 200 && myFilm.status < 400) {
//         let ourData = JSON.parse(myFilm.responseText);
//         renderHTML(ourData);
//     } else {
//         console.log("We connected to the server, but it returned an error.");
        
//     }

// };

// myFilm.onerror = function() {
//     console.log("Connection error");
// }

// myFilm.send();
pageCounter++;
if (pageCounter > 3) {
    btn.classList.add("hide");
}

});

function renderHTML(data) {
    let htmldata = "";

    for (i = 0; i < data.length; i++) {
        htmldata += "<p>" + data[i].title + " is from " + data[i].year + " made of " + data[i].instructor + " made in " + data[i].country + " and have a censur by " + data[i].censur + " and have a rating at " + data[i].rating + " you have to take a "; 

        for (ii = 0; ii < data[i].foods.drinks.length; ii++) {
            if (ii == 0) {
                htmldata += data[i].foods.drinks[ii];
            } else {
                htmldata += " and " + data[i].foods.drinks[ii];
            }
        }

        htmldata += ' and something to eat '
        for (ii = 0; ii < data[i].foods.snaks.length; ii++) {
            if (ii == 0) {
                htmldata += data[i].foods.snaks[ii];
            } else {
                htmldata += " and " + data[i].foods.snaks[ii];
            }
        }
        

        htmldata += ".</p>";
}    
filmContainer.insertAdjacentHTML('beforeend', htmldata);

}