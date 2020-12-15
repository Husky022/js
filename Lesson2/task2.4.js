function newRow(a, row=''){    
    var row = a + ' '
    if (a <= 15) {
        newRow(a + 1, row)
    }
    return row
}

console.log(newRow(12))
