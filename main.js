const componentToHex = (e) => {
    const hex = e.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

const rgbToHex = (r, g, b) => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

generateColors = () => {
    const [r, g, b] = Math.random(0, 256);
    let newColor = document.getElementById('color-test');
    newColor.innerText = "Hello"
}


const len = document.getElementsByClassName('color-block').length;

for (let i = 0; i < len - 1; i++) {
    let elem = document.getElementById("b" + (i + 1));
    const bg = window.getComputedStyle(elem).backgroundColor;
    const rgbNumbers = bg.slice(4, -1);
    const [r, g, b] = rgbNumbers.split(',').map(val => parseInt(val.trim()));

    const hex = rgbToHex(r, g, b);
    const comp = rgbToHex(255 - r, 255 - g, 255 - b);
    
    const colorPar = document.getElementsByClassName('hash-code');

    colorPar[i].innerText = hex;
    
    colorPar[i].style.color = comp;
}

