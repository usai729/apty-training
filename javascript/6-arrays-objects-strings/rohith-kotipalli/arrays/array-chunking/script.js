function chunkArray(arr, size) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  }

  document.getElementById("chunkForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const arrayInput = document.getElementById("arrayInput").value.trim();
    const chunkSize = parseInt(document.getElementById("chunkSize").value);

    const array = arrayInput.split(',').map(item => item.trim()).filter(Boolean);

    const result = chunkArray(array, chunkSize);

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<pre>${JSON.stringify(result, null, 2)}</pre>`;
  });