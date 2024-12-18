const shadowHTML = `
            <style>
                table {
                    width: 50%;
                    border-collapse: collapse;
                    margin: auto;
                }
                th, td {
                    border: 1px solid black;
                    padding: 10px;
                    text-align: center;
                }
                button {
                    margin: 2px;
                }
            </style>
            <table id="myTable">
                <thead>
                    <tr>
                        <th>Row Number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    ${Array.from(
											{ length: 10 },
											(_, i) => `
                        <tr>
                            <td>Row ${i + 1}</td>
                            <td>
                                <button onclick="setActiveRow(${
																	i + 1
																})">Select</button>
                            </td>
                        </tr>`
										).join("")}
                </tbody>
            </table>
            <script>
                let activeRow = null;
                function setActiveRow(rowNumber) {
                    activeRow = document.querySelectorAll('#myTable tbody tr')[rowNumber - 1];
                }
                function getActiveRow() {
                    return activeRow;
                }
            </script>
        `;

const shadowContainer = document.getElementById("shadowContainer");
const shadowRoot = shadowContainer.attachShadow({ mode: "open" });

const shadowContent = document.createElement("div");
shadowContent.innerHTML = shadowHTML;
shadowRoot.appendChild(shadowContent);

document.getElementById("moveUpBtn").addEventListener("click", () => {
	const activeRow = shadowRoot.querySelector("#myTable tbody tr.active");
	if (!activeRow) return alert("Select a row first!");
	const prevRow = activeRow.previousElementSibling;
	if (prevRow) {
		activeRow.parentNode.insertBefore(activeRow, prevRow);
	}
});

document.getElementById("moveDownBtn").addEventListener("click", () => {
	const activeRow = shadowRoot.querySelector("#myTable tbody tr.active");
	if (!activeRow) return alert("Select a row first!");
	const nextRow = activeRow.nextElementSibling;
	if (nextRow) {
		activeRow.parentNode.insertBefore(nextRow, activeRow);
	}
});

document.getElementById("moveTopBtn").addEventListener("click", () => {
	const activeRow = shadowRoot.querySelector("#myTable tbody tr.active");
	if (!activeRow) return alert("Select a row first!");
	const tableBody = activeRow.parentNode;
	tableBody.insertBefore(activeRow, tableBody.firstElementChild);
});

document.getElementById("moveBottomBtn").addEventListener("click", () => {
	const activeRow = shadowRoot.querySelector("#myTable tbody tr.active");
	if (!activeRow) return alert("Select a row first!");
	const tableBody = activeRow.parentNode;
	tableBody.appendChild(activeRow);
});

shadowRoot.addEventListener("click", (e) => {
	if (e.target.tagName === "BUTTON" && e.target.textContent === "Select") {
		shadowRoot
			.querySelectorAll("#myTable tbody tr")
			.forEach((row) => row.classList.remove("active"));
		e.target.closest("tr").classList.add("active");
	}
});
