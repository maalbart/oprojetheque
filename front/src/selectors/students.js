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
