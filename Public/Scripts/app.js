"use strict";

var Mul = {

    numbers: [2, 5, 7],
    multiplyBy: 5,
    multiply: function multiply() {
        var _this = this;

        return this.numbers.map(function (number) {
            return number * _this.multiplyBy;
        });
    }
};

console.log(Mul.multiply());
