export default function addStudent(student){
    return {
        type: 'ADD_STUDENT',
        payload: student
    }
}