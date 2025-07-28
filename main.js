const componentToHex = (e) => {
    const hex = e.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

const rgbToHex = (r, g, b) => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function generateColors(){
    let newR = Math.floor(Math.random() * 255), newG = Math.floor(Math.random() * 255), newB = Math.floor(Math.random() * 255);
    let newColor = document.getElementById('color-test');
    const hexNewColor = rgbToHex(newR, newG, newB);
    newColor.style.backgroundColor = hexNewColor;

    document.getElementById('generate-colors-hex').innerText = hexNewColor;
}

const lenColorBlocks = document.getElementsByClassName('color-block').length;
const colorPar = document.getElementsByClassName('hash-code');

document.body.onload = createBlock;

function createBlock() {
    const len = document.getElementsByClassName('color-block').length;
    const newColorDiv = document.createElement("div");
    newColorDiv.id = "b" + len;
    newColorDiv.className = "color-block";

    newColorDiv.innerHTML = `<p class="hash-code">New Color</p>`;

    const colorPicker = document.getElementById("chosen-color");
    const selectedColor = colorPicker.value;
    console.log(selectedColor);
    newColorDiv.style.backgroundColor = selectedColor; // give it a visible default

    const colorsContainer = document.querySelector('.colors');
    colorsContainer.insertBefore(newColorDiv, colorsContainer.lastElementChild);
}


//duhet e para
//sa color-block kena, pa llogarit butonat -> lenColorBlock - 1
//me pjestu 100% me lenColorBlock - 1 ose me id = 1 - 9 me for-loop
//me ndryshu width-in e lenColorBlock - 1



for (let i = 0; i < lenColorBlocks; i++) {
    let elem = document.getElementById("b" + (i + 1));
    const bg = window.getComputedStyle(elem).backgroundColor;
    const rgbNumbers = bg.slice(4, -1);
    const [r, g, b] = rgbNumbers.split(',').map(val => parseInt(val.trim()));

    const hex = rgbToHex(r, g, b);
    //complementary-colored text
    // const comp = rgbToHex(255 - r, 255 - g, 255 - b);
    // colorPar[i].style.color = comp;
    colorPar[i].innerText = hex;
}

