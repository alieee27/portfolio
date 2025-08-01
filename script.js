// Kamu bisa tambahkan fitur JavaScript di sini kalau mau
// Contoh: Notifikasi klik, Dark Mode toggle, dsb
console.log("Portfolio loaded!");

// Fitur notifikasi setelah kirim form
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(form);

      fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            form.reset();
            successMessage.style.display = "block";
            successMessage.innerText = "✅ Pesan berhasil dikirim! Terima kasih 😊";
          } else {
            alert("❌ Gagal mengirim pesan. Coba lagi nanti.");
          }
        })
        .catch(() => {
          alert("❌ Gagal mengirim pesan. Coba lagi nanti.");
        });
    });
  }
});
