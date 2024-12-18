function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }

    if (Array.isArray(obj)) {
      return obj.map(item => deepClone(item));
    }

    const clonedObj = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key]);
      }
    }
    return clonedObj;
  }

  function performDeepClone() {
    const input = document.getElementById('objectInput').value;
    try {
        const obj = JSON.parse(input);

        document.getElementById('originalObject').textContent = JSON.stringify(obj, null, 2);

        const clonedObj = deepClone(obj);

        document.getElementById('clonedObject').textContent = JSON.stringify(clonedObj, null, 2);
      } catch (e) {
        alert('Invalid JSON input. Please enter a valid JSON object.');
      }
    }