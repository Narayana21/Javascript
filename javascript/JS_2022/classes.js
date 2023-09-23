class students{
    constructor(name,section,branch,){
        this.name=name
        this.section=section
        this.branch=branch
    }
     get getname(){
    return  `hello ${this.name}!you are from ${this.branch} banch, in ${this.section} section`
   }
    //  set ChangeName(x) // it allows exactly only one parameter and getter doesn't require any parameters
    // {
    //     this.name=x
    // }
   change(x){
        this.name=x
    } 
}
let student1= new students("hardy","A","ECE")
let student2= new students("faraday","B","ECE")
let student3= new students("thompson","A","ECE")
console.log("before",student3.name)
//student3.ChangeName="tesla"  // passing parameter to setter function
// console.log("after",student3)
student3.change("tesla")// changing name of student3 without use of setter function 
console.log("after",student3.name)
console.log(student1.getname)  // set and get methods are cannot be called with parenthisis like getname()

// inheritance concept


// parent class
class person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    describe(){
        console.log(`I am ${this.name} and I am ${this.age} years old`);
    }// this describe() can be accesed by both person(parent) and programmer(child) classes
}

// creating child class using extends keyword
class programmer extends person{
    constructor(yearsOfExperience){
        super(Name,Age) // super is kewyword used to acces the elements of parent class
        // extra parameter for child 
        this.yearsOfExperience=yearsOfExperience
    }
    code(){
        console.log(`${this.name} has ${this.yearsOfExperience} years of experience in coding`)
    }// this can be accesed by child only
}
let person1 = new person('narayana',21)
let programmer1 = new programmer("jeff",30,7)
console.log(person1)
console.log(programmer1)
console.log(person1.describe())
console.log(programmer1.describe()) //although describe() is a method of parent can alos be accesed by child
//console.log(person1.code()) //code() is a method of child and can't be accesed by parent shows error
console.log(programmer1.code())

// creating an array of programmers
const programmers=[
    new  programmer('hardy',20,8),
    new programmer('mario',26,9),
    new programmer('daniel',26,7),

];// creating function to loop through the array of programmers
function developers(){
    for(let pr of programmers){
        console.log(pr.code())
    }
}
developers();
