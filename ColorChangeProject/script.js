let colorChangeIndex = 0;

function colorChange(){
    var colors = ["red", "blue", "green", "white"]
    document.getElementsByTagName("body")[0].style.background = colors[colorChangeIndex];
    document.getElementsById("color-change-button").style.background = (colorChangeIndex => (#FF0000))
    colorChangeIndex == colors.length ? colorChangeIndex = 0 : colorChangeIndex++;
}

let bodyColor = window.getComputedStyles(document.getElementsByTagName("body")).color;

function rgbaToHex(rgbaColor){
    const rgbaValues = rgbaColor.match(/\d+/g);

}
