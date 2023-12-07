function attachGradientEvents() {
  const gradientElement = document.getElementById("gradient");
  const resultElement = document.getElementById("result");

  gradientElement.addEventListener("mousemove", gradientMove);
  gradientElement.addEventListener("mouseout", gradientOut);

  function gradientMove(e) {
    // Get the horizontal position of the mouse click relative to the target element
    let power = e.offsetX / (e.target.clientWidth - 1);

    // Multiply the power by 100 and round down to the nearest integer
    power = Math.trunc(power * 100);
    resultElement.textContent = power + "%";
  }

  function gradientOut(e) {
    resultElement.textContent = "";
  }
}
