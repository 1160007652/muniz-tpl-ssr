function init() {
  const docEl = document.documentElement;
  const dpr = window.devicePixelRatio || 1;

  // set 1rem = 100 * viewWidth / 750
  function setRemUnit() {
    docEl.style.fontSize = `${(100 * docEl.clientWidth) / 750}px`;
  }

  setRemUnit();

  // reset rem unit on page resize
  window.addEventListener("resize", setRemUnit);
  window.addEventListener("pageshow", (e) => {
    if (e.persisted) {
      setRemUnit();
    }
  });

  // detect 0.5px supports
  if (dpr >= 2) {
    const fakeBody = document.createElement("body");
    const testElement = document.createElement("div");

    testElement.style.border = ".5px solid transparent";

    fakeBody.appendChild(testElement);
    docEl.appendChild(fakeBody);

    if (testElement.offsetHeight === 1) {
      docEl.classList.add("hairlines");
    }

    docEl.removeChild(fakeBody);
  }
}
init();
