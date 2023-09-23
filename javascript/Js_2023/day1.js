x=Math.round(4.26)
console.log(x)
const styles = `padding: 15px;
                background-color: #2ecc71;
                color: black
                font-family:sans-serif`;
                

console.log('%c Hello, Everyone!', styles);
console.log('%c Hello, Everyone!', styles);

//array merging and copying
a=[1,2,3,4]
b=[5,6,7,8]

//... means spread operator
console.log([...a,...b])// merging a and b

c=[...a]// copying a into c
console.log(c)
//another approach
d=a
console.log(d)
//same happens with objects also

const originalObj = { name: 'John', age: 30 };
const clonedObj = { ...originalObj };

console.log(clonedObj);
// default approach
e=originalObj
console.log(e)

function addNumbers(a, b, c) {
    return a + b + c;
  }
  
  const numbers = [10, 12, 8,10,10];
  const sum = addNumbers(...numbers);
  
  console.log(sum);
  function toSentenceCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    // Here 0th index letter will be converted to upper case and from 1st letter onwards converted into lower case and both are concatinated
  }
  
  console.log(toSentenceCase('hELLo TwEePs! HOW ARE YOU TODAY?'));