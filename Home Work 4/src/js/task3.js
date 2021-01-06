class DragAndDrop {
  constructor() {
    this.area = document.querySelector(".wrapper");
    this.nodes = document.querySelectorAll("[data-drag='item']");
    this.closeNodes = document.querySelectorAll("[data-drag='close']");
    this.shiftX = null;
    this.shiftY = null;
    this.activeElement = null;
    this.init();
  }

  init() {
    this.eventListenet();
    this.addPosition();
    this.getCoords();
  }

  addPosition() {
    const array = [...this.nodes];
    array[0].style.top = `20px`;
    array[0].style.left = `300px`;
    array[1].style.top = `200px`;
    array[1].style.left = `20px`;
    array[2].style.top = `300px`;
    array[2].style.left = `400px`;
  }

  move(pageX, pageY) {
    pageX = this.getCoords(pageX, "x");
    pageY = this.getCoords(pageY, "y");
    this.activeElement.style.left = pageX - this.shiftX + "px";
    this.activeElement.style.top = pageY - this.shiftY + "px";
  }

  getCoords(coords, direction) {
    const getElementCss = window.getComputedStyle(this.area);
    const getWidth = getElementCss.getPropertyValue("width");
    const getHeight = getElementCss.getPropertyValue("height");
    const getDigitPropertiesWidth = getWidth.replace("px", "");
    const getDigitPropertiesHeight = getHeight.replace("px", "");
    const containerX = this.area.getBoundingClientRect().left;
    const containerY = this.area.getBoundingClientRect().top;
    let returnValue = null;

    const getXCoords = () => {
      if (coords > containerX + Number(getDigitPropertiesWidth)) {
        coords = containerX + Number(getDigitPropertiesWidth);
      }
      if (coords < containerX) {
        coords = containerX;
      }
      return coords;
    };

    const getYCoords = () => {
      if (coords > containerY + Number(getDigitPropertiesHeight)) {
        coords = containerY + Number(getDigitPropertiesHeight);
      }
      if (coords < containerY) {
        coords = containerY;
      }
      return coords;
    };

    switch (direction) {
      case "x":
        returnValue = getXCoords();
        break;
      case "y":
        returnValue = getYCoords();
        break;
    }

    return returnValue;
  }

  onMouseMove(event) {
    this.move(event.pageX, event.pageY);
  }

  startMove(element, event) {
    event.preventDefault();
    element.classList.add("activeElement");
    element.dataset.help = "active";

    this.area.dataset.drag = "area";
    this.activeElement = element;

    this.shiftX =
      event.clientX - this.activeElement.getBoundingClientRect().left;
    this.shiftY =
      event.clientY - this.activeElement.getBoundingClientRect().top;

    this.move(event.pageX, event.pageY);

    document.body.append(this.activeElement);

    this.showCloseButton("one");
  }

  eventListenet() {
    document.addEventListener("mousedown", (e) => {
      const element = e.target;
      const attributes = e.target.dataset.drag;
      if (attributes !== "item") return;
      this.startMove(element, e);
    });

    document.addEventListener("mousemove", (e) => {
      const attributes = e.target.dataset.drag;
      if (attributes !== "area") return;
      this.onMouseMove(e);
    });

    document.addEventListener("mouseup", (e) => {
      const attributes = e.target.dataset.drag;
      if (attributes !== "item") return;
      this.endMove();
    });

    document.addEventListener("click", (e) => {
      const attributes = e.target.dataset.drag;
      if (attributes === "close") this.deleteElement();
      if (this.area === e.target) this.showCloseButton("two");
    });
  }

  deleteElement() {
    this.activeElement.remove();
  }

  endMove() {
    this.area.removeAttribute("data-drag");
  }

  showCloseButton(flag) {
    const array = [...this.closeNodes];
    const caseOne = () => {
      for (let index = 0; index < array.length; index++) {
        if (array[index].parentElement.dataset.help === "active") {
          array[index].parentElement.removeAttribute("data-help");
          array[index].classList.add("show");
        } else {
          array[index].classList.remove("show");
        }
      }
    };

    const caseTwo = () => {
      array.forEach((element) => {
        element.classList.remove("show");
      });
    };

    switch (flag) {
      case "one":
        caseOne();
        break;
      case "two":
        caseTwo();
        break;
    }
  }
}

const element = new DragAndDrop();
