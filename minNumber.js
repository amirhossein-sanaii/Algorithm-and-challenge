const array = [4, 7, 0, -1, -5, 5, 1, 4]

function teenNumber(array) {
    let number = 0
    for (const item of array) {
        if (item < number) {
            number = item
        }
    }
    console.log(number)
}
teenNumber(array)

//کوچک ترین مقدار ارایه را برمیگرداند