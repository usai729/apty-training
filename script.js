document.addEventListener('DOMContentLoaded', function () {
    const collapsibles = document.querySelectorAll('.collapsible');

    collapsibles.forEach(collapsible => {
        collapsible.addEventListener('click', function () {
            // Toggle the "expanded" class
            this.classList.toggle('expanded');

            // Find the subsection and toggle its visibility
            const subsection = this.nextElementSibling;
            if (subsection.style.display === 'block') {
                subsection.style.display = 'none';
            } else {
                subsection.style.display = 'block';
            }
        });
    });
});

// Function to display the selected content
function showContent(topicId) {
    const topics = document.querySelectorAll('.topic');
    topics.forEach(topic => {
        topic.style.display = 'none';
    });
    const selectedTopic = document.getElementById(topicId);
    if (selectedTopic) {
        selectedTopic.style.display = 'block';
    }
}
