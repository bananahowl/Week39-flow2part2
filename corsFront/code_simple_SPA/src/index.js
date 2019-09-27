import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";

//const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
// http://localhost:8080/jpareststarter/api/Person/all
document.getElementById("assit2").addEventListener("click", function () {
    fetch("http://localhost:8080/jpareststarter/api/Person/all")
        .then(function (data) {
            return data.json();
        })
        .then(function (myGson) {
            document.getElementById("assitThic2").innerHTML = MemberToHTMLTableFormat(myGson);
        })
})

document.getElementById("assit1").addEventListener("click", function () {
    fetch("http://localhost:8080/CORSNHosting/api/person/all")
        .then(function (data) {
            return data.json();
        })
        .then(function (myGson) {
            document.getElementById("assitThic1").innerHTML = MemberToHTMLTable(myGson);
        })
})

document.getElementById("jsLocal1").addEventListener("click", function () {
    fetch("http://localhost:3333/api/users/")
        .then(function (data) {
           // console.log(data)
            return data.json();
        })
        .then(function (myGson) {
            console.log(myGson)
            document.getElementById("jsTable1").innerHTML = jsTableFormat(myGson)
            
        })
})
document.getElementById("north").addEventListener("click", function () {
    var value = "<p>north part</p> "
    document.getElementById("fourLeaf").innerHTML = value;
})
document.getElementById("south").addEventListener("click", function () {
    var value = "<p>south part</p> "
    document.getElementById("fourLeaf").innerHTML = value;
})
document.getElementById("east").addEventListener("click", function () {
    var value = "<p>east part</p> "
    document.getElementById("fourLeaf").innerHTML = value;
})
document.getElementById("west").addEventListener("click", function () {
    var value = "<p>west part</p> "
    document.getElementById("fourLeaf").innerHTML = value;
})

 var jsTableFormat = function(arr) {
    var arrHTML = arr.map(item => "<tr>"
        + "<td>" + item.id + "</td>"
        + "<td>" + item.age + "</td>"
        + "<td>" + item.name + "</td>"
        + "<td>" + item.gender + "</td>"
        + "<td>" + item.email + "</td>"
        + "</tr>");
    var arrStr = arrHTML.join('');
    var result = 
        "<table class=\"table table-striped\"><tr>"
        + "<th width = 10%>ID</th>"
        + "<th width = 10%>Age </th>"
        + "<th width = 10%>Name </th>"
        + "<th width = 10%>Gender </th>"
        + "<th width = 10%>Email</th>"
        + arrStr + "</table>"; //+ "</ul>"//
    return result;
}
function MemberToHTMLTableFormat(arr) {

    var arrHTML = arr.map(item => "<tr>"
        + "<td>" + item.id + "</td>"
        + "<td>" + item.fName + "</td>"
        + "<td>" + item.lName + "</td>"
        + "<td>" + item.phone + "</td>"
        + "</tr>");
    //var arrStr = arrHTML.join('');
    var result =//"<ul>"
        "<table class=\"table table-striped\"><tr>"
        + "<th width = 10%>Name</th>"
        + "<th width = 10%>ID </th>"
        + "<th width = 10%>Email</th>"
        + arrHTML + "</table>"; //+ "</ul>"//
    return result;
}
function MemberToHTMLTable(arr) {

    var arrHTML = arr.map(item => "<tr>"
        + "<td>" + item.name + "</td>"
        + "<td>" + item.id + "</td>"
        + "<td>" + item.email + "</td>"
        + "</tr>");
    var arrStr = arrHTML.join('');
    var result =//"<ul>"
        "<table class=\"table table-striped\"><tr>"
        + "<th width = 10%>Name</th>"
        + "<th width = 10%>ID </th>"
        + "<th width = 10%>Email</th>"
        + arrStr + "</table>"; //+ "</ul>"//
    return result;
}



function MemberToHTMLVal(item) {

    var result = "<ul> "
        + "<li> id:" + item.id + "</li>"
        + "<li> username" + item.name + "</li>"
        + "<li> email :" + item.email + "</li>"
        // gotta figure how to get values from within a array
        + "</ul>";

    return result;
}

