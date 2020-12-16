
				
function createCells () {
    for(var i=1; i<=64; i++){
        var cell = document.createElement ("div");
        cell.className = "cell"
        if((i > 0 && i < 9)||(i > 16 && i < 25)||(i > 32 && i < 41)||(i > 48 && i < 57)) {
            if (i % 2 == 0){
                cell.style.background = "brown";
            } else {
                cell.style.background = "sandybrown";
            }
            cell.setAttribute("id", 'cell-' + i);

        }else {
            if (i % 2 == 0){
                cell.style.background = "sandybrown";
            } else {
                cell.style.background = "brown";
            }
            cell.setAttribute("id", 'cell-' + i);
        }
        playingField.append(cell);
        
    }
}

function insertLetters1 () {
    let a = ['A','B','C','D','E','F','G','H']
    for(var i=1; i<=8; i++){
        var divLetter = document.createElement ("div");        
        divLetter.className = "cell"
        divLetter.setAttribute("id", 'Letter' + i);    
        cellLetters1.append(divLetter);        
        var cellLetter = document.createElement ("p");
        divLetter.append(cellLetter);
        cellLetter.innerText = a[i - 1];
        cellLetter.style.fontSize = "20px";
        cellLetter.style.textAlign = "center"        
        cellLetter.style.fontFamily = "Arial, Helvetica, sans-serif";
        cellLetter.style.color = "sandybrown";
    }    
}

function insertLetters2 () {
    let a = ['A','B','C','D','E','F','G','H']
    for(var i=1; i<=8; i++){
        var divLetter = document.createElement ("div");        
        divLetter.className = "cell"
        divLetter.setAttribute("id", 'Letter' + i);    
        cellLetters2.append(divLetter);        
        var cellLetter = document.createElement ("p");
        divLetter.append(cellLetter);
        cellLetter.innerText = a[i - 1];
        cellLetter.style.fontSize = "20px";
        cellLetter.style.textAlign = "center"        
        cellLetter.style.fontFamily = "Arial, Helvetica, sans-serif";
        cellLetter.style.color = "sandybrown";
    }    
}

function insertNumbers1 () {    
    for(var i=1; i<=8; i++){
        var divNumber = document.createElement ("div");        
        divNumber.className = "cell"
        divNumber.setAttribute("id", 'Number' + i);    
        cellNumbers1.append(divNumber);        
        var cellNumber = document.createElement ("p");
        divNumber.append(cellNumber);
        cellNumber.innerText = i;
        cellNumber.style.fontSize = "20px";
        cellNumber.style.textAlign = "center"        
        cellNumber.style.fontFamily = "Arial, Helvetica, sans-serif";
        cellNumber.style.color = "sandybrown";
    }    
}

function insertNumbers2 () {    
    for(var i=1; i<=8; i++){
        var divNumber = document.createElement ("div");        
        divNumber.className = "cell"
        divNumber.setAttribute("id", 'Number' + i);    
        cellNumbers2.append(divNumber);        
        var cellNumber = document.createElement ("p");
        divNumber.append(cellNumber);
        cellNumber.innerText = i;
        cellNumber.style.fontSize = "20px";
        cellNumber.style.textAlign = "center"        
        cellNumber.style.fontFamily = "Arial, Helvetica, sans-serif";
        cellNumber.style.color = "sandybrown";
    }    
}

function insertWhites () {    
    let b = [1,8];
    for (i in b){
        var element = document.getElementById("cell-" + b[i]);
        var figure = document.createElement("img");
        element.append(figure);
        figure.setAttribute("src", "w5.png");
        figure.style.width = "50px";
        figure.style.height = "50px"; 
    }
    b = [2,7];
    for (i in b){
        var element = document.getElementById("cell-" + b[i]);
        var figure = document.createElement("img");
        element.append(figure);
        figure.setAttribute("src", "w4.png");
        figure.style.width = "50px";
        figure.style.height = "50px"; 
    }
    b = [3,6];
    for (i in b){
        var element = document.getElementById("cell-" + b[i]);
        var figure = document.createElement("img");
        element.append(figure);
        figure.setAttribute("src", "w3.png");
        figure.style.width = "50px";
        figure.style.height = "50px"; 
    }
    b = [4];
    for (i in b){
        var element = document.getElementById("cell-" + b[i]);
        var figure = document.createElement("img");
        element.append(figure);
        figure.setAttribute("src", "w1.png");
        figure.style.width = "50px";
        figure.style.height = "50px"; 
    }
    b = [5];
    for (i in b){
        var element = document.getElementById("cell-" + b[i]);
        var figure = document.createElement("img");
        element.append(figure);
        figure.setAttribute("src", "w2.png");
        figure.style.width = "50px";
        figure.style.height = "50px";
    } 
    b = [9,10,11,12,13,14,15,16];
    for (i in b){
        var element = document.getElementById("cell-" + b[i]);
        var figure = document.createElement("img");
        element.append(figure);
        figure.setAttribute("src", "w6.png");
        figure.style.width = "50px";
        figure.style.height = "50px"; 
    }   

}

function insertBlacks () {    
    let b = [57,64];
    for (i in b){
        var element = document.getElementById("cell-" + b[i]);
        var figure = document.createElement("img");
        element.append(figure);
        figure.setAttribute("src", "b5.png");
        figure.style.width = "50px";
        figure.style.height = "50px"; 
    }
    b = [58,63];
    for (i in b){
        var element = document.getElementById("cell-" + b[i]);
        var figure = document.createElement("img");
        element.append(figure);
        figure.setAttribute("src", "b4.png");
        figure.style.width = "50px";
        figure.style.height = "50px"; 
    }
    b = [59,62];
    for (i in b){
        var element = document.getElementById("cell-" + b[i]);
        var figure = document.createElement("img");
        element.append(figure);
        figure.setAttribute("src", "b3.png");
        figure.style.width = "50px";
        figure.style.height = "50px"; 
    }
    b = [60];
    for (i in b){
        var element = document.getElementById("cell-" + b[i]);
        var figure = document.createElement("img");
        element.append(figure);
        figure.setAttribute("src", "b1.png");
        figure.style.width = "50px";
        figure.style.height = "50px"; 
    }
    b = [61];
    for (i in b){
        var element = document.getElementById("cell-" + b[i]);
        var figure = document.createElement("img");
        element.append(figure);
        figure.setAttribute("src", "b2.png");
        figure.style.width = "50px";
        figure.style.height = "50px";
    } 
    b = [49,50,51,52,53,54,55,56];
    for (i in b){
        var element = document.getElementById("cell-" + b[i]);
        var figure = document.createElement("img");
        element.append(figure);
        figure.setAttribute("src", "b6.png");
        figure.style.width = "50px";
        figure.style.height = "50px"; 
    }


}


createCells();
insertLetters1();
insertLetters2();
insertNumbers1();
insertNumbers2();
insertWhites();
insertBlacks();