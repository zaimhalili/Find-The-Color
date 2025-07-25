const componentToHex = (e) => {
    const hex = e.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
let a = 0;
const rgbToHex = (r, g, b) => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

// generateColors = () => {

// }
const len = document.getElementsByClassName('color-block').length;

for (let i = 0; i < len - 1; i++) {
    let elem = document.getElementById(i + 1);
    const bg = window.getComputedStyle(elem).backgroundColor;
    const rgbNumbers = bg.slice(4, -1);
    const [r, g, b] = rgbNumbers.split(',').map(val => parseInt(val.trim()));
    alert(rgbToHex(r, g, b));
    let parInDiv = document.getElementById(i + 1 + "." + 1);
    parInDiv.innerText = rgbToHex(r, g, b).toString();
    parInDiv = window.getComputedStyle(elem).fontSize = 'x-large';
}
