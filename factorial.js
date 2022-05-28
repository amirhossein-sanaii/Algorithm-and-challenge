function factorial(number) {

    let value = 1
    for (let index = 2; index <= number; index++) {
        value = value * index
    }
    console.log(value)
}
factorial(7)


// fact(4) = 5*4*3*2=120
// fact(7) = 7*6*5*4*3*2*1=5040
//عملیات بالا رو برای ما انجام میده