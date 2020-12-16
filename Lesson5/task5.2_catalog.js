var Product = [];


Product.push(['Oranges', 100, 'products/oranges.jpg']);
Product.push(['Milk', 150, 'products/milk.jpg']);
Product.push(['Bread', 60, 'products/bread.jpg']);
Product.push(['Apples', 120, 'products/apples.png']);
Product.push(['Water', 30, 'products/water.jpg']);

function fillCatalog(arrayProduct){
    for(i=0; i<=(arrayProduct.length - 1); i++){
        var productCard = document.createElement('div');
        productCard.className = 'productCard';
        productCard.setAttribute("id", 'Product' + (i + 1));
        catalog.append(productCard);        
        var productImage = document.createElement('div');
        productImage.className = 'productImage';
        productImage.setAttribute("id", 'Image' + (i + 1));
        productCard.append(productImage);
        var figure = document.createElement("img");
        productImage.append(figure);
        figure.setAttribute("src", Product[i][2]);
        figure.style.width = "80%";
        figure.style.height = "80%";
        figure.style.marginTop = "10%";
        figure.style.marginLeft = "10%";
        var productInfo = document.createElement('div');
        productInfo.className = 'productInfo';
        productInfo.setAttribute("id", 'Info' + (i + 1));
        productCard.append(productInfo);
        var productInfoName = document.createElement('div');
        productInfoName.className = 'productInfoName';
        productInfoName.setAttribute("id", 'InfoName' + (i + 1));
        productInfo.append(productInfoName);
        productInfoName.innerText = Product[i][0];
        productInfoName.style.fontSize = "15px";
        productInfoName.style.textAlign = "center"        
        productInfoName.style.fontFamily = "Arial, Helvetica, sans-serif";
        productInfoName.style.color = "rgb(223, 111, 111)";
        var productInfoPrice = document.createElement('div');
        productInfoPrice.className = 'productInfoPrice';
        productInfoPrice.setAttribute("id", 'InfoPrice' + (i + 1));
        productInfo.append(productInfoPrice);
        productInfoPrice.innerText = Product[i][1];
        productInfoPrice.style.fontSize = "15px";
        productInfoPrice.style.textAlign = "center"        
        productInfoPrice.style.fontFamily = "Arial, Helvetica, sans-serif";
        productInfoPrice.style.color = "rgb(223, 111, 111)";
        var buyButton = document.createElement('div');
        buyButton.className = 'buyButton';
        buyButton.setAttribute("id", 'bbtn' + (i + 1));
        productInfo.append(buyButton);
        figure = document.createElement("img");
        buyButton.append(figure);
        figure.setAttribute("src", "buyButton.jpg");
        figure.style.width = "80%";
        figure.style.height = "80%";
        figure.style.marginTop = "10%";
        figure.style.marginLeft = "10%";


    }
}

fillCatalog(Product);