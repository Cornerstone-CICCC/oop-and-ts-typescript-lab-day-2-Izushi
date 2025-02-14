// 🎓 Student Grading System
// 🏫 Create a system that manages student records and calculates their average grade.
//
// 1. Implement a class `Gradebook<T>` to store student records.
// 2. Implement a method `addStudent` that adds a new student with an empty grade list.
// 3. Implement a method `addGrade` that records a new grade for a student.
// 4. Implement a method `getAverageGrade` that returns a student’s average grade.
// 5. Implement a method `getStudentGrades` that returns all recorded grades for a student. Formula to get average: sumOfAllGrades / numberOfSubjects.
// 6. Implement a method `updateSubjectGrade` that updates a subject grade for a student.
class Gradebook {
    students = [];
    addStudent(student) {
        this.students.push(student);
    }
    addGrade(id, grade) {
        const student = this.students.find(student => student.id === id);
        if (student) {
            student.grades.push(grade);
        }
    }
    getAverageGrade(id) {
        const student = this.students.find(student => student.id === id);
        if (student) {
            const sumOfAllGrades = student.grades.reduce((acc, grade) => acc + grade.grade, 0);
            return sumOfAllGrades / student.grades.length;
        }
    }
    getStudentGrades(id) {
        const student = this.students.find(student => student.id === id);
        if (student) {
            return student.grades;
        }
    }
    updateSubjectGrade(id, subject, newGrade) {
        const student = this.students.find(student => student.id === id);
        if (student) {
            const gradeObj = student.grades.find(grade => grade.subject === subject);
            if (gradeObj) {
                gradeObj.grade = newGrade;
            }
        }
    }
}
// Test cases
const gradebook = new Gradebook();
console.log(gradebook.addStudent({ id: 1, name: "Alice", grades: [] })); // "Alice added to the gradebook."
console.log(gradebook.addGrade(1, { subject: "Math", grade: 90 })); // "Grade recorded for Math."
console.log(gradebook.addGrade(1, { subject: "English", grade: 80 })); // "Grade recorded for English."
console.log(gradebook.addGrade(1, { subject: "Science", grade: 85 })); // "Grade recorded for Science."
console.log(gradebook.getStudentGrades(1)); // Should return all grades for Alice
console.log(gradebook.getAverageGrade(1)); // Should return Alice's average grade
console.log(gradebook.updateSubjectGrade(1, "English", 95)); // Should update Alice's English grade to 95
console.log(gradebook.getStudentGrades(1)); // Should return all grades for Alice
