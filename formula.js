const toggleDiv = () => {
    const div = document.getElementById("steps");
    const pre = document.getElementById("pre-step");
    
    if (pre !== null) {
        pre.classList.add("fade-out");
        div.style.display = "block";
    }     
    setTimeout(() => {
        if (pre !== null) {
            pre.remove();
        } 
    }, 500);
    setTimeout(() => {
        div.classList.add("fade-in");
    }, 700);
}

const toggleForm = () => {

}

countpersegi = () => {
    let panjang = parseFloat(document.getElementById('panjang').value);
    let lebar = parseFloat(document.getElementById('lebar').value);

    if (isNaN(panjang) || isNaN(lebar)) {
        alert('Form tidak lengkap');
        return;
    }
    else{
        toggleDiv();
        let step1 = panjang * lebar;
        let hasil = panjang * lebar;
        document.getElementById('step1').innerHTML = "Kalikan "+panjang+ " dan " +lebar+ " = "+ step1;
        document.getElementById('hasil').value = hasil;
        }
}

countsegitiga = () => {
    let alas = parseFloat(document.getElementById('alas').value);
    let tinggi = parseFloat(document.getElementById('tinggi').value);
    let hasil = alas * tinggi / 2;

    document.getElementById('hasil').value = hasil;
}

countlingkaran = () => {
    let radius = parseFloat(document.getElementById('radius').value);
    
    if (isNaN(radius)) {
        alert('Form tidak lengkap');
        return;
    }
    else{
        toggleDiv();
        let step1 = radius * radius;
        let step2 = step1 * Math.PI;
        let hasil = Math.PI * (radius * radius);
        document.getElementById('step1').innerHTML = "Kuadratkan "+radius + " = "+ step1;
        document.getElementById('step2').innerHTML = "Kalikan hasil kuadrat dengan nilai Pi : "+step1+ " x " +  "π" +" = "+ step2;
        document.getElementById('hasil').value = hasil;
        }
}

countbelahketupat = () => {
    let d1 = parseFloat(document.getElementById('d1').value);
    let d2 = parseFloat(document.getElementById('d2').value);
    if (isNaN(d1) || isNaN(d2)) {
        alert('Form tidak lengkap');
        return;
    }
    else{
        toggleDiv();
        let step1 = d1 * d2;
        let step2 = step1 /2;
        let hasil = d1 * d2 / 2;
        document.getElementById('step1').innerHTML = "Kalikan "+d1+ " dan " +d2+ " = "+ step1;
        document.getElementById('step2').innerHTML = "Bagi 2 Nilai Perkalian dari step 1 = " + step2;
        document.getElementById('hasil').value = hasil;
        }
}

counttrapesium = () => {
    let s1 = parseFloat(document.getElementById('s1').value);
    let s2 = parseFloat(document.getElementById('s2').value);
    let tinggi = parseFloat(document.getElementById('tinggi').value);

    let step1 = s1+s2;
    let step2 = step1 * tinggi
    let hasil = (s1 + s2) * tinggi / 2;

    document.getElementById('hasil').value = hasil;
}

