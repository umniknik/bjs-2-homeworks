function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (this.hasOwnProperty('marks') && !this.hasOwnProperty('excluded')) {
        this.marks.push(...marks);
    }
}

Student.prototype.getAverage = function () {
    if (!this.marks || !this.marks.length) {
        return 0;
    } else {
        return this.marks.reduce((a, b) => (a + b)) / this.marks.length;
    }
}

Student.prototype.exclude = function (reason) {
    if (reason) {
        delete this.subject;
        delete this.marks;
        this.excluded = reason;
    }
}
