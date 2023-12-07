function solve() {
  let generateBtn = document.querySelector('button');
  let buyBtn = Array.from(document.querySelectorAll('button'))[1];

  const tableBody = document.querySelector('tbody');
  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);

  function generate() {
    let textArea = document.querySelector('textarea').value;

    let parsedArray = JSON.parse(textArea);

    for (let furniture of parsedArray) {
      let tableRowElement = document.createElement('tr');

      // Create and append td elements for each property of the furniture
      let tdImage = document.createElement('td');
      let tdName = document.createElement('td');
      let tdPrice = document.createElement('td');
      let tdFactor = document.createElement('td');
      let tdMark = document.createElement('td');

      tableRowElement.appendChild(tdImage);
      tableRowElement.appendChild(tdName);
      tableRowElement.appendChild(tdPrice);
      tableRowElement.appendChild(tdFactor);
      tableRowElement.appendChild(tdMark);

      // Create and append image element for the furniture image
      let image = document.createElement('img');
      image.src = furniture.img;
      tdImage.appendChild(image);

      // Set text content for other td elements
      tdName.innerText = furniture.name;
      tdPrice.innerText = furniture.price;
      tdFactor.innerText = furniture.decFactor;

      // Create and append checkbox for marking the furniture
      let checkBox = document.createElement('input');
      checkBox.type = 'checkbox';
      tdMark.appendChild(checkBox);

      // Append the entire row to the table body
      tableBody.appendChild(tableRowElement);
    }
  }

  function buy() {
    let resultTextArea = Array.from(document.querySelectorAll('textarea'))[1];
    let output = [];

    // Get all checkboxes that are checked
    let toBuy = Array.from(document.querySelectorAll('input[type="checkbox"]'))
      .filter(e => e.checked === true)
      .map(e => e.parentNode.parentNode);

    // Get names of the selected furniture and join them with a comma
    let bought = toBuy.map(e => Array.from(e.querySelectorAll('td'))[1].innerText)
      .join(', ');

    // Add bought furniture information to the output array
    output.push(`Bought furniture: ${bought}`);

    // Calculate and add the total price to the output array
    let totalPrice = toBuy.map(e => Array.from(e.querySelectorAll('td'))[2].innerText).map(Number)
      .reduce((acc, current) => acc + current, 0);
    output.push(`Total price: ${totalPrice.toFixed(2)}`);

    // Calculate and add the average decoration factor to the output array
    let averageFactor = toBuy.map(e => Array.from(e.querySelectorAll('td'))[3].innerText).map(Number)
      .reduce((acc, current) => acc + current, 0) / toBuy.length;
    output.push(`Average decoration factor: ${averageFactor}`);

    // Set the result in the result textarea
    resultTextArea.value = output.join('\n');
  }
}
