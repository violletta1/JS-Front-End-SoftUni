function focused() {
  const fields = document.getElementsByTagName("input");

  for (const field of fields) {
    field.addEventListener("focus", onFocus);
    field.addEventListener("blur", outFocus);
  }
  function onFocus(e) {
    const divParentElement = e.currentTarget.parentNode;
    divParentElement.classList.add("focused");
  }
  function outFocus(e) {
    const divParentElement = e.currentTarget.parentNode;
    divParentElement.classList.remove("focused");
  }
}
