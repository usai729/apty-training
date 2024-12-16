class Stack {
    constructor() {
      this.stack = [];
    }

    push(element) {
      this.stack.push(element);
    }

    pop() {
      if (this.isEmpty()) {
        return "Stack is empty, nothing to pop.";
      }
      return this.stack.pop();
    }

    isEmpty() {
      return this.stack.length === 0;
    }

    top() {
      if (this.isEmpty()) {
        return "Stack is empty.";
      }
      return this.stack[this.stack.length - 1];
    }

    getStack() {
      return this.stack;
    }
  }

  const myStack = new Stack();

  function displayStack() {
    const currentStackField = document.getElementById("currentStack");
    currentStackField.textContent = `Stack: [${myStack.getStack().join(", ")}]`;
  }

  function pushToStack() {
    const inputField = document.getElementById("stackInput");
    const resultField = document.getElementById("result");

    const value = inputField.value.trim();
    if (value === "") {
      resultField.textContent = "Error: Input cannot be empty.";
      return;
    }

    myStack.push(value);
    resultField.textContent = `Pushed "${value}" onto the stack.`;
    displayStack();
    inputField.value = ""; 
  }

  function popFromStack() {
    const resultField = document.getElementById("result");

    const poppedValue = myStack.pop();
    resultField.textContent = `Popped Value: ${poppedValue}`;
    displayStack();
  }

  function checkIfEmpty() {
    const resultField = document.getElementById("result");

    const isEmpty = myStack.isEmpty();
    resultField.textContent = isEmpty ? "The stack is empty." : "The stack is not empty.";
  }

  function getTopElement() {
    const resultField = document.getElementById("result");

    const topValue = myStack.top();
    resultField.textContent = `Top Element: ${topValue}`;
  }