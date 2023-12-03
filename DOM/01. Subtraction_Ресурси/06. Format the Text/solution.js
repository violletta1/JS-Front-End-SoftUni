
function solve() {
  let rawText = document.getElementById('input').value;
  let outputText = document.getElementById("output");

  let sentences = rawText.split(".");

  sentences = sentences
    .filter(s => s.length > 0)  // Fix the typo 'lenght' to 'length' and add trim to handle empty sentences
    .map(s => s + '.');

  while (outputText.firstChild) {
    outputText.removeChild(outputText.firstChild);  // Clear existing content in the output div
  }

  while (sentences.length > 0) {
    let p = document.createElement('p');
    p.textContent = sentences.splice(0, 3).join('');
    outputText.appendChild(p);
  }
}