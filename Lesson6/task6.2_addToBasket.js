var toBasket = {};

document.querySelector('#bbtn1')
    .addEventListener('click', (e) => {
        e.stopPropagation()
        const sumBusket = document.querySelector('#sumProducts');
        const count = Number(sumBusket.textContent);
        sumBusket.textContent = count + Product[0][1];
        toBasket.Product[0][0] = Product[0][1]; //  Uncaught TypeError: Cannot read property '0' of undefined
    })


    document.querySelector('#bbtn2')
    .addEventListener('click', (e) => {
        e.stopPropagation()
        const sumBusket = document.querySelector('#sumProducts');
        const count = Number(sumBusket.textContent);
        sumBusket.textContent = count + Product[1][1];        
        toBasket.Product[1][0] = Product[1][1]; //  Uncaught TypeError: Cannot read property '1' of undefined
    })        

    document.querySelector('#bbtn3')
    .addEventListener('click', (e) => {
        e.stopPropagation()
        const sumBusket = document.querySelector('#sumProducts');
        const count = Number(sumBusket.textContent);
        sumBusket.textContent = count + Product[2][1];
        toBasket.Product[2][0] = Product[2][1]; //  Uncaught TypeError: Cannot read property '2' of undefined
    })

    document.querySelector('#bbtn4')
    .addEventListener('click', (e) => {
        e.stopPropagation()
        const sumBusket = document.querySelector('#sumProducts');
        const count = Number(sumBusket.textContent);
        sumBusket.textContent = count + Product[3][1];
        toBasket.Product[3][0] = Product[3][1]; //  Uncaught TypeError: Cannot read property '3' of undefined
    })

    document.querySelector('#bbtn5')
    .addEventListener('click', (e) => {
        e.stopPropagation()
        const sumBusket = document.querySelector('#sumProducts');
        const count = Number(sumBusket.textContent);
        sumBusket.textContent = count + Product[4][1];
        toBasket.Product[4][0] = Product[4][1]; //  Uncaught TypeError: Cannot read property '4' of undefined
    })