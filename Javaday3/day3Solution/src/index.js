import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";
/*
const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
document.getElementById("jokes").innerHTML = allJokes.join("");

function findJokeId(){
    
    var jokeid = document.getElementById("idVal");
    if(jokeid == null){
        console.log("error bs");

    }
    const jokeVal = jokes.getJokeById(jokeid);
    
    document.getElementById("jokeValue").innerHTML =  "<tr>" + jokeval +"</tr>";
    console.log(jokeVal)
}

document.getElementById("jokeSearch").onclick = findJokeId();*/

document.getElementById("ass2").addEventListener("click", function () {
    document.getElementById("val2").innerHTML = "dolf fordi jeg kan"
})

document.getElementById("ass2").addEventListener("click", function () {
    fetch("https://studypoints.info/jokes/api/jokes/period/hour")
    .then(res => res.json())
    .then(data => document.getElementById("val3").innerHTML =" "+ JSON.stringify(data.joke) + "")

})
/* 
 for Js event handling
Do this as background for one of the Exam Preparation Exercises for this Friday
Download the file: fourHearts.svg, and copy the content into the clipboard.
Either create a new SPA project or (suggested)  just paste the content into the body of your existing project.
Add the necessary event handlers, so when pressing each of the “hearts”, it will write the  message North, South, East or West respectively.
*/




