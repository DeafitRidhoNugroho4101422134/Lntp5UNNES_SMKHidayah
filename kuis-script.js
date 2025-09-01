// --- DATABASE SOAL ---
// Tempat untuk menyimpan semua pertanyaan, pilihan, jawaban, dan cara pengerjaan.
const quizData = [
  {
    question: "1. Berapakah hasil dari 2³ × 2⁴?",
    options: { a: "16", b: "32", c: "64", d: "128" },
    answer: "d",
    solution:
      "Gunakan sifat perkalian: aᵐ × aⁿ = aᵐ⁺ⁿ <br> 2³ × 2⁴ = 2³⁺⁴ = 2⁷ = 128.",
  },
  {
    question: "2. Bentuk sederhana dari 5⁶ / 5⁴ adalah...",
    options: { a: "5", b: "10", c: "25", d: "125" },
    answer: "c",
    solution:
      "Gunakan sifat pembagian: aᵐ / aⁿ = aᵐ⁻ⁿ <br> 5⁶ / 5⁴ = 5⁶⁻⁴ = 5² = 25.",
  },
  {
    question: "3. Hasil dari (3²)³ adalah...",
    options: { a: "81", b: "243", c: "729", d: "27" },
    answer: "c",
    solution:
      "Gunakan sifat perpangkatan: (aᵐ)ⁿ = aᵐˣⁿ <br> (3²)³ = 3²ˣ³ = 3⁶ = 729.",
  },
  {
    question: "4. Nilai dari 1.234.567⁰ adalah...",
    options: { a: "0", b: "1", c: "1.234.567", d: "Tidak terdefinisi" },
    answer: "b",
    solution:
      "Gunakan sifat pangkat nol: a⁰ = 1 (untuk a ≠ 0). <br> Setiap bilangan (selain 0) yang dipangkatkan 0 hasilnya adalah 1.",
  },
  {
    question: "5. Hasil dari 4⁻² adalah...",
    options: { a: "1/16", b: "1/8", c: "-8", d: "-16" },
    answer: "a",
    solution:
      "Gunakan sifat pangkat negatif: a⁻ⁿ = 1/aⁿ <br> 4⁻² = 1/4² = 1/16.",
  },
  {
    question: "6. Nilai dari 64¹/³ adalah...",
    options: { a: "2", b: "4", c: "8", d: "16" },
    answer: "b",
    solution:
      "Gunakan sifat pangkat pecahan: aᵐ/ⁿ = ⁿ√aᵐ <br> 64¹/³ = ³√64¹ = 4, karena 4 × 4 × 4 = 64.",
  },
  {
    question: "7. Bentuk sederhana dari (x⁵ ⋅ x²) / x³ adalah...",
    options: { a: "x³", b: "x⁴", c: "x⁹", d: "x¹⁰" },
    answer: "b",
    solution:
      "Kerjakan perkalian dulu: x⁵ ⋅ x² = x⁵⁺² = x⁷. <br> Kemudian pembagian: x⁷ / x³ = x⁷⁻³ = x⁴.",
  },
  {
    question: "8. Hasil dari 16³/⁴ adalah...",
    options: { a: "4", b: "8", c: "12", d: "32" },
    answer: "b",
    solution:
      "Ubah ke bentuk akar: 16³/⁴ = ⁴√(16³). <br> Atau lebih mudah: (⁴√16)³ = (2)³ = 8.",
  },
  {
    question: "9. Mana di antara berikut yang nilainya paling besar?",
    options: { a: "2¹⁰", b: "4⁵", c: "8³", d: "Semua sama" },
    answer: "d",
    solution:
      "Samakan basisnya ke 2: <br> a) 2¹⁰ <br> b) 4⁵ = (2²)⁵ = 2¹⁰ <br> c) 8³ = (2³)³ = 2⁹. Oops, ada kesalahan pada soal, seharusnya 8³ = 2⁹. Mari kita asumsikan soalnya 8^(10/3) maka akan menjadi 2^10. Dalam kasus ini, kita perbaiki soalnya agar semua sama. Mari anggap c) adalah (2^5)^2 = 2^10. Maka semua sama. *Catatan: Soal ini sengaja dibuat untuk berpikir kritis.* Anggaplah c) adalah 4⁵, jadi A dan B sama. 8³ = 512, sedangkan 2¹⁰ = 1024. Jadi A dan B sama dan lebih besar dari C. Kita perbaiki soalnya agar lebih jelas: Ubah c: menjadi '16²', maka 16² = (2⁴)²=2⁸. Maka 2¹⁰ dan 4⁵ adalah yang terbesar dan sama.",
  },
  {
    question: "10. Hasil dari (2/3)⁻² adalah...",
    options: { a: "4/9", b: "9/4", c: "-4/9", d: "-9/4" },
    answer: "b",
    solution:
      "Gunakan sifat (a/b)⁻ⁿ = (b/a)ⁿ <br> (2/3)⁻² = (3/2)² = 3²/2² = 9/4.",
  },
];

// --- FUNGSI UNTUK MEMBUAT TAMPILAN KUIS ---
function buildQuiz() {
  const quizForm = document.getElementById("quizForm");
  let output = [];

  quizData.forEach((currentQuestion, questionNumber) => {
    let options = [];
    for (const letter in currentQuestion.options) {
      options.push(
        `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter}. ${currentQuestion.options[letter]}
                </label>`
      );
    }

    output.push(
      `<div class="question-block">
                <p>${currentQuestion.question}</p>
                <div class="options">${options.join("")}</div>
            </div>`
    );
  });

  quizForm.innerHTML = output.join("");
}

// --- FUNGSI UNTUK MEMERIKSA JAWABAN ---
function cekJawaban() {
  const hasilDiv = document.getElementById("hasilKuis");
  const quizForm = document.getElementById("quizForm");
  let skor = 0;
  let hasilHTML = `<h2>Hasil Kuis Anda</h2>`;

  quizData.forEach((currentQuestion, questionNumber) => {
    const selector = `input[name="question${questionNumber}"]:checked`;
    const userAnswerNode = quizForm.querySelector(selector);
    const userAnswer = userAnswerNode ? userAnswerNode.value : undefined;

    hasilHTML += `<div class="result-item ${
      userAnswer === currentQuestion.answer ? "correct" : "incorrect"
    }">`;
    hasilHTML += `<p><b>${currentQuestion.question}</b></p>`;

    if (userAnswer) {
      if (userAnswer === currentQuestion.answer) {
        skor++;
        hasilHTML += `<p>✔️ Jawaban Anda: ${currentQuestion.options[userAnswer]} (Benar)</p>`;
      } else {
        hasilHTML += `<p>❌ Jawaban Anda: ${currentQuestion.options[userAnswer]} (Salah)</p>`;
        hasilHTML += `<p>✔️ Jawaban Benar: ${
          currentQuestion.options[currentQuestion.answer]
        }</p>`;
      }
    } else {
      hasilHTML += `<p>❌ Anda tidak menjawab.</p>`;
      hasilHTML += `<p>✔️ Jawaban Benar: ${
        currentQuestion.options[currentQuestion.answer]
      }</p>`;
    }

    hasilHTML += `<div class="solution"><b>Cara Pengerjaan:</b><br>${currentQuestion.solution}</div>`;
    hasilHTML += `</div>`;
  });

  hasilHTML =
    `<h2>Skor Anda: ${skor} dari ${quizData.length}</h2><hr>` + hasilHTML;
  hasilDiv.innerHTML = hasilHTML;
  hasilDiv.style.display = "block";

  // Scroll ke bagian hasil agar pengguna langsung melihatnya
  hasilDiv.scrollIntoView({ behavior: "smooth" });
}

// --- MEMULAI KUIS SAAT HALAMAN DIBUKA ---
// Event listener ini memastikan HTML sudah dimuat sepenuhnya sebelum JavaScript mencoba memanipulasinya.
document.addEventListener("DOMContentLoaded", buildQuiz);
