const iframe = document.getElementById("iframe");
const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

const iframeHTML = `
            <table border="1px">
                <tr>
                    <th>ID</th>
                    <th>className</th>
                    <th>Tag</th>
                    <th>name</th>
                    <th>Attribute</th>
                </tr>
                <tr>
                    <td>
                        <p id="para1">Paragraph 1 with id="para1"</p>
                        <p id="para2">Paragraph 2 with id="para2"</p>
                        <p id="para3">Paragraph 3 with id="para3"</p>
                    </td>
                    <td>
                        <p class="sameClass">Paragraph 1 with class="sameClass"</p>
                        <p class="sameClass">Paragraph 2 with class="sameClass"</p>
                        <p class="sameClass">Paragraph 3 with class="sameClass"</p>
                    </td>
                    <td>
                        <span>Span 1</span>
                        <span>Span 2</span>
                        <span>Span 3</span>
                    </td>
                    <td>
                        <input type="text" name="user1" value="User 1" />
                        <input type="text" name="user2" value="User 2" />
                        <input type="text" name="user1" value="User 1" />
                    </td>
                    <td>
                        <p data-custom="value1">Paragraph with data-custom="value1"</p>
                        <p data-custom="value2">Paragraph with data-custom="value2"</p>
                        <p data-custom="value3">Paragraph with data-custom="value3"</p>
                    </td>
                </tr>
            </table>
        `;

const iframeCSS = `
            <style>
                .highlight {
                    background-color: yellow;
                }
            </style>
        `;

iframeDocument.open();
iframeDocument.write(iframeCSS + iframeHTML);
iframeDocument.close();

function changeTextColor() {
	const paragraphs = iframeDocument.querySelectorAll('p[id^="para"]');
	paragraphs.forEach((p) => {
		p.style.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
	});
}

function toggleClass() {
	const elements = iframeDocument.getElementsByClassName("sameClass");
	Array.from(elements).forEach((element) => {
		element.classList.toggle("highlight");
	});
}

function changeInnerHTML() {
	const spans = iframeDocument.getElementsByTagName("span");
	Array.from(spans).forEach((span) => {
		span.innerHTML = "Updated Content";
	});
}

function toggleDisabled() {
	const inputs = iframeDocument.getElementsByName("user1");
	inputs.forEach((input) => {
		input.disabled = !input.disabled;
	});
}

function addCustomAttribute() {
	const elements = iframeDocument.querySelectorAll("[data-custom]");
	elements.forEach((element) => {
		element.setAttribute("data-new", "new-value");
		console.log(element.getAttribute("data-new"));
	});
}

document
	.getElementById("changeTextColor")
	.addEventListener("click", changeTextColor);
document.getElementById("toggleClass").addEventListener("click", toggleClass);
document
	.getElementById("changeInnerHTML")
	.addEventListener("click", changeInnerHTML);
document
	.getElementById("toggleDisabled")
	.addEventListener("click", toggleDisabled);
document
	.getElementById("addCustomAttribute")
	.addEventListener("click", addCustomAttribute);
