class ImageCarousel {
  constructor(containerSelector, imageSelector, images, interval) {
    this.container = document.querySelector(containerSelector);
    this.imageElement = this.container.querySelector(imageSelector);
    this.images = images;
    this.interval = interval;
    this.currentIndex = 0;
    this.timer = null;
  }

  start() {
    this.showNextImage(); // Display the initial image

    this.timer = setInterval(() => {
      this.showNextImage(); // Rotate to the next image after the specified interval
    }, this.interval);
  }

  stop() {
    clearInterval(this.timer);
  }

  showNextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.imageElement.src = this.images[this.currentIndex];
  }
}

export default ImageCarousel;
