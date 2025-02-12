// This program *converts* **numeric grade** to **letter grade**

let grade = 85;

let letterGrade;
if (grade >= 90) {
    letterGrade = 'A';
} else if (grade >= 80) {
    letterGrade = 'B';
} else if (grade >= 70) {
    letterGrade = 'C';
} else if (grade >= 60) {
    letterGrade = 'D';
} else {
    letterGrade = 'F';
}

console.log(`A numeric grade of ${grade} is a letter grade of ${letterGrade}`);