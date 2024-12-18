const dynamicObject = {};

    function addKeyValuePair() {
      const key = document.getElementById('keyInput').value;
      const value = document.getElementById('valueInput').value;
      if (!key) {
        alert('Key cannot be empty.');
        return;
      }

      dynamicObject[key] = value;
      document.getElementById('objectResult').textContent = JSON.stringify(dynamicObject, null, 2);
    }