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



// function evenFinder(number) {
//     return new Promise(
//         (resolve, reject) => {
//             if (number % 2 == 0) resolve("It is an even number");
//             else reject("Number is odd");
//         }
//     );
// }


// evenFinder(10).then(
//     (message)=>{console.log(message)}    
// ).catch((err)=>{console.log(err)})



function login(email,pass){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        console.log("Login Successfull")
        resolve({userId:"1"})
    },1000)
    })
}

function userDetails(userId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        // console.log("User Detail fetched");
        resolve({email:"abc@gmail.com"})
    },1000)
    })
}

function orderDetail(userDetail){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve(["order1","order2"])
    },1000)
    })
}

// console.log(login("abc@gmail.com","pass"))
login("abc@gmail.com","pass")
.then((user)=>{
    // console.log("Login successfull")
    return userDetails(user.userId)
}).then((userDetails)=>{
    return orderDetail(userDetails)
})
.then((orders)=>{
    console.log(orders)
})

