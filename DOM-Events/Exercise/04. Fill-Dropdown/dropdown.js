function addItem() {
  let text = document.getElementById("newItemText");
  let valueText = document.getElementById("newItemValue");
  let menu = document.getElementById("menu");

  let options = document.createElement("option");

  options.textContent = text.value;
  options.value = valueText.value;
  if (text.value !== "" && valueText.value !== "") {
    menu.appendChild(options);
  }
  text.value = "";
  valueText.value = "";
}
