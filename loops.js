// Loops (Perulangan)
let daftarBuku = ["Laskar Pelangi", "Bumi Manusia", "Sang Pemimpi"];

// For Loop Biasa
console.log("==== FOR LOOP ====");
for (let i = 0; i < daftarBuku.length; i++){
    console.log(`${i + 1}. ${daftarBuku[i]}`);
}

// For... of Loop (Cara Modern)
console.log("\n==== FOR... OF LOOP ====");
for (let buku of daftarBuku) { 
  console.log(`- ${buku}`); 
}
