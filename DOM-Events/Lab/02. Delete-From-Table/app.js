function deleteByEmail() {
  const inputELEMENT = document.querySelector('input[name="email"]');
  const tableRows = Array.from(document.querySelectorAll("tbody tr"));
  const resultElement = document.querySelector("#result");
  let isRemoved = false;

  tableRows.forEach((row) => {
    const emailCell = row.children[1];
    if (emailCell.textContent === inputELEMENT.value) {
      row.remove(emailCell);
      isRemoved = true;
    }
  });

  if (isRemoved) {
    resultElement.textContent = "Deleted";
  } else {
    resultElement.textContent = "Not found.";
  }
}
