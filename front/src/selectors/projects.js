export function findProject(projects, searchedProjectId) {
  console.log(projects)
  console.log(searchedProjectId)
  const project = projects.find((testedProject) => {
    console.log(testedProject.id)
    console.log(searchedProjectId)
    return testedProject.id == searchedProjectId;
  });
  console.log(project)
  return project;
}
