// Async/Await

function ambilDataBuku() { 
  return new Promise((resolve) => { 
    setTimeout(() => { 
      resolve({ judul: "Bumi Manusia", penulis: "Pramoedya Ananta Toer" }); 
    }, 1500); 
  }); 
}
  
// Menggunakan async/await 
async function tampilkanBuku() { 
  console.log("Mengambil data buku..."); 
  const buku = await ambilDataBuku(); 
  console.log("Judul  :", buku.judul); 
  console.log("Penulis:", buku.penulis); 
} 
  
tampilkanBuku();
