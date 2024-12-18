function convertToSentence() {
    const inputWords = document.getElementById('inputWords').value;
    if (inputWords.trim() === "") {
      document.getElementById('output').textContent = "Please enter some words.";
      return;
    }

    // Convert input into an array of words
    const wordsArray = inputWords.split(',').map(word => word.trim()).filter(word => word !== "");

    if (wordsArray.length === 0) {
      document.getElementById('output').textContent = "Please enter valid words.";
      return;
    }

    // Join the words into a sentence and capitalize the first letter
    const sentence = wordsArray.join(' ');
    const capitalizedSentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);

    // Display the result
    document.getElementById('output').textContent = capitalizedSentence;
  }