/*
promises is an object
-- created by using new keyword
-- takes a callback function-->mandotory
-- that call back function will have two paramanters
--1) resovle
--2) reject

-- those names also can be like success and error
-- The stages are as follows

** Pending
** fullfilled
** rejected

*/ 

//let p= new Promise() // this will give error since call back function is not given

let p =new Promise(
    (success,error)=>{
        let dataCame=true//false
        if(dataCame){
            // success("fufllfilled")
          success([1,2,3,4]) // you can aslo send array of data
        }
        else
        error("Not fullfilled")
    }
    
)
console.log(p)
// have two methods
// then and catch

//THEN
//------
// then will execute if the first paramater (success in this case)
// got exexuted and returns a value
// then method also takes a call back function
// It will recieve the data that is sent by the success()

// Note:- then function need not be called it can be executed by default


p.then(
    (data)=>{
   console.log(data)// shows the array of data returned by the success() 
    }
)
// CATCH
//----

// it also takes a call back function
// it will execute if error() method executed

p.catch(
    (data)=>{
        console.log(data)
    }
)