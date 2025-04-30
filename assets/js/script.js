document.addEventListener("DOMContentLoaded", () => {
    const resources = {
        hr: { translation: {
                imeTvrtke: "Poslovni Sistemi Tilia d.o.o.",
                naviDescription1: "Prednosti",
                naviDescription2: "Fiskalizacija",
                naviDescription3: "Podrška",
                naviDescription4: "Partneri",
                naviDescription5: "Kontakt",
                opisTvrtkeParagraph1: "Naša rješenja automatiziraju prepoznavanje registarskih oznaka, praćenje ulaska i izlaska vozila, naplatu te automatsko izdavanje dnevnih parkirnih karata,\n" +
                    "                        omogućujući precizan nadzor parkirališta u stvarnom vremenu.",
                opisTvrtkeParagraph2: " Naš sustav Sustav je već implementiran u više gradova i naselja diljem Hrvatske. Uključujući javne garaže i parking zone u Zagrebu, Zadru i Dubrovniku, a sudjelujemo i u razvoju centralnog sustava za nadzor i regulaciju prometa Grada Zagreba.",
                SustavautorizacijeVozila:"Sustav autorizacije vozila",
                opisProjektAutorizacija: "U suradnji s Fakultetom elektrotehnike i računarstva i uz potporu Europskog fonda za regionalni razvoj, razvijamo napredno rješenje za autorizaciju vozila. Sustav, temeljen na blockchain tehnologiji i pametnim ugovorima, automatizira upravljanje tehničkim podacima, naplatu parkiranja, sigurnu kupoprodaju i provjeru statusa vozila.",

                AutomatskiZapisProvjeraPlacanja: "Automatsko evidentiranje i provjera naplate parkinga",
                ProvjeraStatusaVozila: "Provjera statusa vozila u stvarnom vremenu (krađa, blokada)",
                OsiguranjeKupnjeProdajeVozila: "Sigurna kupoprodaja vozila putem pametnih ugovora",
                ZapisTehnickeIspravnostiIDijeljenjePodataka: "Digitalni zapis tehničke ispravnosti i dijeljenje podataka među stanicama za pregled",


                PrednostiSustava:"Prednosti našeg sustava",

                AutomatskoPrepoznavanjeVozila:"Automatsko prepoznavanje vozila",
                BeskontaktniUlazakIzlazak: "Naš OCR sustav omogućuje beskontaktni ulazak i izlazak s parkirališta, bez potrebe za papirnim kartama ili fizičkim nadzorom.",

                JednostavnoIFleksibilnoPlacanjeTitle:   "Jednostavno i fleksibilno plaćanje",
                JednostavnoIFleksibilnoPlacanjeDescription: "Korisnici mogu parkiranje platiti putem mobilne aplikacije, SMS-om ili gotovinom, uz automatsko izdavanje dnevnih parkirnih karata.",

                sustaviNaplatedescription:"Jedinstveni sustavi naplate",
                opisTvrtke:"Napredni OCR sustav za naplatu i kontrolu parkiranja. Automatiziramo prepoznavanje registarskih oznaka, praćenje ulaska i izlaska vozila, naplatu te automatsko izdavanje dnevnih parkirnih karata, omogućujući precizan nadzor parkirališta u stvarnom vremenu.",
                opisTiliaParagraph2:"Naš sustav implementiran je u više gradova i naselja diljem Hrvatske, uključujući javne garaže i parking zone u Zagrebu, Zadru i Dubrovniku, a sudjelujemo i u razvoju centralnog sustava za nadzor i regulaciju prometa Grada Zagreba.",

                OtvoreniIZatvoreniParkingTitle: "Otvoreni i zatvoreni parking",
                OtvoreniIZatvoreniParkingDescription: "Sustav se prilagođava svim vrstama parkirališta, od otvorenih zona bez rampi do zatvorenih garaža s kontroliranim ulazom i izlazom.",


                fiscalizationGDPR:"FISKALIZACIJA + GDPR",

                FiskalizacijaTitle: "Fiskalizacija",
                FiskalizacijaDescription: "Naš sustav u potpunosti je usklađen s fiskalizacijskim propisima i automatski šalje podatke Poreznoj upravi, osiguravajući pravovremeno i točno izdavanje računa.",

                GDPRTitle: "GDPR",
                GDPRDescription: "Naš sustav u potpunosti je usklađen s Općom uredbom o zaštiti podataka (GDPR), osiguravajući sigurno prikupljanje, obradu i pohranu osobnih podataka",

                KorisnickaPodrskaTitle: "Korisnička podrška",
                KorisnickaPodrskaDescription: "Naša korisnička podrška dostupna je 24/7 putem e-maila i telefona te brzo i učinkovito rješava sva pitanja i tehničke probleme",

                NasiPartneri: "Naši partneri",


                NajcescePostavljenaPitanja: "Najčešće postavljana pitanja",

                FaqQuestionPrimjenjivost: "Jesu li vaši sustavi primjenjivi na moj problem?",
                FaqAnswerPrimjenjivost: "Naši su sustavi modularni i prilagodljivi svim vrstama parkirališnih okruženja—otvorenim zonama, zatvorenim garažama i zonama s rampama. Integriraju se s postojećim naplatnim sustavima i mogu se konfigurirati prema specifičnim zahtjevima vaše lokacije.",
                FaqQuestionRampaNeDize: "Rampa se ne diže?",
                FaqAnswerRampaNeDize: "Provjerite je li registarska oznaka pravilno očitana i je li uplata obrađena putem aplikacije ili SMS-a. Ako problem potraje, sustav automatski obavještava operatera, a rampa se može otvoriti i ručno preko kontrolne konzole ili mobilne aplikacije.",
                FaqQuestionKakoPlatiti: "Kako platiti parking?",
                FaqAnswerKakoPlatiti: "Parking možete platiti putem mobilne aplikacije ili slanjem SMS-a. Nakon isteka dozvoljenog vremena sustav automatski izdaje dnevnu parkirnu kartu i dostavlja je na vašu adresu",

                KontaktirajteNas: "Kontaktirajte nas",
                CopyrightText: "© Poslovni sistemi Tilia",

                footerCtaTitle:  "Spremni za modernizaciju parkiranja?",
                footerCtaText:   "Kontaktirajte nas i otkrijte kako naši OCR i blockchain sustavi mogu unaprijediti sigurnost te optimizirati naplatu na vašim parkiralištima.",
                footerCtaButton: "Saznaj više",

            }},
        en: { translation: {
                imeTvrtke: "PS Tilia",
                naviDescription1: "Benefits",
                naviDescription2: "Fiscalization",
                naviDescription3: "Support",
                naviDescription4: "Partners",
                naviDescription5: "Contact",
                opisTvrtkeParagraph1: "We develop advanced OCR systems for parking payment and control. Our solutions automate license plate recognition, vehicle entry and exit tracking, payment processing, and automatic issuance of daily parking tickets, enabling precise real-time monitoring of parking lots.",
                opisTvrtkeParagraph2: "The system is already implemented in multiple cities and towns across Croatia – including public garages and parking zones in Zagreb, Zadar, and Dubrovnik – and we are involved in developing the central traffic monitoring and regulation system for the City of Zagreb.",
                SustavautorizacijeVozila: "Vehicle Authorization System",
                opisProjektAutorizacija: "In collaboration with the Faculty of Electrical Engineering and Computing and supported by the European Regional Development Fund, we are developing an advanced vehicle authorization solution. The blockchain and smart contract–based system automates technical data management, parking payment, secure vehicle transactions, and vehicle status verification.",



                PrednostiSustava: "Key Benefits of Our System",


                AutomatskiZapisProvjeraPlacanja: "Automatic recording and verification of parking payment",
                ProvjeraStatusaVozila: "Real-time vehicle status verification (theft, immobilization)",

                OsiguranjeKupnjeProdajeVozila: "Secure vehicle transactions via smart contracts",
                ZapisTehnickeIspravnostiIDijeljenjePodataka: "Digital logging of technical compliance and data sharing among inspection stations",

                AutomatskoPrepoznavanjeVozila: "Automatic vehicle recognition",
                BeskontaktniUlazakIzlazak: "Our OCR system enables contactless entry and exit from the parking lot without the need for paper tickets or physical supervision.",

                JednostavnoIFleksibilnoPlacanjeTitle:   "Easy and Flexible Payment",
                JednostavnoIFleksibilnoPlacanjeDescription:"Users can pay for parking via mobile app, SMS, or cash, with automatic issuance of daily parking tickets.",

                OtvoreniIZatvoreniParkingTitle: "Open and closed parking",
                OtvoreniIZatvoreniParkingDescription:"The system adapts to all types of parking lots, from open areas without barriers to enclosed garages with controlled entry and exit.",

                fiscalizationGDPR: "Fiscalization & GDPR",

                FiskalizacijaTitle: "Fiscalization",
                FiskalizacijaDescription: "Our system fully complies with fiscalization regulations and automatically transmits data to the Tax Authority, ensuring timely and accurate invoice issuance.",

                GDPRTitle: "GDPR",
                GDPRDescription: "Our system fully complies with the General Data Protection Regulation (GDPR), ensuring secure collection, processing, and storage of personal data",

                KorisnickaPodrskaTitle: "Customer Support",
                KorisnickaPodrskaDescription: "Our customer support is available 24/7 via email and phone, providing quick and efficient resolutions to all inquiries and technical issues",



                NajcescePostavljenaPitanja: "Frequently Asked Questions",

                FaqQuestionPrimjenjivost: "Are your systems applicable to my problem?",
                FaqAnswerPrimjenjivost: "Our systems are modular and adaptable to all types of parking environments—open areas, enclosed garages, and barrier-controlled zones. They integrate with existing payment systems and can be configured to meet the specific requirements of your location.",
                FaqQuestionRampaNeDize: "Does the barrier not lift?",
                FaqAnswerRampaNeDize: "Check that the license plate was correctly read and that the payment has been processed via the app or SMS. If the issue persists, the system automatically notifies the operator, and the barrier can also be manually lifted through the control console or mobile app.",
                FaqQuestionKakoPlatiti: "How can I pay for parking?",
                FaqAnswerKakoPlatiti: "You can pay for parking via our mobile app or by SMS. After the permitted time expires, the system automatically issues a daily parking ticket and delivers it to your address",

                NasiPartneri: "Our Partners",
                KontaktirajteNas: "Contact Us",

                CopyrightText: "© PS Tilia",


                footerCtaTitle:  "Ready to modernize your parking?",
                footerCtaText:   "Get in touch to learn how our OCR and blockchain solutions can enhance security and streamline payment processes at your facilities.",
                footerCtaButton: "Learn More",





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