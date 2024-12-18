const names = ["Alice", "Bob", "Charlie", "Daisy", "Eve"];
    function extractFirstThree() {
      const firstThree = names.slice(0, 3); 
      document.getElementById('output').textContent = `First three names: ${firstThree.join(', ')}`;
    }

    function extractLastTwo() {
      const lastTwo = names.slice(-2); 
      document.getElementById('output').textContent = `Last two names: ${lastTwo.join(', ')}`;
    }