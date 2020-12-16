var basket = {
    summary: function(){
        let sum = 0;
        a = (Object.values(basket)).slice(1)
        for (let key in a) {
            sum += a[key];  
        }        
        return sum
    }        
}

// let basket1 = { 'pen': 100, 'marker': 150, 'book': 450, 'case': 120 }
// let basket2 = { 'carrot': 15, 'pineapple': 90, 'pear': 20, 'watermelon': 90, 'lemon': 75 }

basket.pen = 100
basket.marker = 150
basket.book = 450
basket.case = 120

console.log(basket)
console.log(basket.summary())
