!(function () {
  function debounce(f, ms) {
    let isCooldown = false;
    return function () {
      if (isCooldown) return;
      f.apply(this, arguments);
      isCooldown = true;
      setTimeout(() => (isCooldown = false), ms);
    };
  }

  function func() {
    console.log(elem.value);
  }

  const action = debounce(func, 2000);

  const elem = document.querySelector("[data-input]");
  elem.addEventListener("input", action);
})();
