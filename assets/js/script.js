/*------------------------------------------------------------------
* Bootstrap Simple Admin Template
* Version: 3.0
* Author: Alexis Luna
* Website: https://github.com/alexis-luna/bootstrap-simple-admin-template
-------------------------------------------------------------------*/
(function() {
    'use strict';

    // Toggle sidebar on Menu button click
    $('#sidebarCollapse').on('click', function() {
        $('#sidebar').toggleClass('active');
        $('#body').toggleClass('active');
    });

    // Auto-hide sidebar on window resize if window size is small
    // $(window).on('resize', function () {
    //     if ($(window).width() <= 768) {
    //         $('#sidebar, #body').addClass('active');
    //     }
    // });
})();

const carousel = document.getElementById("carousel");
const scrollLeftBtn = document.querySelector(".scroll-left");
const scrollRightBtn = document.querySelector(".scroll-right");

const cardWidth = 375; // Kart genişliği
const gap = 30;        // Kartlar arası boşluk
const scrollAmount = cardWidth + gap; // Her tıklamada 1 kart kaydır

// Klon: sonsuz scroll efekti için
const cards = Array.from(carousel.children);
cards.forEach(card => {
  const clone = card.cloneNode(true);
  carousel.appendChild(clone);
});

// Sağ ok
scrollRightBtn.onclick = () => {
  const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

  if (carousel.scrollLeft >= maxScrollLeft - scrollAmount) {
    carousel.scrollTo({ left: 0, behavior: "smooth" });
  } else {
    carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }
};

// Sol ok
scrollLeftBtn.onclick = () => {
  if (carousel.scrollLeft <= scrollAmount) {
    carousel.scrollTo({ left: carousel.scrollWidth, behavior: "smooth" });
  } else {
    carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  }
};

// Otomatik scroll (tek kart kaydırır)
let autoScroll = setInterval(() => {
  const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

  if (carousel.scrollLeft >= maxScrollLeft - scrollAmount) {
    carousel.scrollTo({ left: 0, behavior: "smooth" });
  } else {
    carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }
}, 4000);

// Hover → durdur
carousel.addEventListener("mouseenter", () => clearInterval(autoScroll));

// Mouse çıkınca → başlat
carousel.addEventListener("mouseleave", () => {
  autoScroll = setInterval(() => {
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

    if (carousel.scrollLeft >= maxScrollLeft - scrollAmount) {
      carousel.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  }, 4000);
});
