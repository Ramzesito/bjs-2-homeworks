'use strict';

function parseCount(count) {
    let res = Number.parseFloat(count);
    if (isNaN(res)) {
        throw new Error("Невалидное значение");
    }
    return res;
}

function validateCount(count) {
    try {
        return parseCount(count);
    }
    catch(err) {
        return err;
    }
}


class Triangle {
    constructor(a, b, c) {
        if ((a + b <= c) || (b + c <= a) || (a + c <= b)) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }
    get perimeter() {
        return (this.a + this.b + this.c);
    }
    get area() {
        let p = this.perimeter / 2;
        return +(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3);
    }
}


function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    }
    catch(err) {
        return {
            get area() { return "Ошибка! Треугольник не существует";},
            get perimeter() { return "Ошибка! Треугольник не существует";}
        }
    }
}