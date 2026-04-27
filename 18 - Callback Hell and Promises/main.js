// function login(email,pass,callback){
//     setTimeout(()=>{
//         console.log("Login Successfull")
//         callback({userId:"1"})
//     },1000)
// }

// function userDetails(userId,callback){
//     setTimeout(()=>{
//         console.log("User Detail fetched");
//         callback({email:"abc@gmail.com"})
//     },1000)
// }

// function orderDetail(userDetail,callback){
//     setTimeout(()=>{
//         callback(["order1","order2"])
//     },1000)
// }


// login("a@gmail.com","b",(user)=>{
//     userDetails(user.userId,(userDetail)=>{
//         orderDetail(userDetail.email,(order)=>{
//             console.log(order);
//         })
//     })
// })

// var a = 1;
// const myPromise = new Promise((resolve,reject)=>{
//     if(a%2==0) resolve("It is an even number");
//     else reject("Number is odd");
// });
// // console.log(myPromise);

// myPromise.then(
//     (message)=>{console.log(message)}    
// ).catch((err)=>{console.log(err)})



function evenFinder(number) {
    return new Promise(
        (resolve, reject) => {
            if (number % 2 == 0) resolve("It is an even number");
            else reject("Number is odd");
        }
    );
}


evenFinder(10).then(
    (message)=>{console.log(message)}    
).catch((err)=>{console.log(err)})
