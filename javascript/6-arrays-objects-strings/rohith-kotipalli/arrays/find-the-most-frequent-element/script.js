function mostFrequent(arr) {
    const frequencyMap = arr.reduce((map, num) => {
      map[num] = (map[num] || 0) + 1;
      return map;
    }, {});
    let maxCount = 0;
    let mostFrequentElement = null;

    for (let key in frequencyMap) {
      if (frequencyMap[key] > maxCount) {
        maxCount = frequencyMap[key];
        mostFrequentElement = key;
      }
    }

    return mostFrequentElement;
  }

  document.getElementById("mostFrequentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const arrayInput = document.getElementById("arrayInput").value.trim();

    const array = arrayInput.split(',').map(item => parseInt(item.trim())).filter(Boolean);

    const result = mostFrequent(array);

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<p>The most frequent element is: <strong>${result}</strong></p>`;
  });