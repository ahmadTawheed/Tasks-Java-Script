const students = [
  {
    name: "Ahmed",
    age: 17,
    grade: "A",
    subject: "Math",
    teacher: "Mr. Khaled",
    isPresent: true,
    absences: 1,
    score: 92,
  },
  {
    name: "Mahmoud",
    age: 18,
    grade: "B",
    subject: "Physics",
    teacher: "Ms. Salma",
    isPresent: true,
    absences: 2,
    score: 85,
  },
  {
    name: "Sara",
    age: 17,
    grade: "A+",
    subject: "English",
    teacher: "Mr. Tamer",
    isPresent: false,
    absences: 0,
    score: 98,
  },
  {
    name: "Omar",
    age: 16,
    grade: "C",
    subject: "History",
    teacher: "Mrs. Dina",
    isPresent: false,
    absences: 4,
    score: 67,
  },
  {
    name: "Nour",
    age: 17,
    grade: "B+",
    subject: "Biology",
    teacher: "Mr. Yasser",
    isPresent: true,
    absences: 1,
    score: 89,
  },
  {
    name: "Youssef",
    age: 18,
    grade: "A-",
    subject: "Chemistry",
    teacher: "Ms. Fatma",
    isPresent: true,
    absences: 0,
    score: 91,
  },
  {
    name: "Hala",
    age: 16,
    grade: "C+",
    subject: "Geography",
    teacher: "Mr. Ahmed",
    isPresent: false,
    absences: 3,
    score: 72,
  },
];



let excellentStudents = 0;
let absentStudents = 0;
let i = 0;

while (i < students.length) {
    if (students[i].score >= 90) {
        excellentStudents++;
    }
    if (students[i].isPresent === false) {
        absentStudents++;
    }
    i++;
}

console.log("عدد الطلاب المتفوقين: " + excellentStudents);
console.log("عدد الطلاب الغائبين: " + absentStudents);

document.write(`
  
     <div class="main">
        <h1>قائمة الطلاب</h1>
        <div class="statu">
            <h2 class="one">الطلاب الغائبين : ${absentStudents}</h2>
            <h2 class="two">الطلاب المتفوقين : ${excellentStudents}</h2>
        </div>
    </div>
  
  `);

for (const student of students) {
    console.log("Name :- " + student.name);

    // Step (1)
    let printStatuStudent;
    if (student.isPresent === true && student.score >= 90) {
        printStatuStudent = "طالب متفوق";
        console.log(printStatuStudent);
    } else if (student.score <= 50 || student.absences > 3) {
        printStatuStudent = "يحتاج الى متابعة";
        console.log(printStatuStudent);
    }else{
        printStatuStudent = "طالب جديد";
        console.log(printStatuStudent);
    }

    let statusP;
    let statusColor;
    if (student.isPresent === true) {
        statusP = "حاضر";
         statusColor = "green";
    } else {
        statusP = "غائب";
         statusColor = "red";
    }


    // Step (2)
    let classifacationStudentGrade;
    switch (student.grade) {
        case "A+":
            classifacationStudentGrade = " ممتاز جدا جدا";
            console.log(classifacationStudentGrade);
            break;
        case "A":
            classifacationStudentGrade = "ممتاز";
            console.log(classifacationStudentGrade);
            break;
        case "A-":
            classifacationStudentGrade = "جيد جدا";
            console.log(classifacationStudentGrade);
            break;
        case "B+":
            classifacationStudentGrade = "جيد";
            console.log(classifacationStudentGrade);
            break;
        case "B":
            classifacationStudentGrade = "مقبول";
            console.log(classifacationStudentGrade);
            break;
        case "C+":
            classifacationStudentGrade = "تحت المتوسط";
            console.log(classifacationStudentGrade);
            break;
        case "C":
            classifacationStudentGrade = "ضعيف";
            console.log(classifacationStudentGrade);
            break;
        default:
            classifacationStudentGrade = "غير مصنف";
            console.log(classifacationStudentGrade);
            break;
    }

   document.write(`
    <div class="card">
        <div class="cent">
            <h2>${student.name}</h2>
        </div>
        <div class="line"></div>
        <div class="text">
            <h3>العمر : ${student.age}</h3>
            <h3>المادة : ${student.subject}</h3>
            <h3>المعلم : ${student.teacher}</h3>
            <h3>الدرجة : <span class="circle">${student.grade}</span></h3>
            <h3>الغيابات : ${student.absences}</h3>
            <h3>الحضور : <span style="color: ${statusColor};">${statusP}</span></h3>
            <h3>النتيجة : ${student.score}</h3>
        </div>
        <div class="end-card">
            <h3>${printStatuStudent}</h3>
            <h4>${classifacationStudentGrade}</h4>
        </div>
    </div>
  
  `);

}