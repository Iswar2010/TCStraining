
//  import React,{useState} from 'react';
//  import './App.css';
//  // Sample array of students with name, grade, and marks
// const students = [
//   { name: "John", grade: "A", marks: 85 },
//   { name: "Alice", grade: "B", marks: 72 },
//   { name: "Bob", grade: "C", marks: 60 },
//   // Add more students here if needed
// ];

// // Function to double the marks for each student in the array
// function doubleMarks(studentsArray) {
//   return studentsArray.map((student) => ({
//     ...student,
//     marks: student.marks * 2,
//   }));
// }

// // Call the function and store the result in a new array
// const doubledMarksStudents = doubleMarks(students);

// // Output the original and modified arrays
// console.log("Original array of students:", students);
// console.log("Array of students with doubled marks:", doubledMarksStudents);
 

 



// const App = () => {
//   const [doubledStudents, setDoubledStudents] = useState(doubleMarks(students));

//   return (
//     <div className="App">
//       <h1>Student Marks Doubler</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Grade</th>
//             <th>Original Mark</th>
//             <th>Doubled Mark</th>
//           </tr>
//         </thead>
//         <tbody>
//           {doubledStudents.map(student => (
//             <tr key={student.name}>
//               <td>{student.name}</td>
//               <td>{student.grade}</td>
//               <td>{student.marks / 2}</td>
//               <td>{student.marks}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default App;









import React from 'react'
import Header from './Header'
import Counter1 from './Counter1'
import './App.css'


function App() {
  return (
    <div className="App">
      <Header title= "rajalakshmi intitute of technology"/>
      <Header title="Welcome"/>
      <Counter1/>
    </div>
  )
}

export default App