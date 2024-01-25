const promiseOne=new Promise(function(resolve,reject){
    setTimeout(function(){
    console.log('Async task complete')
    resolve()
    },1000)
})
promiseOne.then(function(){
    console.log('async task resolved')
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
       if(!error){
      resolve({username: "himani",age:20})}
      else{
        reject("ERROR:something went wrong")
      }
    },1000)
}).then(function(user){
  //whatever u send in resolve its parameter for then 
  return user.username
})
.then(function(username){
    console.log(username)
})
.catch(function(error){
    console.log(error)
})
.finally(function(error){
    console.log()
})

const promiseTwo=new Promise(function(resolve,reject){
    setTimeout(function(){
      let error=true
      if(!error){
      resolve({username: "raja",age:25})}
      else{
        reject("ERROR:JS went wrong")
      }
    },1000)
})
//instead of .then u can use async function
async function consumePromiseTwo(){
    try{
         const response=await promiseTwo
         console.log(response)
    }
    catch(error){
       console.log(error)
    }
}
consumePromiseTwo()