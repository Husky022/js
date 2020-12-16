toBasket ={'Oranges': 100, 'Milk': 120, 'Bread': 150, 'yee': 170} // временная переменная, будто бы я ее передал из другого скрипта 



let basket = {
    summary: function(){
        let sum = 0;
        a = (Object.values(basket)).slice(2)
        for (let key in a) {
            sum += a[key];  
        }        
        return sum
    },
    printBasket: function(){
        var productBascet = document.createElement ("div");
        productBascet.className = "productBascet";
        container.append(productBascet); 
        var number = document.createElement ("div");
        number.className = "cell"            
        productBascet.append(number);
        var bascetName = document.createElement ("div");
        bascetName.className = "mainBasketName";
        number.append(bascetName);
        bascetName.innerText = "Ваша корзина:";
        bascetName.style.fontSize = "30px";
        bascetName.style.textAlign = "center";
        bascetName.style.lineHeight = "45px";             
        bascetName.style.fontFamily = "Arial, Helvetica, sans-serif";
        bascetName.style.color = "rgb(223, 111, 111)";
        if (Object.values(basket).length < 3){
            number = document.createElement ("div");
            number.className = "cell"            
            productBascet.append(number);
            number.style.background = "white";
            number.innerText = "Ваша корзина пуста";
            number.style.fontSize = "25px";
            number.style.textAlign = "center";
            number.style.lineHeight = "45px";             
            number.style.fontFamily = "Arial, Helvetica, sans-serif";
            number.style.color = "rgb(223, 111, 111)";
        } else {
            for(i=3; i<=Object.values(basket).length; i++){
                number = document.createElement("div");
                number.className = "cell"
                number.setAttribute("id", 'Product' + (i - 2));    
                productBascet.append(number);
                bascetName = document.createElement("div");
                bascetName.className = "basketName";
                number.append(bascetName);
                var productNumber = document.createElement("div");
                bascetName.append(productNumber);
                productNumber.className = "cellProductNumber"
                productNumber.innerText = i - 2;
                productNumber.style.fontSize = "25px";
                productNumber.style.textAlign = "center";
                productNumber.style.lineHeight = "40px";             
                productNumber.style.fontFamily = "Arial, Helvetica, sans-serif";
                productNumber.style.color = "rgb(223, 111, 111)";
                var productText = document.createElement("div");
                bascetName.append(productText);
                productText.className = "cellProductText"
                productText.innerText = (Object.keys(basket))[i - 1];
                productText.style.fontSize = "25px";
                productText.style.textAlign = "left";
                productText.style.lineHeight = "40px";             
                productText.style.fontFamily = "Arial, Helvetica, sans-serif";
                productText.style.color = "rgb(223, 111, 111)";
                var productPrice = document.createElement("div");
                bascetName.append(productPrice);
                productPrice.className = "cellProductPrice"
                productPrice.innerText = (Object.values(basket))[i - 1];
                productPrice.style.fontSize = "25px";
                productPrice.style.textAlign = "left";
                productPrice.style.lineHeight = "40px";             
                productPrice.style.fontFamily = "Arial, Helvetica, sans-serif";
                productPrice.style.color = "rgb(223, 111, 111)";

            }
            number = document.createElement ("div");
            number.className = "cell"            
            productBascet.append(number);
            number.style.background = "white";
            number.innerText = "Итого: " + basket.summary();
            number.style.fontSize = "30px";
            number.style.textAlign = "center";
            number.style.lineHeight = "45px";             
            number.style.fontFamily = "Arial, Helvetica, sans-serif";
            number.style.color = "rgb(223, 111, 111)";
        }                  
    }        
}


for(i=0; i<=Object.values(toBasket).length; i++){
    basket.Object.keys(toBasket)[i] = Object.values(toBasket)[i]
} //Uncaught TypeError: Cannot read property 'keys' of undefined




basket.printBasket();




