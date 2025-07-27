const componentToHex = (e) => {
    const hex = e.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

const rgbToHex = (r, g, b) => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

generateColors = () => {
    let newR = Math.floor(Math.random() * 255), newG = Math.floor(Math.random() * 255), newB = Math.floor(Math.random() * 255);
    let newColor = document.getElementById('color-test');
    const hexNewColor = rgbToHex(newR, newG, newB);
    newColor.style.backgroundColor = hexNewColor;

    document.getElementById('generate-colors-hex').innerText = hexNewColor;
}


const len = document.getElementsByClassName('color-block').length;

for (let i = 0; i < len; i++) {
    let elem = document.getElementById("b" + (i + 1));
    const bg = window.getComputedStyle(elem).backgroundColor;
    const rgbNumbers = bg.slice(4, -1);
    const [r, g, b] = rgbNumbers.split(',').map(val => parseInt(val.trim()));

    const hex = rgbToHex(r, g, b);

    //complementary-colored text
    // const comp = rgbToHex(255 - r, 255 - g, 255 - b);
    // colorPar[i].style.color = comp;

    const colorPar = document.getElementsByClassName('hash-code');

    colorPar[i].innerText = hex;
}

document.body.onload = createBlock;

createBlock = () => {
    const newColorDiv = document.createElement("div");

    // and give it some content
    // const newContent = document.createTextNode("Hi there and greetings!");

    // add the text node to the newly created div
    // newColorDiv.appendChild(newContent);

    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("b" + (len - 1));
    currentDiv.classList.add("color-block");
    document.body.insertBefore(newColorDiv, currentDiv);
}