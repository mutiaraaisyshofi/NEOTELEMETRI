// FUNGSI 

// Function Declaration
function tampilkanBuku(judul, penulis) {
    return `${judul} oleh ${penulis}`;
}
console.log(tampilkanBuku("Laskar Pelangi", "Andrea Hirata"));

// Arrow Function 
const hitungTotal = (harga, jumlah) => harga * jumlah
console.log(`Total : Rp ${hitungTotal(75000, 3)}`); // Total : Rp 225000

// Default parameter 
function infoBuku(judul = "Tidak diketahui") { 
  return `Buku: ${judul}`; 
} 
console.log(infoBuku());                  // Buku: Tidak diketahui 
console.log(infoBuku("Sang Pemimpi"));    // Buku: Sang Pemimpi