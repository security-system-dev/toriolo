// Mengubah latar belakang Navbar ketika di-scroll ke bawah
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

console.log("Script Toriolo Services berhasil dijalankan.");
