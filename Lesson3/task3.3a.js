function countBasketPrice(a){
    let sum = 0;
    for (let key in a) {
        sum += a[key];
    }
    return sum
}



let basket1 = { 'pen': 100, 'marker': 150, 'book': 450, 'case': 120 }
let basket2 = { 'carrot': 15, 'pineapple': 90, 'pear': 20, 'watermelon': 90, 'lemon': 75 }

console.log(countBasketPrice(basket1))
console.log(countBasketPrice(basket2))