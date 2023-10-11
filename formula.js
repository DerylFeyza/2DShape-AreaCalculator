countpersegi = () =>{
  let panjang = document.getElementById('panjang').value;
  let lebar = document.getElementById('lebar').value;
  let hasil = panjang * lebar;

  document.getElementById('hasil').value = hasil;
}