var number_str = {
    convert: function(a){
        if ((a > 999) || (a < 0)) {
            console.log('Некорректное число. Должно быть от 0 до 999');
            return        
        }
        number_str.units = a % 10;
        number_str.decades = (Math.floor( a / 10 )) % 10;
        number_str.hundreds = Math.floor( a / 100 );
    }        
}

console.log(number_str)

a = 761
number_str.convert(a)
console.log(number_str)
console.log(Object.values(number_str))