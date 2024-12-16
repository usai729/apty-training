function customFlatten(arr) {
    let result = [];

    function flattenHelper(element) {
      if (Array.isArray(element)) {
        element.forEach(flattenHelper);
      } else {
        result.push(element);
      }
    }

    flattenHelper(arr);
    return result;
  }

  function handleFlatten() {
    const inputField = document.getElementById("inputArray");
    const resultField = document.getElementById("result");

    try {
      const inputArray = JSON.parse(inputField.value);

      if (!Array.isArray(inputArray)) {
        throw new Error("Input must be an array");
      }

      const flattenedArray = customFlatten(inputArray);

      resultField.textContent = `Flattened Array: ${JSON.stringify(flattenedArray)}`;
    } catch (error) {
      resultField.textContent = `Error: ${error.message}`;
    }
  }