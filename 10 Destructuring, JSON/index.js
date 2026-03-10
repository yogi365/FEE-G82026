// var student = {
//     firstName:"Abc",
//     lastName:"Singh",
//     age:27,
//     address:{
//         city:"Mumbai"
//     }
// }

// var {firstName, age=12} = student;
// console.log(age)

// var {city} = student.address;
// console.log(city)


// var name="Abc";
// var age = 27;

// var student = {
//     name,
//     age
// }

// console.log(student)


// var arr = [1,2,3];
// var a = arr[0];
// var b = arr[1];
// var c = arr[2];

// console.log(a)

// var [,a,b,c=10] = arr;
// console.log(c)


// var a = "Amit";
// var b = "Raj";
// [a,b] = [b,a];

// console.log(b);


// var student = {
//     firstName:"Abc",
//     lastName:"Singh",
//     age:27,
//     address:{
//         city:"Mumbai"
//     }
// }

// var jsonStudent = JSON.stringify(student);
// console.log(typeof student)
// console.log(typeof jsonStudent)

// var parsedStudent = JSON.parse(jsonStudent);
// console.log(typeof parsedStudent)


var student = {
    firstName:"Abc",
    lastName:"Singh",
    age:27,
    address:{
        city:"Mumbai"
    }
}


// var s = student;

// s.firstName = "Xyz";

// console.log(student)


// var s = {...student};
// s.address.city = "xyz";

// console.log(student)

// var s = JSON.parse(JSON.stringify(student));
// s.address.city="Delhi";
// console.log(s)

// console.log(student);

// var s = structuredClone(student);
// console.log(s)

// var a = Object.assign({},student);

var arr = [1,2,3,4];

var stringify = JSON.stringify(arr);

// console.log(stringify[0])

var parsedArray = JSON.parse(stringify);

console.log(parsedArray[0])
