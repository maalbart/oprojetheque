export function findStudent(students, searchedStudentId) {
  console.log(students)
  console.log(searchedStudentId)
  const student = students.find((testedStudent) => {
    console.log(testedStudent.id)
    console.log(searchedStudentId)
    return testedStudent.id == searchedStudentId;
  });
  console.log(student)
  return student;
}
export function filteredSearch(students, search) {
  if (!search) {
    return students
  } else {
    const filteredStudents = students.filter(student => student.firstname.toLowerCase().includes(search) || student.lastname.toLowerCase().includes(search))
    console.log(filteredStudents)
    return filteredStudents
  }
}
