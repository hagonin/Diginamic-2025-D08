

class Slideshow {
  constructor(nbImages, width, height, speed) {
    this.nbImages = nbImages;
    this.images = [];
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.currentImage = 0;

    this.feedSs(nbImages);
    this.currentTO = this.render(0);
  }

  createImage() {
    // création d'une image
    const img = document.createElement("img");
    img.setAttribute("src", `https://picsum.photos/${this.width}/${this.height}?id=${Math.random() * 1000}`);
    img.setAttribute("alt", "image");
    return img;
  }

  feedSs(nbImages) {
    const previousBtn = document.createElement("button");
    document.body.appendChild(previousBtn);
    previousBtn.innerText = `<--`;
    previousBtn.addEventListener("click", (event) => { this.previousSlide(); });
    for (let i = 0; i < nbImages; i++) {
      this.images.push(this.createImage());
      document.body.appendChild(this.images[i]);
      this.images[i].hidden = true;
    }
    const nextBtn = document.createElement("button");
    document.body.appendChild(nextBtn);
    nextBtn.innerText = `-->`;
    nextBtn.addEventListener("click", (event) => { this.nextSlide(); });
  }

  previousSlide() {
    clearTimeout(this.currentTO);
    if (this.currentImage === 0) this.currentTO = this.render(this.images.length - 1);
    else this.currentTO = this.render(this.currentImage - 1);
  }

  nextSlide() {
    clearTimeout(this.currentTO);
    if (this.currentImage >= this.images.length - 1) this.currentTO = this.render(0);
    else this.currentTO = this.render(this.currentImage + 1);
  }

  render(imageIndex) {
    this.images[this.currentImage].hidden = true;
    this.images[imageIndex].hidden = false;
    this.currentImage = imageIndex;
    return this.animateSs();
  }

  animateSs() {
    return setTimeout(() => {
      this.images[this.currentImage].hidden = true;
      this.currentImage++;
      if (this.currentImage >= this.images.length) this.currentImage = 0;
      this.images[this.currentImage].hidden = false;
      this.currentTO = this.animateSs();
    }, this.speed);
  }
}

const customSs = new Slideshow(10, 500, 500, 10000);