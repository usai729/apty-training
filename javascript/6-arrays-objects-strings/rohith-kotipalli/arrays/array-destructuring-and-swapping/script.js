function swapValues(a, b) {
    [a, b] = [b, a];
    return { a, b };
  }

  document.getElementById("swapForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const a = parseInt(document.getElementById("aValue").value);
    const b = parseInt(document.getElementById("bValue").value);

    const swapped = swapValues(a, b);

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<p>After swapping: a = ${swapped.a}, b = ${swapped.b}</p>`;
  });