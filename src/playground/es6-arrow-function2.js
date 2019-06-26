const Mul = {

    numbers : [2,5,7],
    multiplyBy: 5,
    multiply(){
        return this.numbers.map((number) => number*this.multiplyBy);
    }

};

console.log(Mul.multiply());