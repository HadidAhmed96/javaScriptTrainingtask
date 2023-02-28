// const menu = [
//     {
//         name: 'pancakes',
//         category: 'breakfast'
//     },
//     {
//         name: 'burger',
//         category: 'lunch'
//     },
//     {
//         name: 'steak',
//         category: 'dinner'
//     },
//     {
//         name: 'bacon',
//         category: 'breakfast'
//     },
//     {
//         name: 'eggs',
//         category: 'breakfast'
//     },
//     {
//         name: 'pasta',
//         category: 'dinner'
//     },
//     {
//         name: 'pizza',
//         category: 'brunch'
//     },
// ];

// const categories = [...new Set (menu.map((item) => item.category))];

// console.log(categories)

// const result = document.querySelector('.result');

// result.innerHTML = categories.map((category)=> {
//     return `<button> ${category} </button>`;
// })
// .join("    ")


// Dynamics object Keys::::::::::

// const person = {
//     name: 'Hadid'
// };
// person.age = 26;
// console.log(person)

// const items = {
//     'featured-items': ['item1','item2'],

// };
// // const price = 'itemprice'
// items['price'] = [500,600]
// console.log(items['featured-items'])
// console.log(items)

// let appstate = 'loading';

// const app = {
//     [appstate]: true
// };

// const keyName = 'Laptop'

// app[keyName]= 'macbook';
// console.log(app[appstate])
// console.log(app)

// const state =  {
//     loading: '',
//     name:'',
//     job:''
// };

// console.log(state)

// const updatestate = function(key, value){
//     state[key]= value;
// }

// updatestate('loading', true);
// updatestate('job', 'Blockchain Developer');
// updatestate('name', 'Hadid Ahmed');
// updatestate('city', 'kasur')
// console.log(state)



///////********Filter and Find Array method in JavaScript ********* */

const people = [
    {name: 'Hadid', age : 26, position: 'Blockchain developer'},
    {name: 'Haseeb', age : 27, position: 'native developer'},
    {name: 'Muaz', age : 29, position: 'Administrator'},
    {name: 'Abdullah', age : 22, position: 'Engineer'},
    {name: 'Haris', age : 23, position: 'Voip'},
];

// console.log(people)

// const young = people.filter((person) => person.age > 25)

// console.log(young)

// const desigenation = people.filter((item) => item.position === 'Blockchain developer');

// console.log('Blockchain Developer :: ',desigenation[0].name)


// const namearrary = ['Hadid','Haseeb','Atif','Zaka']

// const getName = namearrary.filter((namearrary)=> namearrary ==='Hadid');


// console.log("Name ",getName)


// const person1 = people.find((person) => person.name === 'Hadid' )

// console.log(person1)
// console.log(person1.position)

//   const students = [
//     { name: "Alice", grade: 90 },
//     { name: "Bob", grade: 80 },
//     { name: "Charlie", grade: 95 },
//     { name: "Dave", grade: 85 }
//     ];
    
//   const result = [...new Set (students.fill(100))];
  
//   console.log(result);
//   console.log(students);

// const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
// const sum = objects.reduce(
//   (accumulator, currentValue,index) => 
//   {
//     console.log(accumulator, currentValue.x)
//     return accumulator + currentValue.x
//     },0
// );

// console.log(sum); // 6

// const flattened = [
//     [0, 1],
//     [2, 3],
//     [4, 5],
//   ].reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);

//   console.log(flattened);

const names = ["Alice", "Bob", "Tiff", "Alice" ,"Bruce", "Alice","Alice","Alice","Alice"];

// const obj = {}

// console.log(obj.Bob);
// console.log(obj["Bob"]);
// // obj.Bob = 0
// obj["Bob"] = 0+1
// console.log(obj.Bob);
// console.log(obj["Bob"]);


// console.log(obj.Alice);
// console.log(obj["Alice"]);
// // obj.Alice = 0
// obj["Alice"] = obj?.Alice ?? 1
// console.log(obj.Alice);
// console.log(obj["Alice"]);


// console.log(obj.Alice);
// console.log(obj["Alice"]);
// // obj.Alice = 0
// obj["Alice"] = obj["Alice"] +1 ?? 10
// console.log(obj.Alice);
// console.log(obj["Alice"]);

// obj["Alice"] = obj["Alice"] +1 ?? 10
// console.log(obj.Alice);
// console.log(obj["Alice"]);

const countedNames = names.reduce((allNames, name) => {

  const currCount = allNames[name] ?? 0 ;

  console.log('...allNames',allNames, 'name', name )
  return {
    allNames,
    [name]: currCount + 1,
  };
}, {});

console.log(countedNames)

// const arr = [1,2,3,4]
// console.log(arr)
// arr['Hadid'] = 10
// console.log(arr)

// function A() {
//     console.log("A was called");
//     return undefined;
//   }
//   function B() {
//     console.log("B was called");
//     return 5;
//   }
//   function C() {
//     console.log("C was called");
//     return "foo";
//   }
  
//   console.log(A() ?? C());
//   // Logs "A was called" then "C was called" and then "foo"
//   // as A() returned undefined so both expressions are evaluated
  
//   console.log(B() ?? C());