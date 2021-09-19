function main (){

    //
    var myX = 12;
    var myY = 19;
    var myZ = 24;
    myX += 3;
    myY += 17;
    myZ -= 20;
    //
    return {
        myX,
        myY,
        myZ
    };
}

console.log(main());

module.exports = main;