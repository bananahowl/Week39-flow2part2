// assigment 5 
// part a

var all = ["Lars", "Peter", "Jan", "Bo"];
var allString = all.join(", # ");
console.log(allString)

// part b
var numbers = [2, 3, 67, 33];
var nReduce = numbers.reduce(function (acc, curt) {
    return acc + curt;
})
console.log(nReduce)

// part c
var members = [
    { name: "Peter", age: 18 },
    { name: "Jan", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Martin", age: 22 }]

var averageAge = members.reduce(function(accu, member, indx, memberArr){
 var total  = accu +  memberArr[indx].age;
return total //total / members.length;
})
console.log(averageAge)

/* function check(value) {
    return value.includes("a");
}

function myFunction() {
var values = ["dola", "bob", "limoe", "tyva", "dolf", "alex"]
var valuesMaped = values.filter(val => check(val))
//document.getElementById("filter").innerHTML = valuesMaped;
console.log(values)
}
myFunction(); */