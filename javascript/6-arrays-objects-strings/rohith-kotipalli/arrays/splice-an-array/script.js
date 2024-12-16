let colors = ["Red", "Blue", "Green", "Yellow"];

    function replaceBlueWithPurple() {
      const blueIndex = colors.indexOf("Blue");
      if (blueIndex !== -1) {
        colors[blueIndex] = "Purple";
      }
      document.getElementById('output').textContent = `Updated colors: ${colors.join(', ')}`;
    }

    function addOrangeAfterYellow() {
      const yellowIndex = colors.indexOf("Yellow");
      if (yellowIndex !== -1) {
        colors.splice(yellowIndex + 1, 0, "Orange"); 
      }
      document.getElementById('output').textContent = `Updated colors: ${colors.join(', ')}`;
    }
    function removeGreen() {
        const greenIndex = colors.indexOf("Green");
        if (greenIndex !== -1) {
          colors.splice(greenIndex, 1)
        }
        document.getElementById('output').textContent = `Updated colors: ${colors.join(', ')}`;
      }