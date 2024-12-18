function transposeMatrix(matrix) {
  return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
}

function handleTransposeMatrix() {
  const input = document.getElementById("matrixInput").value;
  const matrix = input.split("\n").map(row => row.split(",").map(num => Number(num.trim())));

  const transposed = transposeMatrix(matrix);

  const formattedResult = transposed.map(row => `[${row.join(", ")}]`).join("\n");

  document.getElementById("output").innerText = `Transposed Matrix:\n${formattedResult}`;
}