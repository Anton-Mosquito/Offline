class Slider {
  constructor() {
    this.slider = document.querySelector("[data-slider]");
    this.sliderItems = document.querySelector("[data-slides='wrapper']");
    this.prev = document.querySelector("[data-slider-button='prev']");
    this.next = document.querySelector("[data-slider-button='next']");
    this.slides = this.sliderItems.querySelectorAll('[data-slides="slide"]');
    this.slidesLength = this.slides.length;
    this.slideSize = document.querySelector(
      '[data-slides="slide"]'
    ).offsetWidth;
    this.cloneFirstSlideItemsNode = null;
    this.cloneLastSlideItemsNode = null;
    this.positionX1 = 0;
    this.positionX2 = 0;
    this.posInitial = null;
    this.posFinal = null;
    this.threshold = 100;
    this.index = 0;
    this.allowShift = true;
    this.func1 = this.dragEnd.bind(this);
    this.func2 = this.dragAction.bind(this);
    this.init();
  }

  get firstSlideClone() {
    return this.slides[0].cloneNode(true);
  }

  get LastSlideClone() {
    return this.slides[this.slides.length - 1].cloneNode(true);
  }

  init() {
    this.createElement();
    this.eventListener();
  }

  createElement() {
    const first = this.firstSlideClone;
    const last = this.LastSlideClone;
    this.sliderItems.insertAdjacentElement("beforeend", first);
    this.sliderItems.insertAdjacentElement("afterbegin", last);
  }

  eventListener() {
    document.addEventListener("mousedown", (e) => {
      this.dragStart(e);
    });

    document.addEventListener("touchstart", (e) => {
      this.dragStart(e);
    });

    document.addEventListener("touchend", (e) => {
      this.dragEnd(e);
    });

    document.addEventListener("touchmove", (e) => {
      this.dragAction(e);
    });

    document.addEventListener("transitionend", (e) => {
      const attributes = e.target.dataset.slides;
      if (attributes === "wrapper" || attributes === "slide") this.checkIndex();
    });

    document.addEventListener("click", (e) => {
      const attributes = e.target.dataset.sliderButton;
      if (attributes === "next") this.shiftSlide(1);
      if (attributes === "prev") this.shiftSlide(-1);
    });
  }

  dragStart(e) {
    e.preventDefault();
    this.posInitial = this.sliderItems.offsetLeft;
    if (e.type === "touchstart") {
      this.positionX1 = e.touches[0].clientX;
    } else {
      this.positionX1 = e.clientX;
      document.addEventListener("mouseup", this.func1);
      document.addEventListener("mousemove", this.func2);
    }
  }

  dragEnd(e) {
    this.posFinal = this.sliderItems.offsetLeft;
    if (this.posFinal - this.posInitial < -this.threshold) {
      this.shiftSlide(1, "drag");
    } else if (this.posFinal - this.posInitial > this.threshold) {
      this.shiftSlide(-1, "drag");
    } else {
      this.sliderItems.style.left = `${this.posInitial}px`;
    }
    document.removeEventListener("mouseup", this.func1);
    document.removeEventListener("mousemove", this.func2);
  }

  dragAction(e) {
    e = e || window.event;
    if (e.type === "touchmove") {
      this.positionX2 = this.positionX1 - e.touches[0].clientX;
      this.positionX1 = e.touches[0].clientX;
    } else {
      this.positionX2 = this.positionX1 - e.clientX;
      this.positionX1 = e.clientX;
    }
    this.sliderItems.style.left =
      this.sliderItems.offsetLeft - this.positionX2 + "px";
  }

  shiftSlide(dir, action) {
    this.sliderItems.classList.add("shifting");
    if (this.allowShift) {
      if (!action) {
        this.posInitial = this.sliderItems.offsetLeft;
      }

      if (dir === 1) {
        this.sliderItems.style.left = this.posInitial - this.slideSize + "px";
        this.index++;
      } else if (dir === -1) {
        this.sliderItems.style.left = this.posInitial + this.slideSize + "px";
        this.index--;
      }
    }
    this.allowShift = false;
  }

  checkIndex() {
    this.sliderItems.classList.remove("shifting");

    if (this.index === -1) {
      this.sliderItems.style.left =
        -(this.slidesLength * this.slideSize) + "px";
      this.index = this.slidesLength - 1;
    }

    if (this.index === this.slidesLength) {
      this.sliderItems.style.left = -(1 * this.slideSize) + "px";
      this.index = 0;
    }

    this.allowShift = true;
  }
}

const ex = new Slider();
