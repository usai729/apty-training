function removeDuplicates(arr) {
    const uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (!uniqueArray.includes(arr[i])) {
        uniqueArray.push(arr[i]);
      }
    }
    return uniqueArray;
  }
  document.getElementById("removeDuplicatesForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const arrayInput = document.getElementById("arrayInput").value.trim();

    const array = arrayInput.split(',').map(item => item.trim()).filter(Boolean);

    const result = removeDuplicates(array);

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<pre>${JSON.stringify(result, null, 2)}</pre>`;
  });