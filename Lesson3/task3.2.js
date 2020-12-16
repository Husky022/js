let basket = { 'pen': 100, 'marker': 150, 'book': 450, 'case': 120 }

let sum = 0;
for (let key in basket) {
    sum += basket[key];
}

console.log(sum)