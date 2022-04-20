
function zoomFontSize(size, id) { //input: size:number 
    var tag = domID(id);
    var fontSize = Number(tag.style.fontSize.replace('px',''));
    fontSize += size;
    tag.style.fontSize = fontSize +'px'
}


//Viết hàm trả về 1 thẻ sau khi dom
function domID(id) { //id = 'abc' | id = 'xyz'
    return document.getElementById(id);
}