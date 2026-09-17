const viewMoreBtn = document.getElementById("viewMoreBtn");
const postGrid = document.getElementById("postGrid");

if (viewMoreBtn && postGrid) {
    viewMoreBtn.addEventListener("click", () => {
        const isExpanded = postGrid.classList.toggle("is-expanded");
        viewMoreBtn.textContent = isExpanded ? "View Less" : "View More";
    });
}
