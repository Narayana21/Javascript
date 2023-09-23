/*
1. object literals
constructotre function
new
classes





*/


function obj(n,c,b){
    this.name=n
    this.c=c
    this.branch=b
  

}
let s1 = new obj("avc",3,"A")
let s2 = {color:"white",}
let movie = Object.create(s2)
console.log(movie,s1,s2)