function convertToUnicode() {
    const inputString = document.getElementById('inputString').value;

    if (!inputString) {
      document.getElementById('unicodeResult').textContent = 'Please enter a valid string.';
      return;
    }

    const unicodeArray = Array.from(inputString).map(char => char.charCodeAt(0));
    document.getElementById('unicodeResult').textContent = `Unicode values: [${unicodeArray.join(', ')}]`;
  }
