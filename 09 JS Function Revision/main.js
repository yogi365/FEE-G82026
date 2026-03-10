// (
//     function (a, b) {

//         for (let i = a; i <= b; i++) {
//             console.log(i)
//         }
//     }
// )(20, 30)



function sum(a,b){
    return a+b;
}


// function arithmeticOperations(a,b,operations){
//     return operations(a,b)
// }
// console.log(arithmeticOperations(30,10,
//     (a,b)=>b-a
// ))


// function outer(){
//     var a = 20;
//     return function(b){
//         // var b=20;
//         console.log(a*b);
//     }     
// }
// var c = outer();
// // console.log(a)
// c(20);


// console.log(this)

// function sum(){
//     console.log(this);
// }

// sum();

var students = {
    firstName:"Abc",
    lastName:"Xyz",
    sum:function(){
        var a = ()=>{
            console.log(this)
        }
        a();
    }
}

students.sum();