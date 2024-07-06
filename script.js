document.addEventListener("DOMContentLoaded", function() {
    const headerLinks = document.querySelectorAll(".header-note a");

    headerLinks.forEach(link => {
        link.addEventListener("click", function() {
            // Remove the "active" class from all links
            headerLinks.forEach(otherLink => {
                otherLink.classList.remove("active");
            });

            // Add the "active" class to the clicked link
            link.classList.add("active");
        });
    });
});
