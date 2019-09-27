// js code side for the assigement for tuesday for week 39
// code for the 1assigment
function check(value, check) {
    return value.includes(check);
}

function myFunction() {
    var values = ["dola", "bob", "limoe", "tyva", "dolf", "alex"]
    var valuesMaped = values.filter(val => check(val, "a"))
    document.getElementById("filter").innerHTML = valuesMaped;
    console.log(values)
}

// code for 2assigment

function flip(str) {
    return str.split("").reverse().join("");
    /* var newStr = "";
     for (var i = str.length - 1; i >= 0; i--) { 
         newStr += str[i]; // or newString = newString + str[i];
     }
     return newStr;*/
    /*
   if (str === "")
       return "";
   else
       return reverseString(str.substr(1)) + str.charAt(0);*/

}

function myFunctionMap() {
    var values = ["dola", "bob", "limoe", "tyva", "dolf", "alex"]
    //var valuesMaped = values.map(val => reverser(val))
    var valuesMaped = values.map(val => flip(val));
    document.getElementById("map").innerHTML = valuesMaped;
    var test = values.reverse();
    console.log(valuesMaped)
}


//var valuesMaped = myFilter(values, reverser);
function upperCase(val) {
    return "fuk thus wuw"
}

function myFilter(myList, callback) {
    let arr = [];

    for (let idx in myList) {
        if (callback(myList[idx])) {
            arr.push(myList[idx]);
        }
    }
    return arr;

}

function myMap(myList, callback) {
    let arr = [];
    for (let ind in myList) {
        arr.push(callback(myList[ind]))
    }
    return arr;
}
//FIGUR THIS BS OUT
function myFunctionPart2a() {
    var values = ["dola", "bob", "limoe", "tyva", "dolf", "alex"]
    valuesFilterd = myFilter(values, e => check(e));
    document.getElementById("part2a").innerHTML = valuesFilterd;
    //var test = values.reverse();
    console.log(valuesFilterd)
}

function flip(str) {
    return str.split("").reverse().join("");
}

function myFunctionPart2b() {
    var values = ["dola", "bob", "limoe", "tyva", "dolf", "alex"]
    valuesMaped = myMap(values, e => flip(e));// cant jsut add (+) a string gotta use  a function
    document.getElementById("part2b").innerHTML = valuesMaped;
    var test = values.reverse();
    console.log(valuesMaped)
}
// assigment 3


Array.prototype.myMaper = function (callback) {
    {
        let arr = [];
        for (let ind in myList) {
            arr.push(callback(myList[ind]))
        }
        return arr;
    }
}

// 
// assigment 4
function add2fool(var1, var2) {
    return var1 + var2;

}
function mapWork(current, index, array) {

    if (array.length - 1 == index) {
        return current;
    }
    console.log(current + array[index])
    return current + array[index + 1];
}

function work4a() {
    var numbers = [1, 3, 5, 10, 11];
    //  var newNumb = mapWork(numbers)
    console.log(numbers.map(mapWork))
}
// assigment 4 part b
function createList() {
    var arr = ["dola", "bob", "limoe", "tyva", "dolf", "alex"];
    var strings = arr.map(val =>
        " <a href=\"\">" + val + "</a> "

    );
    arr.map(val =>
        console.log(val)
    );

    var stringArr = strings.join('');
    var result = "<nav>" + stringArr + "</nav>";
    console.log(arr);
    document.getElementById("part4b").innerHTML = result;
}
function createListProg() {
    var arr = ["dola", "bob", "limoe", "tyva", "dolf", "alex"];
    var strings = arr.map(val =>
        " <a href=\"\">" + val + "</a> "

    );
    arr.map(val =>
        console.log(val)
    );

    var stringArr = strings.join('');
    var result = "<nav>" + stringArr + "</nav>";
    console.log(arr);
    return result;
}

console.log(createListProg())

// assigment 3 (d)


var makeTable = function () {
    var names = [{ name: "Lars", phone: "1234567" }, { name: "Peter", phone: "675843" },
    { name: "Jan", phone: "98547" }, { name: "Bo", phone: "79345" }];
    var val = names.map(val =>
        "<td> <tr> " + val.name + " </tr>" +
        "<tr> " + val.phone + " </tr> </td> <br>"
    );
    var mid = val.join("");
    var restultTable = "<div> <table>  <th> Name </th> <th> Phone </th> " + mid + " </table> </div>"
    //return restultTable;
    console.log(restultTable)
    document.getElementById("part4c").innerHTML = restultTable;
}
// part e 
var makeTableWithval = function (names) {
    
    var val = names.map(val =>
        "<td> <tr> " + val.name + " </tr>" +
        "<tr> " + val.phone + " </tr> </td> <br>"
    );
    var mid = val.join("");
    var restultTable = "<div> <table>  <th> Name </th> <th> Phone </th> " + mid + " </table> </div>"
    //return restultTable;
    console.log(restultTable)
    document.getElementById("part4c").innerHTML = restultTable;
}
document.getElementById("eSearch").addEventListener("click", function () {
    var names = [{ name: "Lars", phone: "1234567" }, { name: "Peter", phone: "675843" },
    { name: "Jan", phone: "98547" }, { name: "Bo", phone: "79345" }];
    var eFilter =names.filter(val => check(val.name,"a"))
    var setup= makeTableWithval(eFilter);
            document.getElementById("eField").innerHTML = MemberToHTMLTableFormat(setup);
        
})
