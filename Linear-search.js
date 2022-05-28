const array = [7, 8, 5, 4, 1, 2, 6, 9, 3, 0]

function linearSearch(params) {

    for (let item of array) {
        if (params == item) {
            console.log(`${item} finded!`)
            console.log(array.indexOf(item))
            return
        }
    }
    console.log(`${params} 'not dfine'`)
}

linearSearch(15)