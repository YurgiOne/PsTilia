document.addEventListener("DOMContentLoaded", () => {
    const resources = {
        hr: { translation: {
                title: "PS Tilia",
                description: "Ovo je višejezična stranica.",
                naviHomedescription: "Naslovnica",
                naviSectionOnedescription: "Prva Sekcija",
                naviSectionTwodescription: "Druga Sekcija",
                naviSupportDescription: "Podrška",
            }},
        en: { translation: {
                title: "PS Tilia",
                description: "This is a multilingual website.",
                naviHomedescription: "Home",
                naviSectionOnedescription: "Section uno",
                naviSectionTwodescription: "Section two",
                naviSupportDescription: "Support",
            }}
    };

    const defaultLang = "hr";
    const savedLang = localStorage.getItem("lang") || defaultLang;
    const langLinks = {
        hr: document.getElementById("lang-hr"),
        en: document.getElementById("lang-en")
    };

    // Initialize i18next
    i18next.init({ lng: savedLang, resources }, () => {
        if (savedLang !== defaultLang) updateContent();
        updateActiveLang(savedLang);
    });

    // Function to change language
    function changeLanguage(event, lang) {
        event.preventDefault();
        alert("Language change requested");

        if (lang !== i18next.language) {
            i18next.changeLanguage(lang, updateContent);
            localStorage.setItem("lang", lang);
            updateActiveLang(lang);
        }
    }

    // Attach event listeners for both click and touchstart
    Object.keys(langLinks).forEach(lang => {
        if (langLinks[lang]) {
            langLinks[lang].addEventListener("click", (event) => changeLanguage(event, lang));
            langLinks[lang].addEventListener("touchstart", (event) => changeLanguage(event, lang), { passive: false });
        }
    });

    // Update content based on selected language
    function updateContent() {
        document.querySelectorAll("[data-i18n]").forEach(el => {
            el.textContent = i18next.t(el.getAttribute("data-i18n"));
        });
    }

    // Update active language styling
    function updateActiveLang(lang) {
        Object.keys(langLinks).forEach(l => {
            if (langLinks[l]) {
                langLinks[l].classList.toggle("active-lang", l === lang);
            }
        });
    }
});
