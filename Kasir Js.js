let subtotal = document.getElementById('subtotal');
let diskon = document.getElementById('diskon');
let bayar = document.getElementById('bayar');
let ppn = document.getElementById('ppn');
let total = document.getElementById('total');


let jumlahA = document.getElementById('jumlahA');
let jumlahB = document.getElementById('jumlahB');
let jumlahC = document.getElementById('jumlahC');
let jumlahD = document.getElementById('jumlahD');
let jumlahE = document.getElementById('jumlahE');
let jumlahF = document.getElementById('jumlahF');
let jumlahG = document.getElementById('jumlahG');
    

const hargaA = 250000;
const hargaB = 250000;
const hargaC = 250000;
const hargaD = 250000;
const hargaE = 250000;
const hargaF = 250000;
const hargaG = 250000;


function proses(){
        return subtotal.value = eval (jumlahA.value*hargaA 
            + jumlahB.value*hargaB + jumlahC.value*hargaC + 
            jumlahD.value*hargaD + jumlahE.value*hargaE + jumlahF.value*hargaF + jumlahG.value*hargaG);
}

function hitungDiskon(){
    if (subtotal.value >= 1000000 && subtotal.value < 2000000){
        return diskon.value = '5%';
    }else if (subtotal.value >= 2000000 && total.value < 3000000){
        return diskon.value = '7,5%';
    }else if (subtotal.value >= 3000000){
        return diskon.value = '10%';
    } else{
        return diskon.value = '0%';
}}

function hitungBayar(){
    if (subtotal.value >= 1000000 && subtotal.value < 2000000){
        return bayar.value = eval (subtotal.value * 0.95);
    }else if (subtotal.value >= 2000000 && subtotal.value < 3000000){
        return  bayar.value = eval (subtotal.value * 0.925);
    }else if (subtotal.value >= 3000000){
        return  bayar.value = eval (subtotal.value * 0.9);
    } else{
        return bayar.value = subtotal.value;
}}

function hitungPpn(){
    return ppn.value = '10%';
}

function hitungTotal(){
    return total.value = eval (parseInt(bayar.value) + (parseInt(bayar.value)/10));
}

function messageDiskon(){
    if (subtotal.value >= 1000000 && subtotal.value < 2000000){
        alert('Selamat Anda Mendapatkan Diskon 5%!');
    }else if (subtotal.value >= 2000000 && total.value < 3000000){
        alert('Selamat Anda Mendapatkan Diskon 7,5%!');
    }else if (subtotal.value >= 3000000){
        alert('Selamat Anda Mendapatkan Diskon 10%!');
}}

function jumlah(){
    proses();
    hitungDiskon();
    hitungBayar();
    hitungPpn();
    hitungTotal();
    messageDiskon();
}

