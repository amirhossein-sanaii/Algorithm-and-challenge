function numbers(params) {
    let valueOne = params % 3
    let valueTow = params % 2
    if (valueOne >= 1 && valueTow >= 1) {
        console.log("true")
    } else {
        console.log("false")
    }
}
numbers(9)
numbers(5)

//ایا عدد عددی اول است یا خیر