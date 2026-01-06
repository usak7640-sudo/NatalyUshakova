document.addEventListener("DOMContentLoaded", () => {

  // Модальное окно для галереи
  const overlay = document.getElementById("photoOverlay");
  const modalImage = document.getElementById("modalImage");
  const closeBtn = document.querySelector(".close-overlay");

  window.openGalleryModal = (element) => {
    const img = element.querySelector("img");
    modalImage.src = img.src;
    modalImage.alt = img.alt;
    overlay.style.display = "flex";
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    overlay.style.display = "none";
    document.body.style.overflow = "auto";
  };

  closeBtn.addEventListener("click", close);
  
  overlay.addEventListener("click", (e) => {
    if (e.target.id === "photoOverlay") close();
  });

  // Закрытие по Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.style.display === "flex") {
      close();
    }
  });

  // Анимация при скролле
  const observerOptions = { threshold: 0.2 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  document.querySelectorAll('.service-card, h2, .text-block, .feature-item, .result-item, .faq-item, .gallery-item').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s ease-out";
    observer.observe(el);
  });

});
