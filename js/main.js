(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
      setTimeout(function () {
          if ($('#spinner').length > 0) {
              $('#spinner').removeClass('show');
          }
      }, 600);
  };
  spinner();
  
  
  // Initiate the wowjs
  new WOW().init();


  // Sticky Navbar
  $(window).scroll(function () {
      if ($(this).scrollTop() > 45) {
          $('.navbar').addClass('sticky-top shadow-sm');
      } else {
          $('.navbar').removeClass('sticky-top shadow-sm');
      }
  });
  
  
  // Dropdown on mouse hover
const $dropdown = $(".nav-item");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $("#dropdownMenuLink");
const showClass = "show";

$(window).on("load resize", function () {
  if (this.matchMedia("(min-width: 992px)").matches) {
      $dropdown.hover(
          function () {
              const $this = $(this);
              $this.addClass(showClass);
              $this.find($dropdownToggle).attr("aria-expanded", "true");
              $this.find($dropdownMenu).addClass(showClass);
          },
          function () {
              const $this = $(this);
              $this.removeClass(showClass);
              $this.find($dropdownToggle).attr("aria-expanded", "false");
              $this.find($dropdownMenu).removeClass(showClass);
          }
      );
  } else {
      $dropdown.off("mouseenter mouseleave");
      $dropdown.removeClass(showClass); // Pastikan dropdown tertutup
      $dropdownMenu.removeClass(showClass); // Pastikan menu tertutup
  }
});

  
  
  // Back to top button
  $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
          $('.back-to-top').fadeIn('slow');
      } else {
          $('.back-to-top').fadeOut('slow');
      }
  });
  $('.back-to-top').click(function () {
      $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
      return false;
  });


  
 // Testimonials carousel
$(".testimonial-carousel").owlCarousel({
  autoplay: true,
  autoplayTimeout: 23000, // Perpanjang waktu jeda antar slide (dalam milidetik)
  smartSpeed: 2000,      // Kecepatan transisi antar slide (dalam milidetik)
  center: true,
  margin: 24,
  dots: true,
  // loop: true,
  nav: false,
  responsive: {
      0: {
          items: 1
      },
      768: {
          items: 2
      },
      992: {
          items: 3
      }
  }
});

  
})(jQuery);





document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const sections = document.querySelectorAll("div[id^='section']");

  // Fungsi untuk menghapus kelas 'active' dari semua tautan
  function removeActiveClasses() {
      navLinks.forEach((link) => link.classList.remove("active"));
  }

  // Fungsi untuk menambahkan kelas 'active' pada tautan terkait
  function setActiveLink(link) {
      removeActiveClasses();
      link.classList.add("active");
  }

  // Event Listener untuk klik pada tautan navbar
  navLinks.forEach((link) => {
      link.addEventListener("click", function () {
          setActiveLink(this);
      });
  });

  // Gunakan Intersection Observer untuk mendeteksi bagian aktif
  const observerOptions = {
      root: null, // Viewport browser
      threshold: 0.1, // 60% bagian terlihat
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              const activeSectionId = entry.target.id; // Ambil ID bagian
              const activeLink = document.querySelector(
                  `.navbar-nav .nav-link[href="#${activeSectionId}"]`
              );
              if (activeLink) {
                  setActiveLink(activeLink);
              }
          }
      });
  }, observerOptions);

  // Daftarkan setiap bagian untuk diamati
  sections.forEach((section) => observer.observe(section));
});



// Cek preferensi mode dari localStorage
// window.addEventListener("DOMContentLoaded", () => {
//   const savedTheme = localStorage.getItem("theme");
//   if (savedTheme === "dark") {
//     body.classList.add("dark-mode");
//     darkModeIcon.classList.remove("bx-moon");
//     darkModeIcon.classList.add("bx-sun");
//   }
// });







// Seleksi semua elemen video dan ikon play/pause
const videoContainers = document.querySelectorAll('.video-container');

videoContainers.forEach(container => {
  const video = container.querySelector('.video-player');
  const playPauseIcon = container.querySelector('.play-pause-icon');

  // Tambahkan event listener ke ikon play/pause
  playPauseIcon.addEventListener('click', () => {
    if (video.paused) {
      // Mainkan video
      video.play();
      video.muted = false; // Aktifkan suara
      playPauseIcon.classList.remove('fa-play-circle');
      playPauseIcon.classList.add('fa-pause-circle');
    } else {
      // Jeda video
      video.pause();
      video.muted = true; // Matikan suara
      playPauseIcon.classList.remove('fa-pause-circle');
      playPauseIcon.classList.add('fa-play-circle');
    }
  });

  // Tambahkan event listener untuk mengubah ikon saat video selesai
  video.addEventListener('ended', () => {
    playPauseIcon.classList.remove('fa-pause-circle');
    playPauseIcon.classList.add('fa-play-circle');
  });
});






// JavaScript to highlight active navbar link
document.addEventListener('DOMContentLoaded', function () {
  const currentPage = window.location.pathname.split('/').pop(); // Mendapatkan nama file saat ini
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage) {
          link.classList.add('active'); // Tambahkan kelas aktif jika cocok
      }
  });
});

// TESTIMONI VIDEO

$(document).ready(function () {
  const $owl = $(".testimonial-carousel");

  // Inisialisasi Owl Carousel tanpa autoplay
  $owl.owlCarousel({
    items: 1,
    nav: true,  // Menampilkan tombol nav
    center: true,  // Membuat slide dimulai dari tengah
    dots: true,  // Menampilkan dots navigasi
    autoplay: true,  // Nonaktifkan autoplay
    loop: false,  // Nonaktifkan loop untuk mencegah kembali ke awal setelah slide terakhir
    margin: 0,   // Hapus margin jika perlu
  });

  // Fungsi tombol Previous (untuk berpindah slide ke kiri)
  $(".slide-icon.prev").on("click", function () {
    $owl.trigger("prev.owl.carousel");  // Memindahkan ke slide sebelumnya
  });

  // Fungsi tombol Next (untuk berpindah slide ke kanan)
  $(".slide-icon.next").on("click", function () {
    $owl.trigger("next.owl.carousel");  // Memindahkan ke slide berikutnya
  });

  // Event listener untuk tombol play-pause pada video
  $(".play-pause-icon").on("click", function () {
    const video = $(this).siblings("video")[0];  // Ambil elemen video terkait

    if (video.paused) {
      video.play();  // Putar video jika belum diputar
      $(this).removeClass("fa-play-circle").addClass("fa-pause-circle");  // Ganti ikon ke pause
    } else {
      video.pause();  // Hentikan video jika sudah diputar
      $(this).removeClass("fa-pause-circle").addClass("fa-play-circle");  // Ganti ikon ke play
    }
  });

  // Pastikan video berhenti saat halaman pertama dimuat (tanpa autoplay)
  $(".owl-item video").each(function () {
    this.pause();  // Hentikan video ketika pertama kali dimuat
    this.currentTime = 0;  // Reset video ke awal
  });

  // Hentikan video di slide sebelumnya saat slide berpindah
  $owl.on('changed.owl.carousel', function(event) {
    $(".owl-item video").each(function() {
      this.pause();  // Hentikan video
      this.currentTime = 0;  // Reset video ke awal
    });

    // Tidak ada video otomatis yang diputar saat slide berpindah
  });
});


$(document).ready(function () {
  // Event listener untuk tombol play-pause pada video
  $(".play-pause-icon").on("click", function () {
      const video = $(this).siblings("video")[0];  // Ambil elemen video terkait

      if (video.paused) {
          video.play();  // Putar video jika belum diputar
          $(this).removeClass("fa-play-circle").addClass("fa-pause-circle");  // Ganti ikon ke pause
      } else {
          video.pause();  // Hentikan video jika sudah diputar
          $(this).removeClass("fa-pause-circle").addClass("fa-play-circle");  // Ganti ikon ke play
      }
  });

  // Event listener untuk mendeteksi saat video selesai diputar
  $("video").on("ended", function () {
      const icon = $(this).siblings(".play-pause-icon");  // Ambil ikon play-pause terkait
      $(icon).removeClass("fa-pause-circle").addClass("fa-play-circle");  // Ubah ikon ke play setelah video selesai
  });
});


// VIDEO HOME 

$(document).ready(function () {
  const video = document.getElementById('myVideo');  // Ambil elemen video
  const playPauseIcon = $('#playPauseIcon');  // Ambil elemen icon play/pause

  // Fungsi untuk play/pause video ketika ikon diklik
  playPauseIcon.on('click', function () {
      if (video.paused) {
          video.play();  // Putar video
          $(this).removeClass('fa-play-circle').addClass('fa-pause-circle');  // Ganti ikon menjadi pause
      } else {
          video.pause();  // Hentikan video
          $(this).removeClass('fa-pause-circle').addClass('fa-play-circle');  // Ganti ikon menjadi play
      }
  });

  // Event listener untuk perubahan status video ketika video selesai
  video.addEventListener('ended', function () {
      playPauseIcon.removeClass('fa-pause-circle').addClass('fa-play-circle');  // Ganti ikon menjadi play ketika video selesai
  });
});



// mobil
$(document).ready(function() {
  // Inisialisasi Owl Carousel untuk setiap kategori

  // Mobil Pribadi
  $('.mobil-pribadi').owlCarousel({
      loop: true,
      margin: 10,
      autoplay: false,  // Nonaktifkan auto slide
      nav: true, // Aktifkan tombol navigasi default
      navText: ['<button class="owl-prev"><i class="fas fa-chevron-left"></i></button>', '<button class="owl-next"><i class="fas fa-chevron-right"></i></button>'],
      responsive: {
          0: {
              items: 1
          },
          768: {
              items: 2
          },
          1024: {
              items: 3
          }
      }
  });

  // Mobil Hiace
  $('.mobil-hiace').owlCarousel({
      loop: true,
      margin: 10,
      autoplay: false,
      nav: true,
      navText: ['<button class="owl-prev"><i class="fas fa-chevron-left"></i></button>', '<button class="owl-next"><i class="fas fa-chevron-right"></i></button>'],
      responsive: {
          0: {
              items: 1
          },
          768: {
              items: 2
          },
          1024: {
              items: 3
          }
      }
  });

  // Mobil Jeep
  $('.mobil-jeep').owlCarousel({
      loop: true,
      margin: 10,
      autoplay: false,
      nav: true,
      navText: ['<button class="owl-prev"><i class="fas fa-chevron-left"></i></button>', '<button class="owl-next"><i class="fas fa-chevron-right"></i></button>'],
      responsive: {
          0: {
              items: 1
          },
          768: {
              items: 2
          },
          1024: {
              items: 3
          }
      }
  });

  // Tombol Slide untuk Mobil Pribadi (Custom)
  $('.mobil-pribadi .owl-prev').click(function() {
      $('.mobil-pribadi').trigger('prev.owl.carousel');
  });
  $('.mobil-pribadi .owl-next').click(function() {
      $('.mobil-pribadi').trigger('next.owl.carousel');
  });

  // Tombol Slide untuk Mobil Hiace (Custom)
  $('.mobil-hiace .owl-prev').click(function() {
      $('.mobil-hiace').trigger('prev.owl.carousel');
  });
  $('.mobil-hiace .owl-next').click(function() {
      $('.mobil-hiace').trigger('next.owl.carousel');
  });

  // Tombol Slide untuk Mobil Jeep (Custom)
  $('.mobil-jeep .owl-prev').click(function() {
      $('.mobil-jeep').trigger('prev.owl.carousel');
  });
  $('.mobil-jeep .owl-next').click(function() {
      $('.mobil-jeep').trigger('next.owl.carousel');
  });
});





// *******************

document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("myVideo");
  const clickableOverlay = document.getElementById("clickableOverlay");
  const playPauseIcon = document.getElementById("playPauseIcon");

  // Fungsi untuk memulai video
  function playVideo() {
      video.play();
      playPauseIcon.style.display = "none"; // Sembunyikan ikon play
  }

  // Fungsi untuk menjeda video
  function pauseVideo() {
      video.pause();
      playPauseIcon.style.display = "block"; // Tampilkan ikon play
  }

  // Event listener untuk klik pada overlay
  clickableOverlay.addEventListener("click", function () {
      if (video.paused) {
          playVideo();
      } else {
          pauseVideo();
      }
  });

  // Event listener untuk ikon play/pause
  playPauseIcon.addEventListener("click", function () {
      if (video.paused) {
          playVideo();
      } else {
          pauseVideo();
      }
  });
});

