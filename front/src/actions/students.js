// ACTION TYPES
export const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS'
export const SAVE_STUDENTS = 'SAVE_STUDENTS'
export const GET_ONE_STUDENT = 'GET_ONE_STUDENT'
export const CHANGE_SEARCH = 'CHANGE_SEARCH'
export const SAVE_ONE_STUDENT = 'SAVE_ONE_STUDENT'

// ACTION CREATORS
export const getAllStudents = () => ({
  type: GET_ALL_STUDENTS,
});
export const saveStudents = (list) => ({
  type: SAVE_STUDENTS,
  list,
});
export const getOneStudent = (id) => ({
  type: GET_ONE_STUDENT,
  id
})
export const saveOneStudent = (studentData) => ({
  type: SAVE_ONE_STUDENT,
  studentData
})
export const changeSearch = (value, key) => ({
  type: CHANGE_SEARCH,
  key,
  value
})
