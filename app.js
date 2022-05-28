const array = [4, 8, 2, 1, 7]

function sort(params) {

    const resultArray = [...params]

    for (let ouder = 0; ouder < resultArray.length; ouder++) {
        let elementOuder = resultArray[ouder];

        for (let inner = elementOuder + 1; inner < resultArray.length; inner++) {
            let elementInner = resultArray[inner];

            if (elementOuder > elementInner) {
                resultArray[ouder] = elementInner
                resultArray[inner] = elementOuder

                elementOuder = resultArray[inner]
                elementInner = resultArray[ouder]
            }
        }

    }
    return resultArray
}

console.log(sort(array))