const viewMoreBtn = document.getElementById("viewMoreBtn");
const postGrid = document.getElementById("postGrid");

if (viewMoreBtn && postGrid) {
    viewMoreBtn.addEventListener("click", () => {
        const isExpanded = postGrid.classList.toggle("is-expanded");
        viewMoreBtn.textContent = isExpanded ? "View Less" : "View More";
    });
}

const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");

if (menuToggle && siteNav) {
    const closeMenu = () => {
        siteNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
    };

    menuToggle.addEventListener("click", () => {
        const isOpen = siteNav.classList.toggle("is-open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    siteNav.addEventListener("click", (event) => {
        if (event.target.classList.contains("nav-link")) {
            closeMenu();
        }
    });

    document.addEventListener("click", (event) => {
        if (!siteNav.contains(event.target) && !menuToggle.contains(event.target)) {
            closeMenu();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
            closeMenu();
        }
    });
}
