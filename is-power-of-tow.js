function powerOf(number) {

    if (number < 1) {
        return false
    }

    let i = number
    while (i !== 1) {
        if (i % 2 !== 0) {
            console.log('fulse')
            return false
        }
        i = i / 2
    }
    console.log('true')
}


powerOf(5)
powerOf(16)
powerOf(13)
powerOf(8)

//تابع برای ما چک میکنه که ایا عدد عددیست که به توان دو رسیده یا خیر