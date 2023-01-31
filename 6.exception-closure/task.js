function parseCount(value) {
    if (Number.isNaN(Number.parseFloat(value))) {
        throw new Error('Невалидное значение')
    } else {
        return Number.parseFloat(value);
    }
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (Error) {
        return Error;
    }
}

class Triangle {
    constructor(a, b, c) {
        if (a + b < c || b + c < a || c + a < b) {
            throw new Error('Треугольник с такими сторонами не существует');
        } else {
            this.a = a;
            this.b = b;
            this.c = c;
        }
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        let p = this.perimeter / 2;
        return +(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3);;
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch {
        return {
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            },
            get area() {
                return "Ошибка! Треугольник не существует";
            }
        }
    }
}