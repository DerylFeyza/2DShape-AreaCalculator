countpersegi = () => {
let panjang = parseFloat(document.getElementById('panjang').value);
let lebar = parseFloat(document.getElementById('lebar').value);
let hasil = panjang * lebar;

document.getElementById('hasil').value = hasil;
}

countsegitiga = () => {
let alas = parseFloat(document.getElementById('alas').value);
let tinggi = parseFloat(document.getElementById('tinggi').value);
let hasil = alas * tinggi / 2;

document.getElementById('hasil').value = hasil;
}

countlingkaran = () => {
let radius = parseFloat(document.getElementById('radius').value);
let hasil = Math.PI * (radius * radius);

document.getElementById('hasil').value = hasil;
}

countbelahketupat = () => {
let d1 = parseFloat(document.getElementById('d1').value);
let d2 = parseFloat(document.getElementById('d2').value);
let hasil = d1 * d2 / 2;

document.getElementById('hasil').value = hasil;
}

counttrapesium = () => {
let s1 = parseFloat(document.getElementById('s1').value);
let s2 = parseFloat(document.getElementById('s2').value);
let tinggi = parseFloat(document.getElementById('tinggi').value);

let hasil = (s1 + s2) * tinggi / 2;

document.getElementById('hasil').value = hasil;
}
