

var promise = new Promise((resolve,reject)=>{
    
        
    try{
        name()
        setTimeout(()=>{
        
        
        resolve("hello")
        },5000)
    }catch(e){
        
        reject(e)
    }
    

})



promise.then((value)=>{
    console.log("this was successful value",value)
}).catch((error)=>{
    console.error("error occured",error)
})


console.log("hello")



fetch("https://cataas.com/api/cats?tags=cute")
.then((response)=>{
   return response.json()
})
.then((value)=>{
    console.log(value)
    
})
.catch((error)=>{
    console.error(error)
})