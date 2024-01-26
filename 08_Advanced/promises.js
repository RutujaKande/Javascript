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

const promiseThree=new Promise(function(resolve,reject){
  setTimeout(function(){
    let error=false
    if(!error){
    resolve({username: "raja",age:25})}
    else{
      reject("ERROR:JS went wrong")
    }
  },1000)
})

async function getData(){
  try{
   const response=await fetch('https://api.github.com/')
   console.log(response)
   const data=await response.json()
   console.log('Hii')
   console.log(data)
  }catch(error){
    console.log(error)
  }
}
//getData()

fetch('https://api.github.com/')
.then((respsonse)=>{
   return respsonse.json()
})
//here no need to await &all as every then happens when prev one finish working
.then((respsonse)=>{
  
   console.log(respsonse)
})
.catch((error)=>{
  console.log(error)
})