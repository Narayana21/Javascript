// Values and Variabel:
// Data types: Refers to diff types of data:Numbers,strings,boolean(true false)

//console.log(123)
//console.log("Hello World")

//Variabels:let,const and var

// let first_name="sanju"
// var age =21
// const country ="India"
// console.log(first_name)
// console.log(age)
// console.log(country)
//  ,              
// block scope and function scope: var=func scope and const and let =block scoped
// function hello(){
//     if(true){
//         var a="var"
//         let b="let"
//         const c="const"
//         console.log(a)
//         console.log(b)
//         console.log(c)
//     }
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// hello()
// const a=12
// a=13
// Naming restrictions:
//1.special characters not allowed except $ and _
//2.can not start with the number
//3.case sensitive
//4.camel case
//5.descriptive
//a%b^=112
//first name=12
// let abc =123
// console.log(ABC)
// console.log(abc)
// let xyz ="sanju"
// let firstName ="sanju"
// console.log(typeof "xyz")
// console.log(typeof 123)
// let x = "23"
// let y = Number(x)
// console.log(y,typeof y)
// let x = 23
// let y = string(x)
// console.log(y,typeof y)
// let x=32
// console.log(x,typeof x)
// console.log("23"/2)
// console.log("23"-"11"+3)
// truthy and falsy values : 0 "" undefined null NaN
// console.log(Boolean(0)) #false
// console.log(Boolean(3)) #true
// console.log(Boolean("xyz")) #true
// console.log(Number("abc"))
 
// conditions:
// let a = 23
// let b = 45
// console.log(a+b)
// if(condition){
//     // block of code
// }else{
//     // block of code
// }
// if(true){
//     console.log("in if")
// }else{
//     console.log("in else")
// }
// if(false){
//     console.log("in if")
// }else{
//     console.log("in else")
// }
// if("xyz"){
//     console.log("in if")
// }else{
//     console.log("in else")
// }
// if(1000){
//     console.log("in if")
// }else{
//     console.log("in else")
// }
// if(0){
//     console.log("in if")
// }else{
//     console.log("in else")
// }
// operators:
// 1.arithmetic operator + - * / ** % 
// console.log(2 ** 5)
// console.log(5%2)
// 2.comparison operators:return a boolean value :> < >= <= == != == v/s ===
// console.log(1==1)
// console.log(2==3)
// console.log(2===2)
// console.log(2!=3)
// 3.logical operator: return boolean value, && || !
// 23 + 3 -2
//&& - true only if all the inputs are true
// console.log(true && true && true)//true
// console.log(true && false && true)//false
// || - false if all the inputs are false:
// console.log(true || false || false)
// !
// console.log(!true)
// console.log(!false)

//true if the number stored in a variable is even:
// let num =123
// console.log(num%2 == 0)

// a and b,print true if a is storing a greater value,false if b is storing greater value
// let a=12
// let b=5
// console.log(a>b)

//  age is greater than 18 print true other wise print false:
// let age = 18
// console.log(age>=18)
// let a=12
// let b=11
// let c=14
// console.log(a>b && a>c)
// let age=19
// if(age>=18){
//     console.log("you are eligible for voting")
// }else{
//     console.log("you are not eligible for voting")
// }

// let a=19
// let b=17
// let c=33
// if(a>b && a>c){
//     console.log(a)
// }else if(b>a && b>c) {
//     console.log(b)
// }else{
//     console.log(c)
// }

// string templates:
// let first_name = "Sanju"
// let country ="India"
// console.log("My name is " +first_name+ " I am stay in " +country+".")
// console.log("My name is ${first_name}. I stay in ${country}.")

// ternary operators:
// let age=78
// let is_eligible = age>18 ? "eligible" : "not eligible"
// console.log(is_eligible)

// functions: store a block of code

// var first_name = "sanju"
// console.log(first_name)
// define a function
// function variable(){
//     let a=1
//     let b=2
//     console.log(a+b)
// }
// // call the function
// variable()
// console.log("hi")
// console.log("2+1")
// variable()
// console.log("----")
// arguments and parameters
// function user(a,b){
//     console.log(a+b)
// }
// user(1,2)
// user(1,0)


// function fruitprocessor(num_a,num_o){
//     console.log('Fruit juice containing ${`num_a`} apples and ${`num_O`} oranges.')
// }
// fruitprocessor(78,93)


// let a=7
// let b=2
// let c=3
// function cal_sum(){
//     let res = a+b+c
//     return res
// }
// console.log(cal_sum())


// function cal_sum(){
//     let a=7
//     let b=2
//     let c=3
//     let res = a+b+c
//     return res
// }
// console.log(cal_sum())


// function cal_sum(){
//     let a=7
//     let b=2
//     let c=3
//     let res = a+b+c
//     return res
// }
// a=cal_sum()
// console.log("The result of given sum is",a)

// function cal_age(birthyear){
//     return 2023-birthyear
// }
// const cal_age2=function(birthyear){
//     return 2023-birthyear
// }
// console.log(cal_age(2001))
// console.log(cal_age2(2001))

//arrow:
// const cal_age_arrow = birthyear => 2023-birthyear
// console.log(cal_age_arrow(2001))

// multiline arrow functions:
// const yearUntilRetire = (birthyear,f_name) => {
//     const age=2023-birthyear
//     const retirement =65-age
//     return `${f_name} retires in ${retirement} years.`
// }
// console.log(yearUntilRetire(2001,"sanju"))


// let i
// for(i=1;i<=3;i++){
//     console.log(i)
// }

// array

// let name = "sanju"
// creating an array
// const lover = ["Sanjumma","nicky","papa","mowa",12]
// acess:Index:
// console.log(lover[0])
// lover[0] = "sanju"
// console.log(lover)

//important array method:
// adding elements to the end of the array:
// const lover = ["Sanjumma","nicky","papa","mowa",12]
//  lover.push("Bujji")
//  console.log(lover)
// lover.unshift("Bujji")
// console.log(lover)

// remove elements from the array:
// const lover = ["Sanjumma","nicky","papa","mowa",12]
// lover.pop()
// console.log(lover)
// const lover = ["Sanjumma","nicky","papa","mowa",12]
// lover.shift()
// console.log(lover)

// indexof:
// const lover = ["Sanjumma","nicky","papa","mowa",12]
// console.log(lover.indexOf('papa'))
//include:boolean:
// const lover = ["Sanjumma","nicky","papa","mowa",12]
// console.log(lover.includes("sanju"))
//reverse;
// const lover = ["Sanjumma","nicky","papa","mowa",12]
// lover.reverse()
// console.log(lover)

// const lover = ["Sanjumma","nicky","papa","mowa",12]
// // console.log(lover.length)
// for(let i=0;i<lover.length;i++){
//     console.log(lover[i])
// }

// for of:
// const lover = ["Sanjumma","nicky","papa","mowa",12]
// for(let x of lover){
//     console.log(x)  
// }

// call back of function:function is passed as an argument in another method /function:

//  const lover = ["Sanjumma","nicky","papa","mowa",12]
// lover.forEach(function(ele,i,arr){
//     console.log(ele,i,arr)
// })

// const lover = ["Sanjumma","nicky","papa","mowa",12]
// lover.forEach(function(ele,i){
//     console.log(ele,i)
// })

// const lover = ["Sanjumma","nicky","papa","mowa",12]
// lover.forEach(function(ele){
//     console.log(ele)
// })

// let movements=[1,2,-1,-2,3,-3]
// movements.forEach((e,i)=>{
//     if(e>0){
//         console.log(`customer number ${i}:${e}: deposited`)
//     }else{
//         console.log(`customer number ${i}:${e}: withdraw`)
//     }
// })

// maps:
// let movements=[1,2,-1,-2,3,-3]
// let resulting_array = movements.map(function(e){
//     return e+2
// })
// console.log(movements,resulting_array)

// [1,2,3,4]=>+1=>[2,3,4,5]
// [1,2,3,4]=>*2=>[1,4,6,8]
// [1,2,3,4]=>/2=>[0.5,1,1.5,2]

// let original_array = [1,2,3,4]
// let new_array = original_array.map(e=> e+1)

// console.log(new_array)

// objects:
// let arr=["sanju","uppu","upendra",7,"software",[12,2,3]]
//sanju[2]
// creating an object:
// const sanju = {
//     f_name:"sanju",
//     l_name:"uppu",
//     birthdate:7,
//     job:"software",
//     birthyear:2002
    
// }
//Dot notation and bracket notation:
// console.log(sanju.job)
// console.log(sanju["job"])

// adding new properties:
// sanju["state"] = "Andra Pradesh"
// console.log(sanju)
// sanju.email = "chandika4a9@sasi.ac.in"
// console.log(sanju)

//DOM Manipulation:
// Document object model : HTML file | html elements | structured

// DOM manipulation:get,add,delete or change HTML elements
// console.log(document)
// console.log(document.head)
// console.log(document.body)
// let x = document.getElementById("test")
// document.getElementsByClassName()
// x.innerHTML = "Sample content to demonstrate dom manipulation"

//  querySelectors:
// let x = document.querySelector(".test")
// let x = document.querySelector("#test")
// let x = document.querySelector("p")
// let p1 = document.querySelector("#test1")//id
// p1.innerHTML = "Hi sanju"
// let p2 = document.querySelector(".test2")//class
// p2.innerHTML = "I love you"

//  Event listener:
// events: click,double click,scroll

// let btn = document.querySelector(".sb")
// btn.addEventListener("click",()=>{
//     console.log("i was clicked the submit button")
// })

// let x = document.querySelector(".show")
// x.addEventListener("click",()=>{
//     let y = document.querySelector("#test1")
// y.innerHTML = "Hi"
// let z = document.querySelector("#test2")
// z.innerHTML = "Bujjulu"
// })

// let a=document.querySelector(".clear")
// a.addEventListener("click",()=>{
//     let y = document.querySelector("#test1")
// y.innerHTML = ""
// let z = document.querySelector("#test2")
// z.innerHTML = ""
// })

// let r = document.querySelector("#test")
// r.style.backgroundColor = "blue"

// let e=document.querySelector(".a-style")
// e.addEventListener("click",()=>{
//     b=document.querySelector("body")
//     b.style.backgroundColor = "yellow"
// })

// let c=document.querySelector(".d-style")
// c.addEventListener("click",()=>{
//     b=document.querySelector("body")
//     b.style.backgroundColor = ""
// })
// let f=document.querySelector(".sb")
// f.addEventListener("click",()=>{
//         b=document.querySelector(".ip")
//         console.log(b.value)
//     })


// console.log(1)
// let server
// setTimeout(() => {
//     server="hey there"
// }, 1000);
// console.log(server)

// asynchronous code there is no blocking of code 
// console.log(1)
// let server
// setTimeout(() => {  (after 1 sec code will be executed)
//     // server="hey there"
//   console.log(2)
// }, 1000);
// console.log(3)
// synchronous code will execute each line one by one 
// console.log(1)
// alert("hi")
// console.log(2)
// response is received in the form of promise:
// 1.resolve  2. reject  3.pendind

// handle the promise:
// Promise.then((data)=>{
//     //  dependent block of code 
// }).catch((err)=>{

// })
// code that is not depending on the server's response