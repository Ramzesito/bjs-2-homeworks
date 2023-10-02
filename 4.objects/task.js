function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = new Array(0);
}

Student.prototype.setSubject = function (subjectName) {
  this.subjectName = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.hasOwnProperty("marks")) {
    this.marks = marks;
  }
}

Student.prototype.getAverage = function () {
    if ((this.hasOwnProperty("marks")) && (this.marks !== [])) {
        return this.marks.reduce((acc, mark, idx, arr) => acc + mark / arr.length, 0);
    }
    return 0;
}

Student.prototype.exclude = function (reason) {
  delete this.subjectName;
  delete this.marks;
  this.reason = reason;
}
