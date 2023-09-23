// // variable decalartion 
// // var let const
// // scope for them

// // -> let and const have global scope
// //-> variables decalred with let and const cannot be redecalred
// // -> variables defined with let and const must be declared before use


// // variables decalred with var have opp properties
// // if you change the value of var variable inside the block then its value
// // also changes outside the block
//  var x=2
//  console.log(x)
// {
//     var x=8
// }
// console.log(x)
// // The value of x is now changed to 8

// // understanding scopes of let,const,var
// {   

//     // inside block
//     var v= 10
//     const c=6
//     let l = 5
//     console.log('With var inside block '+v) // have life span in  entire code
//     console.log('With const inside block '+c) // have life span within the brackets only
//     console.log('with let inside block '+l) // have life span within the brackets only
     
// }

// // outside block
// console.log('var value outside block '+v) // can acces outside block
// // console.log(c)// cannot acces outside block
// // console.log(l) // cannot acces outside block

// //===================================================== HOISTING===========================================================

// //Variables defined with let and const are hoisted to the top of the block, but not initialized.

// // Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.

// // Using a let variable before it is declared will result in a ReferenceError.

// // The variable is in a "temporal dead zone" from the start of the block until it is declared:


// // normal error
// // console.log(xyz)  // gives xyz is not defined error


// // hositing with var
// console.log(xyz)  //gives value of xyz as undefined
// var xyz
// console.log(xyz2)  // again gives undefined because hositing only declares variables at top but not intilatize values 
// var xyz2=23
// console.log(xyz2) // gives value as 23

// // hoisting with let

// // console.log(q)  // gives error as cannot acces q before initilization
// // let q;

// // console.log(q1)   
// // let q1=12

// // console.log(gh)   //  gives error as cannot acces gh before initilization
// // const gh=12;

// // IMPORTANT NOTE:   HOSTING HELPS IN DECLARING VARIABELS AT TOP OF THE CODE BUT DOES NOT HELP IN ASSIGNING VALUES TO THE VARIABLE

// // slice vs substr

// let n = 'narayana'
// console.log(n.slice(2,4)) // from 2nd index position to 3 (4-1) index 
// console.log(n.substr(2,4))  // from 2nd index to length equivalent to 4 characters 

// // push,pop,shift,unshift

// //push returns length of updated array
// let arr=[1,2,3,4,5,6]
// let res=arr.push(12)
// console.log(res) // op is 7

// // pop returns the last element and removes it from the array

// let res2=arr.pop()
// console.log(res2)  // op is 12

// // unshift adds element in the start index and it returns the length of modified arr as op

// console.log(arr.unshift(0)) // op is 7

// // shift is used to  remove the 1st index element.It returns the element like pop

// console.log(arr.shift()) // returns 0 as op


// // some comparision bw strings

// let n1='ravi'
// let n2='Ravi'
// console.log(n1==n2) // false is op 
// console.log(n1>n2) // truse is op because lower case is first prefered (r>R)
// console.log('a'>'b') // false because b comes next to a

// //================================================= CONTROL FLOW =======================================================

// // simple for loop

// for(let i=1; i<=5;i++){
//     console.log('in for loop 1-'+i)
// }

// // another for loop

// let names=['a','b','c','d','e']
// for(let i=0; i<names.length;i++){
//     console.log('in for loop 2 -'+names[i])
// }

// // While loop

// let i=0
// while(i<5){
//     console.log('in while loop  ' +i)
//     i++
// }

// // do while loop
// let j=5
// do{
//     console.log('in do while '+i)

// }while(j<5)


// //Fun with numbers

// console.log(2+"2")//22
// console.log("2"+2)//22
// console.log("2"-2)//0
// console.log(2-"2")//0
// console.log(2*"2")//4
// console.log("2"*2)//4
// console.log(2/"2")//1
// console.log("2"/2)//1
// console.log(2+4+"2");//62
// console.log("2"+2+4);//224
// console.log(4-1-"1")//2
// console.log("4"-1-1)//2


// //javascript errors

// // try catch finally throw

// /*
// The try statement defines a code block to run (to try).

// The catch statement defines a code block to handle any error.

// The finally statement defines a code block to run regardless of the result.

// The throw statement defines a custom error.
// */
try {
    adddlert("Welcome guest!");
  }
  catch(err) {
    document.getElementById("demo").innerHTML = "you are trying to acces a function that is not decalared see on in line no 170";
  }


//  map method is used for arrays 
//it returns new array:
// if there is no return then undefined value will be returned
let salaries=[1000,2000,3000,4000,5000]
let incerements=salaries.map(
    (salary)=>{
        return salary*0.5+salary
    }
    )

console.log(incerements)
console.log(salaries)
// forEach is also same as map but does't returns the new array
// it modifies the orginal array
let age=[10,20,30,40,50]
console.log("age array is before forEach "+age)

let ages=age.forEach((vayasu,index,array)=>{ return  array[index]+=vayasu})
console.log("ages array is "+ ages)
console.log("age array is after forEach "+age)



// filter method
// returns new array
// return 0 means filter method will not be applicable to every element in array as 0 means false
// return 1 means filter method is applied to every element in the array as 1 means true
let filterMethod=salaries.filter((salary)=>{return salary>2000})

console.log(filterMethod)

// reduce method
// takes 2 parameters
// one is call back function and other is accumulator value
// it only returns last element of array
// arrow function is one parameter
// 0 is another parameter
// 0 will be first assigined to accumulator
// in 1st iteration acc=0 salary=0th index value
// then in 2nd iter acc= previous sum of acc+sal ,salary=1st index value

let reduceMethod=salaries.reduce((accumulator,salary)=>{ return salary+accumulator},0)
console.log(reduceMethod)











// counting no.of times letter repeated
function count(str) {
    // console.log(str.split(' '))
    return str.split('').reduce( (prev, curr) => {
      prev[curr] = prev[curr] ? prev[curr] + 1 : 1;
      return prev;
    }, {});
  };


  
  console.log(count('narayana')); 
  
























  
  // making every first letter capital
  function initcap(str) {
  return str.toLowerCase().split(' ').map(function(word) {
          return word.charAt(0).toUpperCase() + word.substr(1);
      }).join(' ');
   }
   console.log(initcap("hello friend jhansi"))
  



   //******************************************************************************************************************************* */
   function initCap(s) {
    var result = '';
    if ((typeof (s) === 'undefined') || (s == null)) {
      return result;
    }
  
    s = s.toLowerCase();
    var words = s.split(' ');
    console.log('-------------------------------------------')
    console.log(words)
    console.log('-------------------------------------------')

    for (var i = 0; i < words.length; ++i) {
      result += (i > 0 ? ' ' : '') + 
        words[i].charAt(0).toUpperCase()+words[i].slice(1)
        // words[i].substring(0, 1).toUpperCase() +
        // words[i].slice(1);
    }
    return result;
  }
console.log(initCap('nimmalapudi lakshmi narayana'))