// Fungsi utilitas untuk validasi
function validateInputs(inputs) {
  for (const input of inputs) {
    if (isNaN(input.value)) {
      document.getElementById(
        input.outputDiv
      ).innerHTML = `<div class="error">Error: Harap masukkan angka yang valid di semua kolom.</div>`;
      return false;
    }
  }
  return true;
}

// Sifat 1: Perkalian
function hitungPerkalian() {
  const basis = parseFloat(document.getElementById("kali_basis").value);
  const m = parseFloat(document.getElementById("kali_m").value);
  const n = parseFloat(document.getElementById("kali_n").value);
  const outputDiv = document.getElementById("output_kali");

  if (isNaN(basis) || isNaN(m) || isNaN(n)) {
    outputDiv.innerHTML = `<div class="error">Error: Harap masukkan angka yang valid.</div>`;
    return;
  }

  const pangkatHasil = m + n;
  const hasilAkhir = Math.pow(basis, pangkatHasil);

  outputDiv.innerHTML = `
        <h4>Hasil Akhir: ${hasilAkhir}</h4>
        <b>Langkah-langkah:</b><br>
        1. Soal: ${basis}<sup>${m}</sup> &times; ${basis}<sup>${n}</sup><br>
        2. Terapkan sifat perkalian (pangkat dijumlahkan): ${basis}<sup>(${m} + ${n})</sup><br>
        3. Jumlahkan pangkat: ${basis}<sup>${pangkatHasil}</sup><br>
        4. Hasil perhitungan: <strong>${hasilAkhir}</strong>
    `;
}

// Sifat 2: Pembagian
function hitungPembagian() {
  const basis = parseFloat(document.getElementById("bagi_basis").value);
  const m = parseFloat(document.getElementById("bagi_m").value);
  const n = parseFloat(document.getElementById("bagi_n").value);
  const outputDiv = document.getElementById("output_bagi");

  if (isNaN(basis) || isNaN(m) || isNaN(n)) {
    outputDiv.innerHTML = `<div class="error">Error: Harap masukkan angka yang valid.</div>`;
    return;
  }
  if (basis === 0 && m - n <= 0) {
    outputDiv.innerHTML = `<div class="error">Error: Pembagian dengan basis 0 tidak terdefinisi.</div>`;
    return;
  }

  const pangkatHasil = m - n;
  const hasilAkhir = Math.pow(basis, pangkatHasil);

  outputDiv.innerHTML = `
        <h4>Hasil Akhir: ${hasilAkhir}</h4>
        <b>Langkah-langkah:</b><br>
        1. Soal: ${basis}<sup>${m}</sup> / ${basis}<sup>${n}</sup><br>
        2. Terapkan sifat pembagian (pangkat dikurangkan): ${basis}<sup>(${m} - ${n})</sup><br>
        3. Kurangkan pangkat: ${basis}<sup>${pangkatHasil}</sup><br>
        4. Hasil perhitungan: <strong>${hasilAkhir}</strong>
    `;
}

// Sifat 3: Perpangkatan
function hitungPerpangkatan() {
  const basis = parseFloat(document.getElementById("pangkat_basis").value);
  const m = parseFloat(document.getElementById("pangkat_m").value);
  const n = parseFloat(document.getElementById("pangkat_n").value);
  const outputDiv = document.getElementById("output_pangkat");

  if (isNaN(basis) || isNaN(m) || isNaN(n)) {
    outputDiv.innerHTML = `<div class="error">Error: Harap masukkan angka yang valid.</div>`;
    return;
  }

  const pangkatHasil = m * n;
  const hasilAkhir = Math.pow(basis, pangkatHasil);

  outputDiv.innerHTML = `
        <h4>Hasil Akhir: ${hasilAkhir}</h4>
        <b>Langkah-langkah:</b><br>
        1. Soal: (${basis}<sup>${m}</sup>)<sup>${n}</sup><br>
        2. Terapkan sifat perpangkatan (pangkat dikalikan): ${basis}<sup>(${m} &times; ${n})</sup><br>
        3. Kalikan pangkat: ${basis}<sup>${pangkatHasil}</sup><br>
        4. Hasil perhitungan: <strong>${hasilAkhir}</strong>
    `;
}

// Sifat 4: Pangkat Nol
function hitungPangkatNol() {
  const basis = parseFloat(document.getElementById("nol_basis").value);
  const outputDiv = document.getElementById("output_nol");

  if (isNaN(basis)) {
    outputDiv.innerHTML = `<div class="error">Error: Harap masukkan basis yang valid.</div>`;
    return;
  }
  if (basis === 0) {
    outputDiv.innerHTML = `<div class="error">Error: 0<sup>0</sup> tidak terdefinisi.</div>`;
    return;
  }

  outputDiv.innerHTML = `
        <h4>Hasil Akhir: 1</h4>
        <b>Langkah-langkah:</b><br>
        1. Soal: ${basis}<sup>0</sup><br>
        2. Menurut sifat pangkat nol, setiap bilangan (selain 0) yang dipangkatkan 0 hasilnya adalah 1.<br>
        3. Hasil: <strong>1</strong>
    `;
}

// Sifat 5: Pangkat Negatif
function hitungPangkatNegatif() {
  const basis = parseFloat(document.getElementById("neg_basis").value);
  const n = parseFloat(document.getElementById("neg_n").value);
  const outputDiv = document.getElementById("output_neg");

  if (isNaN(basis) || isNaN(n)) {
    outputDiv.innerHTML = `<div class="error">Error: Harap masukkan angka yang valid.</div>`;
    return;
  }
  if (basis === 0) {
    outputDiv.innerHTML = `<div class="error">Error: Basis tidak boleh 0 untuk pangkat negatif.</div>`;
    return;
  }

  const penyebut = Math.pow(basis, n);
  const hasilAkhir = 1 / penyebut;

  outputDiv.innerHTML = `
        <h4>Hasil Akhir: ${hasilAkhir}</h4>
        <b>Langkah-langkah:</b><br>
        1. Soal: ${basis}<sup>-${n}</sup><br>
        2. Ubah ke bentuk pangkat positif: 1 / ${basis}<sup>${n}</sup><br>
        3. Hitung nilai penyebut: 1 / ${penyebut}<br>
        4. Hasil: <strong>${hasilAkhir}</strong>
    `;
}

// Sifat 6: Pangkat Pecahan
function hitungPangkatPecahan() {
  const basis = parseFloat(document.getElementById("pecahan_basis").value);
  const m = parseFloat(document.getElementById("pecahan_m").value);
  const n = parseFloat(document.getElementById("pecahan_n").value);
  const outputDiv = document.getElementById("output_pecahan");

  if (isNaN(basis) || isNaN(m) || isNaN(n)) {
    outputDiv.innerHTML = `<div class="error">Error: Harap masukkan angka yang valid.</div>`;
    return;
  }
  if (n === 0) {
    outputDiv.innerHTML = `<div class="error">Error: Penyebut pangkat (n) tidak boleh 0.</div>`;
    return;
  }
  if (basis < 0 && n % 2 === 0) {
    outputDiv.innerHTML = `<div class="error">Error: Akar genap dari bilangan negatif tidak menghasilkan bilangan real.</div>`;
    return;
  }

  const pangkatDalam = Math.pow(basis, m);
  // Math.pow(x, 1/y) adalah cara menghitung akar pangkat y dari x
  const hasilAkhir = Math.pow(pangkatDalam, 1 / n);

  outputDiv.innerHTML = `
        <h4>Hasil Akhir: ${hasilAkhir}</h4>
        <b>Langkah-langkah:</b><br>
        1. Soal: ${basis}<sup>${m}/${n}</sup><br>
        2. Ubah ke bentuk akar: <sup>${n}</sup>√(${basis}<sup>${m}</sup>)<br>
        3. Hitung pangkat di dalam akar: <sup>${n}</sup>√(${pangkatDalam})<br>
        4. Hasil perhitungan akar: <strong>${hasilAkhir}</strong>
    `;
}
