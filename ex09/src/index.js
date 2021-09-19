function main (){

    //
    var firstNum = 6;
    var secondNum = 25;
    var thirdNum = 5.2;
    firstNum *= 9;
    secondNum /= 5;
    thirdNum *= 10;
    //
    return {
        firstNum,
        secondNum,
        thirdNum
    };
}

console.log(main());

module.exports = main;