// ACTION TYPES
export const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS'
export const SAVE_STUDENTS = 'SAVE_STUDENTS'

// ACTION CREATORS
export const getAllStudents = () => ({
  type: GET_ALL_STUDENTS,
});
export const saveStudents = (list) => ({
  type: SAVE_STUDENTS,
  list,
});
