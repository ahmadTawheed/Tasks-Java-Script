/*
function generateReport (studentName, score, subject, grade, status) {
    if (90 <= score) {
        status = "Excellent";
        grade = "A";
    } else if (score >= 75 && score <= 89) {
        status = "Very Good";
        grade = "B";
    } else if (score >= 60 && score <= 74) {
        status = "Good";
        grade = "C";
    } else if (score <= 59) {
        status = "Needs Improvement";
        grade = "F";
    } else {
        status = "Error Status";
        grade = "Error Grade"
    }
    let reportStudent;
    return reportStudent = {
        studentName,
        score,
        subject,
        grade,
        status
    }
}

console.log(generateReport ("Ahmed", 92, "Math", "A" ,"Excellent"));
*/

function generateReport (studentName, score, subject, grade, status) {
    if (90 <= score) {
        status = "Excellent";
        grade = "A";
    } else if (score >= 75 && score <= 89) {
        status = "Very Good";
        grade = "B";
    } else if (score >= 60 && score <= 74) {
        status = "Good";
        grade = "C";
    } else if (score <= 59) {
        status = "Needs Improvement";
        grade = "F";
    } else {
        status = "Error Status";
        grade = "Error Grade"
    }
    return `
    Student Report :)
    Name : ${studentName} 
    Subject : ${subject}
    Score : ${score}
    Grade : ${grade}
    Status : ${status}
    `;
}

console.log(generateReport ("Ahmed", 80, "Math", "A" ,"Excellent"));