//1
function writeCell(index, folder) {
    var td = document.createElement("td");
    var img = document.createElement("img");
    img.setAttribute("src", folder + "/" + index + ".png");
    img.setAttribute("width", 200);
    img.setAttribute("height", 200);
    td.appendChild(img);
    return td;
}

//2
function writeRow(x, imgIndex, folder) {
    var row = document.createElement("tr");
    for (var i = 0; i < x; i++) {
        var td = writeCell(imgIndex, folder);
        row.appendChild(td);
    }
    return row;
}

//3
function writeTable(x, imgIndex) {
    var table = document.createElement("table");
    for(var i = 0; i < x; i++) {
        var tr = writeRow(x, imgIndex, "rabbit");
        table.appendChild(tr);
    }
    
    for(var i = 0; i < x; i++) {
        var tr = writeRow(x, imgIndex, "dog");
        table.appendChild(tr);
    }
    document.body.appendChild(table); 
}

writeTable(3, 2);