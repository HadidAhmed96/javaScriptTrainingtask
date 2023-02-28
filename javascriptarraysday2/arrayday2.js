///*****************TASK::1 ******************************* */

const { reverse } = require("dns");

const students = [
    { name: "alice", grade: 90 },
    { name: "Bob", grade: 80 },
    { name: "Charlie", grade: 95 },
    { name: "Dave", grade: 85 },
    { name: "Alice", grade: 99 }
  ];

const newStudents = [
    { name: "Eve", grade: 88 },
    { name: "Frank", grade: 92 }
    ];
    


//   const addStudents = students.concat(newStudents);
//   console.log(addStudents);

  //******************** TASK::2 ********************/

// const newstudents = students.entries();
// for (const [key, val] of newstudents) {
//     console.log(`At Index :: ${key} ; Name :: ${val.name} & Grade is :: ${val.grade}`);
// }

//******************** TASK::3 ********************/

// const finalResult = students.every((Students) => Students.grade >= 70);

// console.log(finalResult);


//******************** TASK::4 ********************/

// const finalResult = students.map(({ grade }) => grade).fill(100);

// console.log(finalResult);

//********************** TASK:: 5*******************/

// const finalResult = students.filter((Students) => Students.grade > 90);

// console.log(finalResult);

//*********************** Task :: 6* ****************** */

// const finalResult = students.find((Students) => Students.name === 'Charlie');

// console.log(`Charlie's grade is ${finalResult.grade}`);

// *********************** Task :: 7 ********************/

// const finalResult = students.findIndex((Students) => Students.grade === 85);

// console.log(finalResult);

//************************ Task :: 8 *******************/

const nestedArray = [[1, 2], [3, 4, 5], [6]];

// const finalResult = nestedArray.flat();

// console.log(finalResult);

// *********************** Task :: 9 *******************/

// const finalResult = students.flatMap((Students) => Students.grade >= 70);

// console.log(finalResult);

// *********************** Task :: 10 ******************/

// students.forEach((Students ) => console.log(Students.name));

// *********************** Task :: 11 ******************/

// const string = 'hello world';
// const stringArray = Array.from(string);
// console.log(stringArray);
// console.log(stringArray.length);


// *********************** Task :: 12 ******************/

// const finalResult = students.map((Students) => Students.name.includes('Eve'));

// console.log(finalResult);

// *********************** Task :: 13 *******************/

// const finalResult = students.map(Students => Students.name).indexOf("Alice")

// console.log(finalResult)

// *********************** Task :: 14 ******************/

// const finalResult = students.map((Students)=> Students.grade );

// console.log(finalResult);

//************************* Task :: 15 *****************/

// const newStudent = { name: "Grace", grade: 87 };

// const addStudent = students.push (newStudent);
// console.log(students)

// ************************* Task :: 16 ****************/

// const addStudents = students.pop();
//   console.log(addStudents)
//   console.log(students)

// ************************* Task :: 17 ****************/
// const reversearray = students.reverse();

// console.log(reversearray)

// ************************* Task :: 18 ****************/

// const Students = students.shift()

// console.log(students)

// ************************* Task :: 19 ****************/

// const avergaeGrade = students.reduce((accumulator,currentValue) => {
//   console.log('accumulator', accumulator,'currentValue',currentValue.grade)

//   return accumulator + currentValue.grade / students.length;
// }, 0);

// console.log(avergaeGrade)
