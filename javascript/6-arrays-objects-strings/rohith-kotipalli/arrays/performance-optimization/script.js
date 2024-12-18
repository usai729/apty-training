function generateArray(size) {
    return new Array(size);
  }
  function compareLoops(array) {
    const results = {};

    let startTime = performance.now();
    for (let i = 0; i < array.length; i++) {
      const value = array[i];
    }
    let endTime = performance.now();
    results['for'] = endTime - startTime;

    startTime = performance.now();
    for (const value of array) {
    }
    endTime = performance.now();
    results['for...of'] = endTime - startTime;

    startTime = performance.now();
    array.forEach(value => {
    });
    endTime = performance.now();
    results['forEach'] = endTime - startTime;

    return results;
  }

  document.getElementById("arraySizeForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const arraySize = parseInt(document.getElementById("arraySize").value);
    const array = generateArray(arraySize);

    const performanceResults = compareLoops(array);

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `
      <p>Performance results for array of size ${arraySize}:</p>
      <ul>
        <li><strong>for loop:</strong> ${performanceResults['for']} milliseconds</li>
        <li><strong>for...of loop:</strong> ${performanceResults['for...of']} milliseconds</li>
        <li><strong>forEach:</strong> ${performanceResults['forEach']} milliseconds</li>
      </ul>
      <p><strong>Recommendation:</strong> Use the method with the fastest performance for your use case. Generally, for large arrays, the traditional 'for' loop may offer better performance.</p>
    `;
  });