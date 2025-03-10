class Student {
    constructor(name, lastName, birthYear, grades = []) {
        this.name = name;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = grades;
        this.attendance = new Array(25).fill(null);
    }

    getAge() {
        return new Date().getFullYear() - this.birthYear;
    }

    getAverageGrade() {
        if (this.grades.length === 0) return 0;
        const validGrades = this.grades.filter(grade => typeof grade === "number");
        return validGrades.reduce((sum, grade) => sum + grade, 0) / validGrades.length;
    }

    present() {
        this.markAttendance(true);
    }

    absent() {
        this.markAttendance(false);
    }

    markAttendance(value) {
        const firstNullIndex = this.attendance.indexOf(null);
        if (firstNullIndex !== -1) {
            this.attendance[firstNullIndex] = value;
        } else {
            console.log("Максимальное количество занятий достигнуто");
        }
    }

    getAttendanceRate() {
        const valid = this.attendance.filter(el => el !== null);
        if (valid.length === 0) return 0;
        return valid.filter(el => el === true).length / valid.length;
    }

    summary() {
        const avgGrade = this.getAverageGrade();
        const avgAttendance = this.getAttendanceRate();

        if (avgGrade > 90 && avgAttendance > 0.9) {
            return "Молодець!";
        } else if (avgGrade > 90 || avgAttendance > 0.9) {
            return "Хорошо но можно лучше ";
        } else {
            return "Редиска!";
        }
    }
}

const student1 = new Student("Роман", "Плещенко", 2000, [75, 91, 60, 100,85]);
const student2 = new Student("Александра", "Палыга", 2001, [36, 77, 46, 33, 50]);
const student3 = new Student("John", "Bonham", 1969, [19, 68, 19, 80, 72]);
const student4 = new Student("Роберт", "Плант", 1948, [100, 90, 95, 80, 95]);


student1.present(); student1.present(); student1.present();
student3.absent(); student3.absent(); student3.absent();
student2.present(); student2.absent(); student2.present();
student4.present(); student4.present(); student4.present(); 


console.log(`${student1.name} ${student1.lastName}:`, student1.summary());
console.log(`${student2.name} ${student2.lastName}:`, student2.summary());
console.log(`${student3.name} ${student3.lastName}:`, student3.summary());
console.log(`${student4.name} ${student4.lastName}:`, student4.summary());