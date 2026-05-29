// Promise

function ambilDataBuku() { 
  return new Promise((resolve, reject) => { 
    setTimeout(() => { 
      const berhasil = true; 
  
      if (berhasil) { 
        resolve({ judul: "Laskar Pelangi", penulis: "Andrea Hirata" 
}); 
      } else {
         reject("Gagal mengambil data buku"); 
      } 
    }, 1500); 
  }); 
} 
  
// Menggunakan .then() dan .catch() 
ambilDataBuku() 
  .then((buku) => { 
    console.log("Data buku:", buku); 
  }) 
  .catch((error) => { 
    console.error("Error:", error); 
  }); 
  
console.log("Mengambil data buku...");