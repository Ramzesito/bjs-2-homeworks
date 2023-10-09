class PrintEditionItem {
    #state;
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.#state = 100;
        this.type = null; 
    }
    set state(state) {
        if (state < 0) {this.#state = 0}
        else if (state > 100) {this.#state = 100}
        else this.#state = state;
    }
    get state() {
        return this.#state;
    }
    fix() {
        this.state = this.state * 1.5;
    }
}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor (name) {
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }
    findBookBy(typeString, value) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][typeString] === value) {
                return this.books[i];
            }
        }
        return null;
    }
    giveBookByName(bookName) {
        let foundBook = this.findBookBy("name", bookName);
        if (foundBook !== null) {
            this.books = this.books.filter((book) => book !== foundBook)
        }
        return foundBook;
    }
}

// тестовый сценарий

// let centerLib = new Library("Центральная городская");
// centerLib.addBook(new Magazine("Журнал Самоделкин", 2014, 60));
// centerLib.addBook(new Book("Иванов И.И.", "Учебник Родная речь", 2019, 85));
// centerLib.addBook(new DetectiveBook("Конан Дойль", "Собака Баскервиллей", 1990, 190));
// centerLib.addBook(new FantasticBook("Жюль Верн", "1000 лье под водой", 1919, 320));
// console.log("Количество книг до выдачи: " + centerLib.books.length); 
// let givenBook = centerLib.giveBookByName("Собака Баскервиллей");
// console.log("Количество книг после выдачи: " + centerLib.books.length); 
// givenBook.state = 25;
// givenBook.fix();
// centerLib.addBook(givenBook);
// console.log(centerLib.books);


class Student {
    constructor(name){
        this.name = name;
        this.marks = {};
    }
    addMark(mark, subject) {
        if (mark < 2 || mark > 5) { return; }
        if (!this.marks.hasOwnProperty(subject)) {
            this.marks[subject] = [];
        }
        this.marks[subject].push(mark);
    }
    getAverageBySubject(subject) {
        if (!this.marks.hasOwnProperty(subject)) {
            return 0;
        }
        return this.marks[subject].reduce((acc, mark, idx, arr) => acc + mark / arr.length, 0); 
    }
    getAverage() {
        let keys =  Object.keys(this.marks);
        if (keys.length === 0) { return 0;}
        let avgResult = 0;
        for (let i = 0; i < keys.length; i++) {
            avgResult += this.marks[keys[i]].reduce((acc, mark, idx, arr) => acc + mark / arr.length, 0); 
        }
        return avgResult / keys.length;
    }
}

// тестовый сценарий

// const student = new Student("Олег Никифоров");
// student.addMark(5, "химия");
// student.addMark(4, "химия");
// student.addMark(3, "математика");
// student.addMark(2, "физра");
// student.addMark(22, "физра");
// student.addMark(-2, "физра");
// console.log(student.getAverageBySubject("физра"));
// console.log(student.getAverageBySubject("астрономия"));
// console.log(student.getAverage());