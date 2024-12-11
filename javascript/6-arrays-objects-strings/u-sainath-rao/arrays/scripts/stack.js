class Stack {
	constructor(val = undefined) {
		if (val) {
			this.stack = [val];
		} else {
			this.stack = [];
		}
	}

	push(val) {
		this.stack.push(val);
	}

	pop() {
		return this.stack.pop();
	}

	peek() {
		return this.stack[this.stack.length - 1];
	}

	size() {
		return this.stack.length;
	}

	isEmpty() {
		return this.stack.length > 0 ? false : true;
	}
}

let stack = new Stack();
const div = document.getElementById("output");

document.getElementById("pop").addEventListener("click", () => {
	if (stack.size() > 0) {
		stack.pop();
		div.textContent = "Popped";
	} else {
		div.textContent = "No element in stack to pop";
	}
});

document.getElementById("push").addEventListener("click", () => {
	const num = document.getElementById("number").value;

	stack.push(num);

	div.textContent = stack.stack.reverse().join(", ");
});

document.getElementById("peek").addEventListener("click", () => {
	div.textContent = "Peek element: " + stack.peek();
});

document.getElementById("size").addEventListener("click", () => {
	div.textContent = "Size of stack: " + stack.size();
});
