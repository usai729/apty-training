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
        const iframe = topic.children[0];
        iframe.src = '';
    });
    const selectedTopic = document.getElementById(topicId);
    if (selectedTopic) {
        selectedTopic.style.display = 'block';
        const iframe = selectedTopic.children[0];
        iframe.src = iframe.dataset.src;
    }
}

window.onload = function() {
    setTimeout(() => {
        var page = window.location.hash.replace('#','') || 'html-assignment1';
        var sidebarHeader = document.querySelector('[href="#'+page.split('-')[0]+'"]');
        if (sidebarHeader) {
            sidebarHeader.click();
        }
        var subSidebarHeader = document.querySelector('[href="#'+page+'"]');
        if (subSidebarHeader) {
            subSidebarHeader.click();
        }
    }, 500);
};
