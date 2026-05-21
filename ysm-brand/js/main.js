document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".mobile-menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (toggle && navLinks) {
        toggle.addEventListener("click", () => {
            const isOpen = navLinks.classList.toggle("active");
            toggle.setAttribute("aria-expanded", String(isOpen));
        });

        navLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                toggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    const normalizePage = (path) => {
        const page = path.split("/").pop() || "index.html";
        return page.replace(/\.html$/, "") || "index";
    };
    const currentPage = normalizePage(window.location.pathname);
    document.querySelectorAll(".nav-links a").forEach((link) => {
        const href = normalizePage(link.getAttribute("href") || "");
        if (href === currentPage) {
            link.classList.add("active");
        }
    });
});
