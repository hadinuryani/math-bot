const h1 = document.getElementById("h1");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const pilihan = document.getElementById("pilihan");
const hasil1 = document.getElementById("hasil1");

input1.style.display = "none";
input2.style.display = "none";

h1.innerHTML = "<span style='color: blue;'>Menu</span> Perhitungan Luas";

function lingkaran() {
    const r = parseFloat(input1.value);
    return Math.PI * r * r;
}

function segitiga() {
    const a = parseFloat(input1.value);
    const t = parseFloat(input2.value);
    return (a * t) / 2;
}

function persegi() {
    const s = parseFloat(input1.value);
    return s * s;
}

function persegipanjang() {
    const p = parseFloat(input1.value);
    const l = parseFloat(input2.value);
    return p * l;
}

function jajargenjang() {
    const a = parseFloat(input1.value);
    const t = parseFloat(input2.value);
    return a * t;
}

function layangLayang() {
    const d1 = parseFloat(input1.value);
    const d2 = parseFloat(input2.value);
    return (d1 * d2) / 2;
}

function kelilingLingkaran() {
    const r = parseFloat(input1.value);
    return 2 * Math.PI  * r;
}

function kelilingSegitiga() {
    const a = parseFloat(input1.value);
    const b = parseFloat(input1.value);
    const c = parseFloat(input2.value);
    return a + b + c;
}

function kelilingPersegi() {
    const s = parseFloat(input1.value);
    return 4 * s;
}

function kelilingPersegipanjang() {
    const p = parseFloat(input1.value);
    const l = parseFloat(input2.value);
    return 2 *(p + l);
}

function kelilingJajargenjang() {
    const a = parseFloat(input1.value);
    const t = parseFloat(input2.value);
    return 2 * a + t;
}

function kelilingLayangLayang() {
    const a = parseFloat(input1.value);
    const b = parseFloat(input2.value);
    return (a+a)+(b+b)
}





function hitung() {
    let hasil;
    switch (pilihan.value) {
        case "lingkaran":
            hasil = `Luas Lingkaran: ${lingkaran().toFixed(2)}`;
            break;
        case "segitiga":
            hasil = `Luas Segitiga: ${segitiga().toFixed(2)}`;
            break;
        case "persegi":
            hasil = `Luas Persegi: ${persegi()}`;
            break;
        case "persegi panjang":
            hasil = `Luas Persegi Panjang: ${persegipanjang()}`;
            break;
        case "jajargenjang":
            hasil = `Luas Jajargenjang: ${jajargenjang()}`;
            break;
        case "layang-layang":
            hasil = `Luas Layang-Layang: ${layangLayang()}`;
            break;
        case "keliling-lingkaran":
            hasil = `Keliling Lingkaran: ${kelilingLingkaran().toFixed(2)}`;
            break;
        case "keliling-segitiga":
            hasil = `Keliling Segitiga: ${kelilingSegitiga()}`;
            break;
        case "keliling-persegi":
            hasil = `Keliling Persegi: ${kelilingPersegi()}`;
            break;
        case "keliling-persegi panjang":
            hasil = `Keliling Persegi Panjang: ${kelilingPersegipanjang()}`;
            break;
        case "keliling-jajargenjang":
            hasil = `Keliling Jajargenjang: ${kelilingJajargenjang()}`;
            break;
        case "keliling-layang-layang":
            hasil = `Keliling Layang-Layang: ${kelilingLayangLayang()}`;
            break;
        default:
            hasil = "Pilih bentuk terlebih dahulu!";
    }
    hasil1.innerText = hasil;
}

input1.addEventListener("keyup", hitung);
input2.addEventListener("keyup", hitung);

pilihan.addEventListener('change', function () {
    input1.value = "";
    input2.value = "";
    hasil1.innerText = "";
    switch (pilihan.value) {
        case "lingkaran":
            h1.innerHTML = "<span style='color: blue;'>Perhitungan</span>Luas Lingkaran";
            input1.style.display = "block";
            input2.style.display = "none";
            input1.placeholder = "Masukkan jari-jari";
            break;
        case "segitiga":
            h1.innerHTML = "<span style='color: blue;'>Perhitungan</span>Luas Segitiga";
            input1.style.display = "block";
            input2.style.display = "block";
            input1.placeholder = "Masukkan alas";
            input2.placeholder = "Masukkan tinggi";
            break;
        case "persegi":
            h1.innerHTML = "<span style='color: blue;'>Perhitungan</span> Luas Persegi";
            input1.style.display = "block";
            input2.style.display = "none";
            input1.placeholder = "Masukkan sisi";
            break;
        case "persegi panjang":
            h1.innerHTML = "<span style='color: blue;'>Perhitungan</span> Luas Persegi Panjang";
            input1.style.display = "block";
            input2.style.display = "block";
            input1.placeholder = "Masukkan panjang";
            input2.placeholder = "Masukkan lebar";
            break;
        case "jajargenjang":
            h1.innerHTML = "<span style='color: blue;'>Perhitungan</span> Luas Jajargenjang";
            input1.style.display = "block";
            input2.style.display = "block";
            input1.placeholder = "Masukkan alas";
            input2.placeholder = "Masukkan tinggi";
            break;
        case "layang-layang":
            h1.innerHTML = "<span style='color: blue;'>Perhitungan</span> Luas Layang-Layang";
            input1.style.display = "block";
            input2.style.display = "block";
            input1.placeholder = "Masukkan diagonal 1";
            input2.placeholder = "Masukkan diagonal 2";
            break;
        case "keliling-lingkaran":
            h1.innerHTML = "<span style='color: blue;'>Perhitungan</span> Keliling Lingkaran";
            input1.style.display = "block";
            input2.style.display = "none";
            input1.placeholder = "Masukkan jari-jari";
            break;
        case "keliling-segitiga":
            h1.innerHTML = "<span style='color: blue;'>Perhitungan</span> Keliling Segitiga";
            input1.style.display = "block";
            input2.style.display = "block";
            input1.placeholder = "Masukkan alas";
            input2.placeholder = "Masukkan tinggi";
            break;
        case "keliling-persegi":
            h1.innerHTML = "<span style='color: blue;'>Perhitungan</span> Keliling Persegi";
            input1.style.display = "block";
            input2.style.display = "none";
            input1.placeholder = "Masukkan sisi";
            break;
        case "keliling-persegi panjang":
            h1.innerHTML = "<span style='color: blue;'>Perhitungan</span> Keliling Persegi Panjang";
            input1.style.display = "block";
            input2.style.display = "block";
            input1.placeholder = "Masukkan panjang";
            input2.placeholder = "Masukkan lebar";
            break;
        case "keliling-jajargenjang":
            h1.innerHTML = "<span style='color: blue;'>Perhitungan</span> Keliling Jajargenjang";
            input1.style.display = "block";
            input2.style.display = "block";
            input1.placeholder = "Masukkan sisi 1";
            input2.placeholder = "Masukkan sisi 2";
            break;
        case "keliling-layang-layang":
            h1.innerHTML = "<span style='color: blue;'>Perhitungan</span> Keliling Layang-Layang";
            input1.style.display = "block";
            input2.style.display = "block";
            input1.placeholder = "Masukkan sisi a";
            input2.placeholder = "Masukkan sisi b";
            break;
        default:
            h1.innerHTML = "<span style='color: blue;'>Menu</span> Keliling Perhitungan Luas";
            input1.style.display = "none";
            input2.style.display = "none";
    }
});



function namaKaryawan() {
  const nama = document.getElementById("input3").value.trim();
  const gaji = parseInt(document.getElementById("input4").value);
  const hari = parseInt(document.getElementById("input5").value);

  if (!nama || isNaN(gaji) || isNaN(hari) || gaji <= 0 || hari <= 0) {
      alert("Mohon isi semua data dengan benar. Gaji dan hari harus lebih dari 0.");
      return;
  }

  const total = gaji * hari;
  const container = document.querySelector(".content2 .container");
  const hasil2 = document.getElementById("hasil2");
  const backButton = document.getElementById("back-button");

  Array.from(container.children).forEach((child) => {
      if (child.id !== "hasil2" && child.id !== "back-button") {
          child.style.display = "none";
      }
  });

  hasil2.innerHTML = `
      <p>Karyawan bernama <b>${nama}</b> bekerja selama <b>${hari}</b> hari memiliki gaji sebesar <b>Rp ${total.toLocaleString()}</b>.</p>
  `;
  hasil2.style.display = "block";

  backButton.style.display = "block";
}

function kembali() {
  const container = document.querySelector(".content2 .container");
  const hasil2 = document.getElementById("hasil2");
  const backButton = document.getElementById("back-button");

  Array.from(container.children).forEach((child) => {
      if (child.id !== "hasil2" && child.id !== "back-button") {
          child.style.display = "block";
      }
  });

  hasil2.style.display = "none";
  backButton.style.display = "none";

  document.getElementById("input3").value = "";
  document.getElementById("input4").value = "";
  document.getElementById("input5").value = "";
}




const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");
const loaders = document.getElementById("loaders");
const container = document.getElementsByClassName("container");

let init = 0;

const botSay = (data) => {
    return [
        "Hallo, perkenalkan nama saya HD Bot. Siapa nama kamu?",
        `Halo ${data?.nama}, berapa usia kamu?`,
        `Ohh ${data?.usia} yaa, hobi kamu apa ya?`,
        `Wihh sama dong, aku juga hobinya ${data?.hobi}. Btw, punya pacar nggak?`,
        `Owww ${data?.pacar} ya :)`
    ];
};

pertanyaan.innerHTML = botSay()[0];

let usersData = {};

function botStart() {
    if (jawaban.value.length < 1) return alert("Silakan isi jawaban dulu.");
    init++;
    if (init === 1) {
        botDelay({ nama: jawaban.value });
    } else if (init === 2) {
        botDelay({ usia: jawaban.value });
    } else if (init === 3) {
        botDelay({ hobi: jawaban.value });
    } else if (init === 4) {
        botDelay({ pacar: jawaban.value });
    } else if (init === 5) {
        finishing();
    } else {
        botEnd();
    }
}

function botDelay(jawabanUser) {
    usersData = { ...usersData, ...jawabanUser };
    
    loaders.style.display = "block";
    container[0].style.filter = "blur(8px)";
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(usersData)[init];
        loaders.style.display = "none";
        container[0].style.filter = "none";
    }, 1000);
    jawaban.value = "";
}

function finishing() {
    pertanyaan.innerHTML = `Yaudah kalau gitu. Udah yaa. Thank you yaa ${usersData.nama} udah main ke bot ini 😊 Lain kali kita main bareng lagi ya!`;
    jawaban.value = "Siap, thanks juga!";
}

function botEnd() {
    alert(`Terima kasih ${usersData.nama} sudah berkunjung. Anda akan diarahkan ke halaman utama.`);
    window.location.reload();
}



