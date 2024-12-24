document.addEventListener("DOMContentLoaded", function () {
	const collapsibles = document.querySelectorAll(".collapsible");

	collapsibles.forEach((collapsible) => {
		collapsible.addEventListener("click", function () {
			// Toggle the "expanded" class
			this.classList.toggle("expanded");

			// Find the subsection and toggle its visibility
			const subsection = this.nextElementSibling;
			if (subsection.style.display === "block") {
				subsection.style.display = "none";
			} else {
				subsection.style.display = "block";
			}
		});
	});
});

// Function to display the selected content
function showContent(topicId, event) {
	const topics = document.querySelectorAll(".topic");
	let checkBox_menu = document.querySelector("#menu");

	topics.forEach((topic) => {
		topic.style.display = "none";
		const iframe = topic.children[0];
		iframe.src = ""; // Clear the iframe content
	});

	const selectedTopic = document.getElementById(topicId);
	if (selectedTopic) {
		selectedTopic.style.display = "block";
		const iframe = selectedTopic.children[0];
		iframe.src = iframe.dataset.src; // Load the iframe content
	}

	checkBox_menu.checked = false;
	toggleSidebar(checkBox_menu);

	// Prevent scrolling to the selected topic
	if (event) {
		event.preventDefault(); // Prevent the default scroll behavior (if any)
	}

	// Optionally, you can also reset the hash or stop page scrolling if needed
	history.replaceState(null, null, window.location.pathname); // Remove hash from the URL
}

window.onload = function () {
	var page = window.location.hash.replace("#", "") || "html-assignment1";
	var sidebarHeader = document.querySelector(
		'[href="#' + page.split("-")[0] + '"]'
	);
	if (sidebarHeader) {
		sidebarHeader.click(); // This may be causing the scroll if not handled properly
	}

	var subSidebarHeader = document.querySelector('[href="#' + page + '"]');
	if (subSidebarHeader) {
		subSidebarHeader.click(); // This triggers the collapse or expansion of the submenu, possibly leading to a scroll
	}

	// Prevent scrolling to the page anchor and reset the page scroll position
	history.replaceState(null, null, window.location.pathname); // Remove hash from the URL
};

function toggleSidebar(event) {
	let sidebar = document.querySelector("aside");
	let checked = event.checked;

	if (checked) {
		sidebar.style.display = "block";
	} else {
		sidebar.style.display = "none";
	}
}

function close_menu() {
	document.querySelector("aside").style.display = "none";
}
