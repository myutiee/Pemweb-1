//menghitung biaya parkir
function hitungBiayaParkir(){
    let jamMasuk = document.getElementById('jam_masuk').value
    let jamKeluar = document.getElementById('jam_keluar').value
    let lamaparkir = jamKeluar - jamMasuk
    console.log(lamaparkir);

    //Biaya 2 jam pertama
    let biayaparkir = 3000
    lamaparkir -= 2
   
   //hitung sisa jam
   if(lamaparkir > 0) {
        biayaparkir = biayaparkir + (lamaparkir * 1000)
   }
   console.log(biayaparkir)
   //Tampilkan hasiln ke dalam html
   document.getElementById('biaya_parkir').innerHTML = biayaparkir
}