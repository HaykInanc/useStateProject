import { Student } from "../types/Student";

export default function StudentItem({firstName, lastName, marks}: Student) {
  
  // расчет средней оценки
  const avgMark = marks.reduce((acc, item) => acc + item) / marks.length;
  
  return (
    <div>
        <p>Имя: {firstName}</p>
        <p>Фамилия: {lastName}</p>
        <p>Средняя оценка: {avgMark}</p>
    </div>
  )
}