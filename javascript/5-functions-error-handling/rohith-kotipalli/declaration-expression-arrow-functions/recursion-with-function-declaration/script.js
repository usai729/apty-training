function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

document.getElementById('fibonacciForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const number = parseInt(document.getElementById('number').value, 10);
  if (isNaN(number) || number < 0) {
    document.getElementById('result').textContent = 'Please enter a valid non-negative number.';
    return;
  }

  const series = [];
  for (let i = 0; i <= number; i++) {
    series.push(fibonacci(i));
  }

  document.getElementById('result').textContent = `Fibonacci series up to ${number}: ${series.join(', ')}`;
})