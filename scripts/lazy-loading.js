const lazyImages = document.querySelectorAll('.lazy-image');

const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const lazyImage = entry.target;
      lazyImage.src = lazyImage.dataset.src;

      imageObserver.unobserve(lazyImage);
    }
  });
});

lazyImages.forEach(image => {
  imageObserver.observe(image);
});