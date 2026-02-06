// var student = {};
// var stud = new Object(); key->properties


// var student = {
//     firstName:"Anuj",
//     "Last Name":"Kumar",
//     age:26,
//     0:"Zero"
// }

// console.log(student.firstName)
// console.log(student["Last Name"])
// console.log(student[0])

// var std = {
//     firstName:"Anuj",
//     "Last Name":"Kumar",
//     age:26,
//     0:"Zero"
// }


// var std = student;
// console.log(student == std);

// console.log(student.firstName)
// std.firstName = "Amit";
// console.log(student.firstName);


// student.firstName = "Amit";


// student.percentage = 85;

// delete student.age
// const firstName = "Last Name"
// console.log(firstName in student)
// console.log(student)

// const str = `${2+2}`;
// console.log(str)

// for(key in student){
//     // console.log(key+" : "+student[key]);
//     console.log(`${key} : ${student[key]}`)
// }


var student = {
    firstName:"Anuj",
    lastName:"Kumar",
    age:26,
    marks:[85,45,75,96,45],
    address:{
        houseNo:12,
        street:"Something something",
        city:"Panchkula",
        state:"Haryana",
        contact:{
            email:"abc@a.com",
            phone:7894561230
        }
    },
    fullName:function(){
      console.log(this.firstName+ " "+ this.lastName);  
    }
}

// console.log(student.fullName())
// student.fullName();
// console.log(typeof student)

// console.log(student.marks[1])


// const arr = [];
// const arr2 = new Array();

// const arr = [25,15,true, undefined , {name:"abc"},[4,3,5],
//     (a,b)=>a+b
// ]

// console.log(arr[1])
// const obj = arr[4]
// obj.name = "Xyz";
// console.log(arr[4].name)
// arr[1] = "Abc"
// const fun = arr[6];

// console.log(fun(2,8));


// const innerArray = arr[5][2];
// console.log(innerArray);



var arr = [1,2,3,9,7,8,6,2];
// a[100] = "Hello"
// var l= a.push(5,8,9,10,12);
// var l = a.pop();
// a.unshift(5);

// var l = a.splice(a.length,0,16,17,18,19)
// var l = a.length;
// console.log(a)
// console.log(l);

// for(let i=0;i<a.length;i++){
//     console.log(a[i])
// }

// for(a of student){
//     console.log(a);
// }

// for(a in arr){
//     console.log(a);
// }

// for(key in student){
//     console.log(key)
// }


// console.log(typeof arr);

// console.log(Array.isArray(arr))



