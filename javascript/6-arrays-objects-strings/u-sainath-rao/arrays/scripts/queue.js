class Queue {
	constructor() {
		this.queue = [];
	}

	enqueue(val) {
		this.queue.push(val);
	}

	dequeue() {
		return this.queue.shift();
	}

	peek() {
		return this.queue[0];
	}

	size() {
		return this.queue.length;
	}

	isEmpty() {
		return this.queue.length === 0;
	}
}

let queue = new Queue();
const div = document.getElementById("output");

document.getElementById("dequeue").addEventListener("click", () => {
	if (queue.size() > 0) {
		queue.dequeue();
		div.textContent = "Dequeued";
	} else {
		div.textContent = "No element in queue to dequeue";
	}
});

document.getElementById("enqueue").addEventListener("click", () => {
	const num = document.getElementById("number").value;

	queue.enqueue(num);

	div.textContent = queue.queue.join(", ");
});

document.getElementById("peek").addEventListener("click", () => {
	div.textContent = "Peek element: " + queue.peek();
});

document.getElementById("size").addEventListener("click", () => {
	div.textContent = "Size of queue: " + queue.size();
});
