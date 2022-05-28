function fibonacci(params) {
    let array = [1, 1]
    let x = 1
    let z = 0
    let i = 0
    while (i < params - 1) {
        array.push(array[z] + array[x])
        x++
        z++
        i++
    }
    console.log(array[4])
}
fibonacci(4)
console.log([1, 1, 2, 3, 5, 8, 13])

//مقدار جدید در ارایه حاصل جمع دو مقدار قبل است
//مسعله ریاضی فیبوناچی