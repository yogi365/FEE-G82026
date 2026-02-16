// function arithmeticOperaiontions(a,b,cb){
//     return cb(a,b)
// }

// function sum(a,b){
//     return a+b;
// }

// arithmeticOperaiontions(2,3,sum);

// const arr = [26, 589, 36, 12, 45, 96]

// function customMap(array,cb) {
//     const newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         newArray.push(cb(array[i],i,array));
//     }
//     return (newArray);
// }

// console.log(customMap(arr,square));
// console.log(customMap(arr,
//     (value)=>value*value*value));

// function square(value, index, array){
//     // console.log(array)
//     return value*value
// }

// console.log(arr.map(square))

// arr.forEach(cb);

// function cb(ele,index,array){
//     console.log(ele)
// }


var students = [
{
    id: 1, name: "Alice Johnson", class: "A"
    },
    {
        id: 2, name: "Bob Smith", class: "B"
    },
    {
        id: 3, name: "Charlie Brown", class: "A"
    },
    {
        id: 4, name: "Diana Prince", class: "C"
    },
    {
        id: 5, name: "Ethan Hunt", class: "B"
    },
    {
        id: 6, name: "Fiona Apple", class: "A"
    },
    {
        id: 7, name: "George Wilson", class: "C"
    },
    {
        id: 8, name: "Hannah Montana", class: "B"
    },
    {
        id: 9, name: "Ian McKellen", class: "A"
    },
    {
        id: 10, name: "Julia Roberts", class: "C"
    },
    {
        id: 11, name: "Kevin Hart", class: "B"
    },
    {
        id: 12, name: "Luna Lovegood", class: "A"
    },
    {
        id: 13, name: "Mason Garcia", class: "C"
    },
    {
        id: 14, name: "Natalie Wood", class: "B"
    },
    {
        id: 15, name: "Oscar Isaac", class: "A"
    },
    {
        id: 16, name: "Piper Perabo", class: "C"
    },
    {
        id: 17, name: "Quinn Fabray", class: "B"
    },
    {
        id: 18, name: "Ryan Gosling", class: "A"
    },
    {
        id: 19, name: "Scarlett Johansson", class: "C"
    },
    {
        id: 20, name: "Tom Cruise", class: "B"
}

]

// const arr = [2,3,6,4,8,5,9,7];

// const newArr = students.find((ele)=>{
//     return ele.id == 15
// }
// );
// console.log(newArr)

// const classC = students.filter((student)=>{
//     return student.class.toLowerCase() == "c"
// }
// )
// console.log(classC)

// const alphabets = ["A","H","M","C","G","B"] 
// alphabets.sort();
// console.log(alphabets)

// const num = [6,2,11,100,12,45,1,78,7]
// num.sort((a,b)=>a-b);
// console.log(num)

// const sum = num.reduce((acc,cur)=>acc+cur);
// console.log(sum)

// num.includes(6);

// console.log(num.indexOf(13));
