var i = 0;
while (i <= 100) {
    let flag = false;
    for (let k = 2; k < i; k++) {
        if (i % k == 0) {
            flag = true
            break;
        }
    }
    if (flag == false) {
        console.log(i);
    }
    i++;
}
