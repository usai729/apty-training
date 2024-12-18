class Queue {
    constructor() {
      this.queue = []; // Initialize the queue as an empty array
    }

    // Add an element to the queue
    unshift(element) {
      this.queue.push(element); // Push element to the end of the array
    }

    // Remove and return the front element of the queue
    shift() {
      if (this.isEmpty()) {
        throw new Error("Queue is empty");
      }
      return this.queue.shift(); // Remove and return the first element of the array
    }

    // Check if the queue is empty
    isEmpty() {
      return this.queue.length === 0;
    }
    // Retrieve the next element without removing it
    peek() {
        if (this.isEmpty()) {
          throw new Error("Queue is empty");
        }
        return this.queue[0]; // Return the first element of the array
      }
    }

    const queue = new Queue();

    function addElement() {
      const inputElement = document.getElementById('inputElement').value;
      if (inputElement.trim() === "") {
        document.getElementById('output').textContent = "Please enter a valid element.";
        return;
      }
      queue.unshift(inputElement);
      document.getElementById('output').textContent = `Added: ${inputElement}`;
      document.getElementById('inputElement').value = "";
    }
    function removeElement() {
        try {
          const removedElement = queue.shift();
          document.getElementById('output').textContent = `Removed: ${removedElement}`;
        } catch (error) {
          document.getElementById('output').textContent = error.message;
        }
      }
  
      function checkIfEmpty() {
        const isEmpty = queue.isEmpty();
        document.getElementById('output').textContent = isEmpty ? "The queue is empty." : "The queue is not empty.";
      }
  
      function getNextElement() {
        try {
          const nextElement = queue.peek();
          document.getElementById('output').textContent = `Next element: ${nextElement}`;
        } catch (error) {
          document.getElementById('output').textContent = error.message;
        }
      }