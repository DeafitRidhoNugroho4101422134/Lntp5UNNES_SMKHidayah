document.addEventListener("DOMContentLoaded", () => {
  const selectionContainer = document.getElementById("selection-container");
  if (!selectionContainer) return;

  const cards = document.querySelectorAll(".kartu-kelas");
  const backButton = document.getElementById("tombol-kembali");
  const pageTitle = document.getElementById("page-title");
  const pageSubtitle = document.getElementById("page-subtitle");

  const subjectName = document.body.dataset.subject || "Mata Pelajaran";
  const originalTitle = pageTitle.textContent;
  const originalSubtitle = pageSubtitle.textContent;

  // --- FUNGSI UTAMA UNTUK MEMILIH KELAS ---
  cards.forEach((card) => {
    card.addEventListener("click", (event) => {
      // Jangan aktifkan kartu jika sudah aktif atau jika yang diklik adalah link di dalamnya
      if (card.classList.contains("aktif") || event.target.closest("a")) {
        return;
      }

      // Aktifkan kartu yang dipilih
      card.classList.add("aktif");
      card.querySelector(".daftar-materi").classList.add("is-visible");

      // Sembunyikan kartu lain
      cards.forEach((otherCard) => {
        if (otherCard !== card) {
          otherCard.classList.add("non-aktif");
        }
      });

      // Perbarui judul & tampilkan tombol kembali
      pageTitle.textContent = `${subjectName} Kelas ${card.dataset.kelas}`;
      pageSubtitle.textContent = "Silakan pilih topik materi di bawah ini.";
      backButton.classList.remove("hidden");
    });
  });

  // --- LOGIKA UNTUK MEMILIH TOPIK MATERI ---
  const topicItems = document.querySelectorAll(".item-materi");
  topicItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const card = item.closest(".kartu-kelas");
      const topic = item.dataset.topic;

      if (card && topic) {
        // Sembunyikan daftar topik
        card.querySelector(".daftar-materi").classList.add("is-hidden");

        // Tampilkan pilihan konten yang sesuai
        const targetContent = card.querySelector(
          `.pilihan-konten[data-topic-content="${topic}"]`
        );
        if (targetContent) {
          targetContent.classList.add("is-visible");
        }
      }
    });
  });

  // --- LOGIKA UNTUK KEMBALI KE DAFTAR TOPIK ---
  const backToTopicButtons = document.querySelectorAll(".tombol-kembali-topik");
  backToTopicButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const card = button.closest(".kartu-kelas");
      if (card) {
        // Sembunyikan semua pilihan konten
        card.querySelectorAll(".pilihan-konten").forEach((content) => {
          content.classList.remove("is-visible");
        });

        // Tampilkan kembali daftar topik
        card.querySelector(".daftar-materi").classList.remove("is-hidden");
      }
    });
  });

  // --- FUNGSI UNTUK TOMBOL KEMBALI UTAMA (Pilih Kelas Lain) ---
  backButton.addEventListener("click", () => {
    cards.forEach((card) => {
      card.classList.remove("aktif", "non-aktif");

      // Reset semua konten di dalam kartu ke kondisi tersembunyi
      card
        .querySelectorAll(".is-visible")
        .forEach((el) => el.classList.remove("is-visible"));
      card
        .querySelectorAll(".is-hidden")
        .forEach((el) => el.classList.remove("is-hidden"));
    });

    // Kembalikan judul & sembunyikan tombol
    pageTitle.textContent = originalTitle;
    pageSubtitle.textContent = originalSubtitle;
    backButton.classList.add("hidden");
  });
});
