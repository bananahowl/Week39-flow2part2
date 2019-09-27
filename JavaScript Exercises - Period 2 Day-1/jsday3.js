
function check(value) {
    return value.includes("a");
}

function myFunction() {
var values = ["dola", "bob", "limoe", "tyva", "dolf", "alex"]
var valuesMaped = values.filter(val => check(val))
//document.getElementById("filter").innerHTML = valuesMaped;
console.log(values)
}
myFunction();