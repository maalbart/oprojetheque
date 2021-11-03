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

export function findRecipe(recipes, searchedSlug) {
  const recipe = recipes.find((testedRecipe) => {
    return testedRecipe.slug === searchedSlug;
  });
  return recipe;
}
