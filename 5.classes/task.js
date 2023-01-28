class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = state;
        this.type = type;
    }

    set state(state) {
        if (state > 100) {
            this._state = 100;
        } else if (state < 0) {
            this._state = 0;
        } else {
            this._state = state;
        }
    }

    fix() {
        if (this._state != 100 && this._state != 0) {
            this.state = 1.5 * this._state;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state,);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state,);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state,);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state,);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state,);
        this.type = 'detective';
    }
}


class Library {
    constructor(name, books = []) {
        this.name = name;
        this.books = books;
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] === value) {
                return this.books[i];
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                // let namebooka = this.books[i]
                let namebookk = this.books.splice(i, 1);
                return namebookk[0];
            }
        }
        return null;
    }
}


// ========== Тестовый сценарий =============
const library = new Library("Библиотека имени Ленина"); // Создаем библиотеку
library.addBook(
    new DetectiveBook(
        "Артур Конан Дойл",
        "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
        2019,
        1008
    )
);
library.addBook(
    new FantasticBook(
        "Аркадий и Борис Стругацкие",
        "Пикник на обочине",
        1972,
        168
    )
);
//Добавляем свою книгу
library.addBook(
    new FantasticBook(
        "Пушкин",
        "Лукоморье",
        1919,
        168
    )
);

console.log(library); // Изначальная библиотека
let bookOnHands = library.giveBookByName("Пикник на обочине"); // Выдали книжку по названию
console.log(library); // Библиотека после выдачи книги
console.log('Выданная книга ' + bookOnHands.name);
bookOnHands.state = 89; // Испортили книжку
console.log('состояние книги ' + bookOnHands.state);
bookOnHands.fix(); // Починили книгу
console.log('Состояние книги после починки ' + bookOnHands.state);
library.addBook(bookOnHands); // Добавили книгу обратно в библиотеку
console.log(library); //Библиотека после добавления книги


//============= Задача 3. Журнал успеваемости * ==================
class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = {}
    }

    addMark(mark, subject) {
        if (mark >= 2 && mark <= 5) {
            if (this.marks[subject]) {
                this.marks[subject].push(mark);
            } else {
                this.marks[subject] = [mark];
            }
        }
    }

    getAverageBySubject(subject) {
        if (this.marks[subject]) {
            return this.marks[subject].reduce((a, b) => (a + b)) / this.marks[subject].length;
        } else {
            return 0;
        }
    }

    getAverage() {
        let sum = 0;
        for (let key of Object.keys(this.marks)) {
            sum += this.getAverageBySubject(key);
        }
        return sum / Object.keys(student.marks).length;
    }
}

const student = new Student("Олег Никифоров");
student.addMark(5, "химия");
student.addMark(5, "химия");
student.addMark(5, "физика");
student.addMark(4, "физика");
student.addMark(6, "физика"); // Оценка не добавится, так как больше 5
student.getAverageBySubject("физика"); // Средний балл по предмету физика 4.5
student.getAverageBySubject("биология"); // Вернёт 0, так как по такому предмету нет никаких оценок.
student.getAverage(); // Средний балл по всем предметам 4.75