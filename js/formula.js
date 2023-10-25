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

const toggleLuas = () => {
    const luas = document.getElementById("form-luas");
    const kel = document.getElementById("form-kel");

    kel.style.display = "inline-block";
    luas.style.display = "none";
}


const togglekel = () => {
    const luas = document.getElementById("form-luas");
    const kel = document.getElementById("form-kel");

    luas.style.display = "inline-block";
    kel.style.display = "none";
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
        document.getElementById('step1').innerHTML = panjang+ " x " +lebar+ " = "+ step1;
        document.getElementById('hasil').value = hasil;
        }
}

countpersegikeliling = () => {
    let panjang = parseFloat(document.getElementById('panjang-kel').value);
    let lebar = parseFloat(document.getElementById('lebar-kel').value);

    if (isNaN(panjang) || isNaN(lebar)) {
        alert('Form tidak lengkap');
        return;
    }
    else{
        toggleDiv();
        let step1 = panjang * 2 
        let step2 =  lebar * 2;
        let hasil = (panjang * 2) +  (lebar * 2);
        document.getElementById('step1').innerHTML = " ( "+panjang+" x "+2+" ) "+" ( "+lebar+" x "+2+" ) "+" = "+ step1 + " + " +step2 + " = " + hasil;
        document.getElementById('hasil-keliling').value = hasil;
        }
}

countsegitiga = () => {
    let alas = parseFloat(document.getElementById('alas').value);
    let tinggi = parseFloat(document.getElementById('tinggi').value);
    
    if (isNaN(alas) || isNaN(tinggi)) {
        alert('Form tidak lengkap');
        return;
    }
    else{
        toggleDiv();
        let step1 = alas * tinggi;
        let hasil = alas * tinggi / 2;
        document.getElementById('step1').innerHTML = alas+ " x "+tinggi+ " = "+ step1;
        document.getElementById('step2').innerHTML = step1+ " : 2"+  " = "+ hasil;
        document.getElementById('hasil').value = hasil;
        }
}


countsegitigakeliling = () => {
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert('Form tidak lengkap');
        return;
    }
    else{
        toggleDiv();
        let hasil = a+b+c;
        document.getElementById('step1').innerHTML = a+ " + "+b+ " + " +c+ " = "+ hasil;
        document.getElementById('step2').innerHTML = "";
        document.getElementById('hasil-keliling').value = hasil;
    }
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
        document.getElementById('step1').innerHTML = radius + " x " + radius + " = "+ step1;
        document.getElementById('step2').innerHTML = step1+ " x " +  "π" +" = "+ step2;
        document.getElementById('hasil').value = hasil;
        }
}


countlingkarankeliling = () => {
    let radius = parseFloat(document.getElementById('radius-keliling').value);
    
    if (isNaN(radius)) {
        alert('Form tidak lengkap');
        return;
    }
    else{
        toggleDiv();
        let step1 = radius * 2;
        let step2 = step1 * Math.PI;
        let hasil = 2 * Math.PI * radius;
        document.getElementById('step1').innerHTML = "2 x "+radius + " = "+ step1;
        document.getElementById('step2').innerHTML = "π x "+step1+ " = "+ step2;
        document.getElementById('hasil-keliling').value = hasil;
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
        document.getElementById('step1').innerHTML = d1+ " x " +d2+ " = "+ step1;
        document.getElementById('step2').innerHTML = step1 + " : 2"+ " = " + step2;
        document.getElementById('hasil').value = hasil;
    }
}


countbelahketupatkeliling = () => {
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);
    let d = parseFloat(document.getElementById('d').value);
    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
        alert('Form tidak lengkap');
        return;
    }
    else{
        toggleDiv();
        let hasil = a+b+c+d;
        document.getElementById('step1').innerHTML = a+ " + "+b+ " + " +c+ " + " +d+ " = "+ hasil;
        document.getElementById('step2').innerHTML = "";
        document.getElementById('hasil-keliling').value = hasil;
    }
}

counttrapesium = () => {
    let s1 = parseFloat(document.getElementById('s1').value);
    let s2 = parseFloat(document.getElementById('s2').value);
    let tinggi = parseFloat(document.getElementById('tinggi').value);

    if (isNaN(s1) || isNaN(s2) || isNaN(tinggi)) {
        alert('Form tidak lengkap');
        return;
    }
    else{
        toggleDiv();
        let step1 = s1+s2;
        let step2 = step1 * tinggi
        let hasil = (s1 + s2) * tinggi / 2;
        document.getElementById('step1').innerHTML = s1+ " + " +s2+ " = "+ step1;
        document.getElementById('step2').innerHTML = step1 + " x "+ tinggi+ " = " + step2;
        document.getElementById('step3').innerHTML = step2 + " : 2 " + " = " + hasil;
        document.getElementById('hasil').value = hasil;
    }
}

counttrapesiumkeliling = () => {
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);
    let d = parseFloat(document.getElementById('d').value);
    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
        alert('Form tidak lengkap');
        return;
    }
    else{
        toggleDiv();
        let hasil = a+b+c+d;
        document.getElementById('step1').innerHTML = a+ " + "+b+ " + " +c+ " + " +d+ " = "+ hasil;
        document.getElementById('step2').innerHTML = " ";
        document.getElementById('step3').innerHTML = " ";
        document.getElementById('hasil-keliling').value = hasil;
    }
}