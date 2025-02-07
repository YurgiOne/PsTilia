document.addEventListener("DOMContentLoaded", () => {
    const resources = {
        hr: { translation: {
                imeTvrtke: "Poslovni Sistemi Tilia d.o.o.",
                sustaviNaplatedescription:"Jedinstveni sustavi naplate",
                opisTvrtke:"Napredni OCR sustav za naplatu i kontrolu parkiranja. Automatiziramo prepoznavanje registarskih oznaka, praćenje ulaska i izlaska vozila, naplatu te automatsko izdavanje dnevnih parkirnih karata, omogućujući precizan nadzor parkirališta u stvarnom vremenu.",
                sekcijaDvaNaslov:"Ključne Prednosti",
                description: "Ovo je višejezična stranica.",
                naviHomedescription: "NASLOVNICA",
                naviSectionOnedescription: "PRVA SEKCIJA",
                naviSectionTwodescription: "DRUGA SEKCIJA",
                naviSupportDescription: "PODRŠKA",
            }},
        en: { translation: {
                imeTvrtke: "PS Tilia",
                description: "This is a multilingual website.",
                sustaviNaplatedescription:" ",
                naviHomedescription: "HOME",
                naviSectionOnedescription: "SECTION ONE",
                naviSectionTwodescription: "SECTION TWO",
                naviSupportDescription: "SUPPORT",
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


$(document).ready(function(){
    $('.faq-answer').hide();

    // Toggle answer when question is clicked
    $('.faq-question').on('click', function() {
        $(this).toggleClass('active');
        $(this).next('.faq-answer').slideToggle(200);
    });

    // Also, collapse the answer when it itself is clicked
    $('.faq-answer').on('click', function() {
        $(this).slideUp(200);
        $(this).prev('.faq-question').removeClass('active');
    });
});