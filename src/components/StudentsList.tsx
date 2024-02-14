import { Student } from "../types/Student"
import StudentItem from "./StudentItem"

export default function StudentsList() {

  const students: Student[] = [
    {firstName: "Анатолий", lastName: "Ушанов", marks: [5, 3, 4, 4]},
    {firstName: "Роман", lastName: "Иванов", marks: [4, 5, 4, 4, 5]},
    {firstName: "Юрий", lastName: "Митрофанов", marks: [4, 3, 3, 4]},
    {firstName: "Максим", lastName: "Грибов", marks: [4, 5, 5, 4, 5]}
  ];

  return (
    <div>
        {
            students.map((student) => <StudentItem key={student.firstName} {...student} />)
        }
    </div>
  )
}