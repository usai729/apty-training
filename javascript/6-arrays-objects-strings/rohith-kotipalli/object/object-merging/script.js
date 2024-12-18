function deepMerge(target, source) {
    for (const key in source) {
      if (source.hasOwnProperty(key)) {
        if (
          typeof source[key] === 'object' &&
          source[key] !== null &&
          !Array.isArray(source[key])
        ) {
          if (!target[key] || typeof target[key] !== 'object') {
            target[key] = {};
          }
          deepMerge(target[key], source[key]);
        } else {
          target[key] = source[key];
        }
      }
    }
    return target;
  }
  function mergeObjects() {
    const obj1Input = document.getElementById('object1Input').value;
    const obj2Input = document.getElementById('object2Input').value;

    try {
      const obj1 = JSON.parse(obj1Input);
      const obj2 = JSON.parse(obj2Input);
      const mergedObject = deepMerge(obj1, obj2);
      document.getElementById('mergeResult').textContent = JSON.stringify(mergedObject, null, 2);
    } catch (e) {
      alert('Invalid JSON input. Please enter valid JSON objects.');
    }
  }