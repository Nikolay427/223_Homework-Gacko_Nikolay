class Rectangle {
constructor (width, height) {
this.per= document.createElement('div');
this.setWidth(width);
this.setHeight(height);
this.per.style.border = '5px solid blue';

document.body.appendChild(this.per);
}

setWidth(width) {
this.per.style.width = width + 'px';
}
getWidth(width) {
return parseInt(this.per.style.width);
}
setHeight(height) {
this.per.style.height = height + 'px';
}
getHeight(height) {
return parseInt(this.per.style.height);
}
}