document.addEventListener("DOMContentLoaded", () => {
    const resources = {
        hr: { translation: { title: "Pozdrav, svijete!", description: "Ovo je višejezična stranica." }},
        en: { translation: { title: "Hello, World!", description: "This is a multilingual website." }}
    };

    const defaultLang = "hr";
    const savedLang = localStorage.getItem("lang") || defaultLang;
    const langLinks = {
        hr: document.getElementById("lang-hr"),
        en: document.getElementById("lang-en")
    };

    // Initialize i18next
    i18next.init({
        lng: savedLang,
        resources
    }, () => {
        if (savedLang !== defaultLang) updateContent();
        updateActiveLang(savedLang);
    });

    // Language switcher logic
    Object.keys(langLinks).forEach(lang => {
        langLinks[lang].addEventListener("click", function(event) {
            event.preventDefault();
            if (lang !== i18next.language) {
                i18next.changeLanguage(lang, updateContent);
                localStorage.setItem("lang", lang);
                updateActiveLang(lang);
            }
        });
    });

    function updateContent() {
        document.querySelectorAll("[data-i18n]").forEach(el => {
            el.textContent = i18next.t(el.getAttribute("data-i18n"));
        });
    }

    function updateActiveLang(lang) {
        Object.keys(langLinks).forEach(l => {
            langLinks[l].classList.toggle("active-lang", l === lang);
        });
    }
});
