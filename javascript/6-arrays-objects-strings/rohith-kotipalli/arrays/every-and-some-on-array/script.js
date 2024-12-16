function checkScores() {
    const input = document.getElementById('inputScores').value;
    let scores;

    try {
      scores = JSON.parse(input); 

      if (!Array.isArray(scores) || scores.some(student => !student.name || typeof student.score !== 'number')) {
        throw new Error("Invalid input format. Ensure each student has 'name' and 'score'.");
      }
    } catch (error) {
      document.getElementById('output').textContent = `Error: ${error.message}`;
      return;
    }

    const allPassed = scores.every(student => student.score > 35);
    const someFailed = scores.some(student => student.score <= 35);

    if (allPassed) {
      document.getElementById('output').textContent = "All Students Passed";
    } else if (someFailed) {
      document.getElementById('output').textContent = "Some Students Failed";
    }
    console.log(scores); 
    }