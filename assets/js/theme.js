
(function () {
    const themes = ["light", "dark", "grey"];
    const storageKey = "portfolio-theme";

    function applyTheme(theme) {
        if (!themes.includes(theme)) {
            theme = "light";
        }

        document.documentElement.setAttribute("data-theme", theme);

        try {
            localStorage.setItem(storageKey, theme);
        } catch (error) {
            // Theme still works for the current page.
        }

        document.querySelectorAll("[data-theme-choice]").forEach(function (button) {
            const isActive = button.dataset.themeChoice === theme;
            button.setAttribute("aria-pressed", String(isActive));
        });
    }

    let savedTheme = "light";

    try {
        savedTheme = localStorage.getItem(storageKey) || "light";
    } catch (error) {
        savedTheme = "light";
    }

    applyTheme(savedTheme);

    document.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll("[data-theme-choice]").forEach(function (button) {
            button.addEventListener("click", function () {
                applyTheme(button.dataset.themeChoice);
            });
        });
    });
})();
