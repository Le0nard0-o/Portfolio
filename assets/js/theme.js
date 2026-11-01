
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
        } catch (error) {}

        document.querySelectorAll("[data-theme-choice]").forEach(function (button) {
            button.setAttribute(
                "aria-pressed",
                String(button.dataset.themeChoice === theme)
            );
        });
    }

    let savedTheme = "light";

    try {
        savedTheme = localStorage.getItem(storageKey) || "light";
    } catch (error) {}

    applyTheme(savedTheme);

    document.addEventListener("click", function (event) {
        const button = event.target.closest("[data-theme-choice]");

        if (!button) return;

        applyTheme(button.dataset.themeChoice);
    });
})();
