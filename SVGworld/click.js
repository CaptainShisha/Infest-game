let svgMap = document.querySelector("svg");

svgMap.width = window.innerWidth;
svgMap.height = window.innerHeight;

let elements = document.getElementById('europe');
console.log(elements)

function kuro() {
    console.log('kur')
}

elements.addEventListener("click",  kuro)
