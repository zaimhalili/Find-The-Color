const componentToHex = (c) => {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

const rgbToHex = (r, g, b) => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}  

generateColors = () => {
    const elem = document.getElementById('2');
    const bg = window.getComputedStyle(elem).backgroundColor;
    alert(rgbToHex(bg));
}