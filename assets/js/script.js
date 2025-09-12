document.addEventListener("DOMContentLoaded", () => {
    const resources = {
        hr: {
            translation: {
                imeTvrtke: "Poslovni Sistemi Tilia d.o.o.",
                naviDescription1: "Prednosti",
                naviDescription2: "Fiskalizacija",
                naviDescription3: "Podrška",
                naviDescription4: "Partneri",
                naviDescription5: "Kontakt",

                opisTvrtkeParagraph1: "Poslovni sistemi Tilia je tvrtka koja razvija vlastiti softver za upravljanje parkiralištima – od uličnog parkiranja do garaža bez fizičkih barijera. Sustavi uključuju samonaplatne uređaje, centralizirano upravljanje u stvarnom vremenu i podršku za mobilna plaćanja, kartice, QR kodove i NFC.",
                opisTvrtkeParagraph2: "Naša rješenja su prilagođena različitim uvjetima i veličinama, uz mogućnost integracije u postojeće IT sustave. U novijim projektima koristi se i blockchain tehnologija za daljinsko očitanje brojila i sigurnu obradu podataka.",

                SustavautorizacijeVozila: "Sustav autorizacije vozila",
                opisProjektAutorizacija: "U suradnji s Fakultetom elektrotehnike i računarstva i uz potporu Europskog fonda za regionalni razvoj, razvijamo napredno rješenje za autorizaciju vozila. Sustav, temeljen na blockchain tehnologiji i pametnim ugovorima, automatizira upravljanje tehničkim podacima, naplatu parkiranja, sigurnu kupoprodaju i provjeru statusa vozila.",

                AutomatskiZapisProvjeraPlacanja: "Automatsko evidentiranje i provjera naplate parkinga",
                ProvjeraStatusaVozila: "Provjera statusa vozila u stvarnom vremenu (krađa, blokada)",
                OsiguranjeKupnjeProdajeVozila: "Sigurna kupoprodaja vozila putem pametnih ugovora",
                ZapisTehnickeIspravnostiIDijeljenjePodataka: "Digitalni zapis tehničke ispravnosti i dijeljenje podataka među stanicama za pregled",
                heroCtaNasaprica: "Više o PS Tilia",
                korisnickaPodrskaTitle: "Korisnička podrška",
                oNamaTitle: "O nama",
                opcijePlacanjaTitle: "Opcije plaćanja",
                parkingBezRampiTitle: "Otvoreni i zatvoreni parking",
                sustavAutorizacijeTitle: "Sustav autorizacije vozila",
                fiskalizacijaTitle: "Fiskalizacija prilagođena svim uređajima",


                onamaTitle: "O nama",
                onamaParagraph1: "Poslovni sistemi Tilia već desetljećima pružaju inovativna rješenja u području sustava naplate parkiranja. S ponosom razvijamo vlastiti softver koji obuhvaća širok spektar rješenja, od sustava uličnog parkiranja do naprednih sustava naplate u garažama bez fizičkih barijera.",
                onamaParagraph2: "Naša ponuda uključuje samonaplatne uređaje za naplatu parkiranja, kako na ulici, tako i na automatiziranim blagajnama u garažama, osiguravajući jednostavno i efikasno korisničko iskustvo.",
                onamaParagraph3: "Kao tehnološki lideri, razvijamo centralizirane sustave za upravljanje parkiralištima koji omogućuju potpunu kontrolu i analizu u stvarnom vremenu. Naš softver omogućuje jednostavnu integraciju s postojećim IT sustavima korisnikate podržava višestruke načine plaćanja – putem mobilnih aplikacija, kreditnih kartica, QR kodova i NFC tehnologije.",
                onamaParagraph4: "Sustavi naplate koje razvijamo prilagođeni su za rad u različitim uvjetima i veličinama, od manjih gradskih zona do velikih parkirališnih kompleksa i zračnih luka. Osim funkcionalnosti za krajnje korisnike, naš sustav nudi napredna administrativna sučelja za upravljanje cijenama, izvještavanje, nadzor i servisiranje.",
                onamaParagraph5: "Poslovni sistemi Tilia također su lideri u razvoju naprednih tehnologija, a naš najnoviji sustav omogućuje daljinsko očitanje brojila putem BlockChain platforme, čime osiguravamo visoku sigurnost i transparentnost podataka.",
                onamaParagraph6: "Kontinuiranim ulaganjima u istraživanje i razvoj, težimo ostati ispred potreba tržišta i našim klijentima pružiti rješenja koja donose pouzdanost, učinkovitost i digitalnu transformaciju u svakodnevnom upravljanju parkirališnim prostorima.",

                PrednostiSustava: "Prednosti našeg sustava",

                AutomatskoPrepoznavanjeVozila: "Automatsko prepoznavanje vozila",
                BeskontaktniUlazakIzlazak: "Naš OCR sustav omogućuje beskontaktni ulazak i izlazak s parkirališta, bez potrebe za papirnim kartama ili fizičkim nadzorom.",

                JednostavnoIFleksibilnoPlacanjeTitle: "Jednostavno i fleksibilno plaćanje",
                JednostavnoIFleksibilnoPlacanjeDescription: "Korisnici mogu parkiranje platiti putem mobilne aplikacije, SMS-om ili gotovinom, uz automatsko izdavanje dnevnih parkirnih karata.",

                sustaviNaplatedescription: "Jedinstveni sustavi naplate",
                opisTvrtke: "Napredni OCR sustav za naplatu i kontrolu parkiranja. Automatiziramo prepoznavanje registarskih oznaka, praćenje ulaska i izlaska vozila, naplatu te automatsko izdavanje dnevnih parkirnih karata, omogućujući precizan nadzor parkirališta u stvarnom vremenu.",
                opisTiliaParagraph2: "Naš sustav implementiran je u više gradova i naselja diljem Hrvatske, uključujući javne garaže i parking zone u Zagrebu, Zadru i Dubrovniku, a sudjelujemo i u razvoju centralnog sustava za nadzor i regulaciju prometa Grada Zagreba.",

                OtvoreniIZatvoreniParkingTitle: "Otvoreni i zatvoreni parking",
                OtvoreniIZatvoreniParkingDescription: "Sustav se prilagođava svim vrstama parkirališta, od otvorenih zona bez rampi do zatvorenih garaža s kontroliranim ulazom i izlazom.",


                fiscalizationGDPR: "Fiskalizacija i GDPR",

                FiskalizacijaTitle: "Fiskalizacija",
                FiskalizacijaDescription: "Naš sustav u potpunosti je usklađen s fiskalizacijskim propisima i automatski šalje podatke Poreznoj upravi, osiguravajući pravovremeno i točno izdavanje računa.",

                GDPRTitle: "GDPR",
                GDPRDescription: "Naš sustav u potpunosti je usklađen s Općom uredbom o zaštiti podataka (GDPR), osiguravajući sigurno prikupljanje, obradu i pohranu osobnih podataka.",

                KorisnickaPodrskaTitle: "Korisnička podrška",
                KorisnickaPodrskaDescription: "Naša korisnička podrška dostupna je 24/7 putem e-maila i telefona te brzo i učinkovito rješava sva pitanja i tehničke probleme.",

                NasiPartneri: "Naši partneri",


                NajcescePostavljenaPitanja: "Najčešće postavljana pitanja",

                FaqQuestionPrimjenjivost: "Jesu li vaši sustavi primjenjivi na moj problem?",
                FaqAnswerPrimjenjivost: "Naši su sustavi modularni i prilagodljivi svim vrstama parkirališnih okruženja—otvorenim zonama, zatvorenim garažama i zonama s rampama. Integriraju se s postojećim naplatnim sustavima i mogu se konfigurirati prema specifičnim zahtjevima vaše lokacije.",
                FaqQuestionRampaNeDize: "Rampa se ne diže?",
                FaqAnswerRampaNeDize: "Provjerite je li registarska oznaka pravilno očitana i je li uplata obrađena putem aplikacije ili SMS-a. Ako problem potraje, sustav automatski obavještava operatera, a rampa se može otvoriti i ručno preko kontrolne konzole ili mobilne aplikacije.",
                FaqQuestionKakoPlatiti: "Kako platiti parking?",
                FaqAnswerKakoPlatiti: "Parking možete platiti putem mobilne aplikacije ili slanjem SMS-a. Nakon isteka dozvoljenog vremena sustav automatski izdaje dnevnu parkirnu kartu i dostavlja je na vašu adresu.",

                KontaktirajteNas: "Kontaktirajte nas",
                CopyrightText: "© Poslovni sistemi Tilia",

                footerCtaTitle: "Spremni za modernizaciju parkiranja?",
                footerCtaText: "Kontaktirajte nas i otkrijte kako naši OCR i blockchain sustavi mogu unaprijediti sigurnost te optimizirati naplatu na vašim parkiralištima.",
                footerCtaButton: "Saznaj više",

                vehicleAuthTitle: "Sustav autorizacije vozila",
                vehicleAuthParagraph1: "Naši sustavi koriste naprednu tehnologiju automatskog prepoznavanja registarskih oznaka (ANPR), koja putem kamera visoke rezolucije omogućuje precizno i brzo identificiranje vozila pri ulasku i izlasku s parkirališta. Sustav radi u stvarnom vremenu, automatski bilježi registarske oznake bez potrebe za fizičkom interakcijom korisnika s uređajem ili upotrebom kartica, ulaznica i rampi.",
                vehicleAuthParagraph2: "Ova tehnologija omogućuje potpuno automatiziran proces kontrole pristupa i naplate, čime se smanjuju gužve i povećava protočnost prometa, posebno u frekventnim zonama kao što su šoping centri, zračne luke, bolnice ili poslovne zone. Sustav je u potpunosti integriran s našim softverom za naplatu, što znači da se informacije o ulasku i izlasku vozila automatski povezuju sa statusom plaćanja, omogućujući izdavanje računa ili opomena u slučaju neplaćanja.",
                vehicleAuthParagraph3: "ANPR tehnologija također omogućuje praćenje zadržavanja vozila, naprednu analitiku i prilagodbu pravila naplate prema vremenskim ili tarifnim zonama. Visoka točnost prepoznavanja i otpornost na vremenske uvjete dodatno osiguravaju pouzdan rad sustava u svim okruženjima.",


                flexiblePaymentTitle: "Jednostavno i fleksibilno plaćanje",
                flexiblePaymentParagraph1: "Korisnicima omogućujemo širok spektar opcija za jednostavno, brzo i sigurno plaćanje parkiranja. Osim putem moderne mobilne aplikacije koja omogućuje pregled trajanja parkiranja i jednostavnu nadoplatu, parkiranje je moguće platiti i slanjem SMS poruke – idealno za korisnike u pokretu.",
                flexiblePaymentParagraph2: "Samonaplatni uređaji na terenu opremljeni su POS terminalima koji prihvaćaju kartično plaćanje, uključujući beskontaktne metode, čime se dodatno podiže dostupnost i praktičnost naplate. Ovaj fleksibilan model plaćanja osigurava korisnički doživljaj bez stresa i čekanja, a posebno je učinkovit u urbanim sredinama, turističkim lokacijama i zračnim lukama.",
                flexiblePaymentParagraph3: "Integracija svih kanala naplate u jedinstveni sustav omogućuje lako praćenje i upravljanje transakcijama u stvarnom vremenu, s visokim stupnjem pouzdanosti i sigurnosti.",

                openClosedParkingTitle: "Otvoreni i zatvoreni parking – sustav bez rampi",
                openClosedParkingParagraph1: "Naš napredni sustav naplate parkiranja eliminira potrebu za fizičkim barijerama korištenjem tehnologije automatskog prepoznavanja registarskih oznaka (ANPR). Kamere bilježe ulazak i izlazak svakog vozila, precizno mjere vrijeme zadržavanja i automatski provjeravaju status plaćanja u realnom vremenu.",
                openClosedParkingParagraph2: "Ukoliko korisnik nije izvršio plaćanje u propisanom roku, sustav automatski generira račun koji se šalje na kućnu adresu vlasnika vozila, čime se osigurava visoka razina kontrole i monetizacije parkirališta. Ovaj model rada omogućuje besprijekoran protok prometa bez zaustavljanja i zastoja, čime se značajno povećava efikasnost, a korisničko iskustvo podiže na novu razinu.",
                openClosedParkingParagraph3: "Rješenje je idealno za otvorene i zatvorene tipove parkinga, posebno u hotelskim kompleksima, trgovačkim centrima, zdravstvenim ustanovama i poslovnim zonama. Sustav je modularan, lako se integrira u postojeću infrastrukturu i omogućuje daljinsko upravljanje te centralizirani nadzor.",
                openClosedParkingParagraph4: "Osim funkcionalnosti, sustav nudi i napredne analitičke alate za upravitelje koji žele optimizirati kapacitete, povećati prihod i smanjiti operativne troškove. Prilagodljivost i skalabilnost čine ga idealnim za sve oblike naplate – od javnih površina do privatnih zona s kontroliranim pristupom.",

                fiscalizationSystemTitle: "Fiskalizacija – prilagođena svim uređajima",
                fiscalizationSystemParagraph1: "Naš fiskalni sustav razvijen je tako da u potpunosti odgovara svim zakonskim zahtjevima fiskalizacije i integrira se s različitim samonaplatnim uređajima, bez obzira na njihovu lokaciju ili namjenu. Bilo da se radi o naplati na uličnim parkomatima, garažnim automatima ili mobilnim aplikacijama, sustav osigurava pravodobno slanje svih potrebnih podataka u Poreznu upravu.",
                fiscalizationSystemParagraph2: "Integracija fiskalizacije s našim centralnim softverskim rješenjem omogućuje potpuni nadzor nad izdanim računima, fiskalnim potvrdama i prometom u stvarnom vremenu. Administratori i operateri sustava imaju pristup detaljnim izvješćima, što omogućuje brzu analizu i uvid u poslovanje.",
                fiscalizationSystemParagraph3: "Posebna pažnja posvećena je sigurnosti sustava, enkripciji podataka i zaštiti osobnih informacija korisnika, čime osiguravamo usklađenost s propisima o zaštiti podataka (GDPR). Naš sustav fiskalizacije omogućuje jednostavnu i brzu integraciju u bilo koji postojeći parkirni sustav, čime se štedi vrijeme i resursi prilikom implementacije.",
                fiscalizationSystemParagraph4: "Sustav je pouzdan, robustan i prilagođen visokim opterećenjima te omogućuje neprekidno i stabilno poslovanje u svim uvjetima.",

                privacyTitle: "Politika privatnosti web stranice",
                privacyIntro: "Ova web stranica ne prikuplja osobne podatke, ne koristi kolačiće te ne prikuplja niti obrađuje podatke kao što su IP adresa, lokacija ili tehnički identifikatori korisnika.",
                privacyNoTracking: "U pregledniku se lokalno može pohraniti tehnička postavka jezika sučelja, isključivo radi poboljšanja korisničkog prikaza. Ta se postavka ne povezuje s korisnikom, ne šalje se s uređaja i nije dostupna trećim stranama.",

                privacyLink: "Izjava o privatnosti web stranice",

                ZastoBasPsTiliaTitle: "Zašto PS Tilia",
                ZastoGradoviTitle: "Primjena u gradovima",
                ZastoGradoviText: "Sustav implementiran u više hrvatskih gradova - od garaža do otvorenih zona.",
                ZastoRazvojTitle: "Vlastiti razvoj",
                ZastoRazvojText: "Brze prilagodbe, bez ovisnosti o dobavljačima.",
                ZastoIntegracijaTitle: "Real-time integracija",
                ZastoIntegracijaText: "Komunikacija bez kašnjenja sa svim uređajima.",
                ZastoSkalabilnostTitle: "Skalabilnost",
                ZastoSkalabilnostText: "Od manjih sustava do gradskih mreža — bez preinaka.",
                ZastoSigurnostTitle: "Sigurnost i otpornost",
                ZastoSigurnostText: "Napredna zaštita podataka i otpornost sustava na pogreške i manipulaciju.",
                ZastoGdprTitle: "GDPR & fiskalizacija",
                ZastoGdprText: "Potpuno usklađeno, sigurno i transparentno."


            }
        },
        en: {
            translation: {
                imeTvrtke: "PS Tilia",
                naviDescription1: "Benefits",
                naviDescription2: "Fiscalization",
                naviDescription3: "Support",
                naviDescription4: "Partners",
                naviDescription5: "Contact",

                opisTvrtkeParagraph1: "PS Tilia develops its own software for parking management – from street-level parking to barrier-free garages. The systems include self-service payment machines, centralized real-time management, and support for mobile payments, cards, QR codes, and NFC.",
                opisTvrtkeParagraph2: "Solutions are adapted to different conditions and scales, with the ability to integrate into existing IT infrastructure. Recent projects also incorporate BlockChain technology for remote meter reading and secure data processing.",

                SustavautorizacijeVozila: "Vehicle Authorization System",
                opisProjektAutorizacija: "In collaboration with the Faculty of Electrical Engineering and Computing and supported by the European Regional Development Fund, we are developing an advanced vehicle authorization solution. The blockchain and smart contract–based system automates technical data management, parking payment, secure vehicle transactions, and vehicle status verification.",


                onamaTitle: "About Us",
                onamaParagraph1: "For decades, PS Tilia has been delivering innovative solutions in the field of parking payment systems. We proudly develop our own software, covering a wide range of solutions – from street parking systems to advanced barrier-free garage solutions.",
                onamaParagraph2: "Our offering includes self-service payment terminals for both on-street and automated garage parking, ensuring a simple and efficient user experience.",
                onamaParagraph3: "As technology leaders, we develop centralized parking management systems that provide full control and real-time analysis. Our software integrates easily with existing IT systems and supports multiple payment methods – via mobile apps, credit cards, QR codes, and NFC.",
                onamaParagraph4: "The payment systems we develop are adapted for use in various conditions and scales, from small urban zones to large parking complexes and airports. In addition to user functionalities, our system offers advanced administrative interfaces for price management, reporting, monitoring, and servicing.",
                onamaParagraph5: "PS Tilia is also a pioneer in developing advanced technologies. Our latest system enables remote meter reading through a blockchain platform, ensuring high data security and transparency.",
                onamaParagraph6: "Through continuous investment in research and development, we strive to stay ahead of market needs and deliver solutions that ensure reliability, efficiency, and digital transformation in everyday parking management.",
                heroCtaNasaprica: "More about PS Tilia",
                korisnickaPodrskaTitle: "Customer Support",
                oNamaTitle: "About Us",
                opcijePlacanjaTitle: "Payment Options",
                parkingBezRampiTitle: "Open and Closed Parking",
                sustavAutorizacijeTitle: "Vehicle Authorization System",
                fiskalizacijaTitle: "Fiscalization – compatible with all devices",

                PrednostiSustava: "Key Benefits of Our System",
                AutomatskiZapisProvjeraPlacanja: "Automatic recording and verification of parking payment",
                ProvjeraStatusaVozila: "Real-time vehicle status verification (theft, immobilization)",

                OsiguranjeKupnjeProdajeVozila: "Secure vehicle transactions via smart contracts",
                ZapisTehnickeIspravnostiIDijeljenjePodataka: "Digital logging of technical compliance and data sharing among inspection stations",

                AutomatskoPrepoznavanjeVozila: "Automatic vehicle recognition",
                BeskontaktniUlazakIzlazak: "Our OCR system enables contactless entry and exit from the parking lot without the need for paper tickets or physical supervision.",

                JednostavnoIFleksibilnoPlacanjeTitle: "Easy and Flexible Payment",
                JednostavnoIFleksibilnoPlacanjeDescription: "Users can pay for parking via mobile app, SMS, or cash, with automatic issuance of daily parking tickets.",

                OtvoreniIZatvoreniParkingTitle: "Open and closed parking",
                OtvoreniIZatvoreniParkingDescription: "The system adapts to all types of parking lots, from open areas without barriers to enclosed garages with controlled entry and exit.",

                fiscalizationGDPR: "Fiscalization and GDPR",

                FiskalizacijaTitle: "Fiscalization",
                FiskalizacijaDescription: "Our system fully complies with fiscalization regulations and automatically transmits data to the Tax Authority, ensuring timely and accurate invoice issuance.",

                GDPRTitle: "GDPR",
                GDPRDescription: "Our system fully complies with the General Data Protection Regulation (GDPR), ensuring secure collection, processing, and storage of personal data.",

                KorisnickaPodrskaTitle: "Customer Support",
                KorisnickaPodrskaDescription: "Our customer support is available 24/7 via email and phone, providing quick and efficient resolutions to all inquiries and technical issues.",


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


                footerCtaTitle: "Ready to modernize your parking?",
                footerCtaText: "Get in touch to learn how our OCR and blockchain solutions can enhance security and streamline payment processes at your facilities.",
                footerCtaButton: "Learn More",


                vehicleAuthTitle: "Vehicle Authorization System",
                vehicleAuthParagraph1: "Our systems use advanced Automatic Number Plate Recognition (ANPR) technology, enabling fast and accurate vehicle identification upon entry and exit using high-resolution cameras. The system works in real time, recording license plates automatically without user interaction, tickets, cards, or barriers.",
                vehicleAuthParagraph2: "This technology enables a fully automated access and payment process, reducing congestion and improving traffic flow, especially in busy zones such as shopping centers, airports, hospitals, or business areas. It is fully integrated with our payment software, automatically linking entry/exit data with payment status and enabling billing or warnings for unpaid sessions.",
                vehicleAuthParagraph3: "ANPR technology also supports vehicle dwell time tracking, advanced analytics, and flexible billing rules based on time or tariff zones. High recognition accuracy and resistance to weather ensure reliable operation in all environments.",


                flexiblePaymentTitle: "Simple and Flexible Payment",
                flexiblePaymentParagraph1: "We offer users a wide range of options for simple, fast, and secure parking payments. In addition to a modern mobile app that allows users to monitor parking duration and easily extend time, payment can also be made via SMS—ideal for users on the go.",
                flexiblePaymentParagraph2: "Self-service payment terminals on-site are equipped with POS systems that accept card payments, including contactless methods, increasing convenience and accessibility. This flexible payment model ensures a stress-free and efficient experience, particularly in urban centers, tourist zones, and airports.",
                flexiblePaymentParagraph3: "Integrating all payment channels into a unified system enables real-time transaction tracking and management, with a high level of reliability and security.",

                openClosedParkingTitle: "Open and Closed Parking – Barrier-Free System",
                openClosedParkingParagraph1: "Our advanced parking payment system eliminates the need for physical barriers using Automatic Number Plate Recognition (ANPR) technology. Cameras record vehicle entry and exit, accurately measure parking duration, and automatically verify payment status in real time.",
                openClosedParkingParagraph2: "If the user fails to pay within the designated timeframe, the system automatically generates an invoice and sends it to the vehicle owner's home address, ensuring a high level of control and monetization. This model allows seamless traffic flow without stops or delays, significantly improving efficiency and user experience.",
                openClosedParkingParagraph3: "The solution is ideal for both open and closed parking types, especially in hotel complexes, shopping centers, medical facilities, and business zones. The system is modular, easily integrates into existing infrastructure, and enables remote control and centralized monitoring.",
                openClosedParkingParagraph4: "In addition to functionality, the system offers advanced analytics tools for operators aiming to optimize capacity, increase revenue, and reduce operational costs. Its adaptability and scalability make it ideal for all types of payment environments—from public spaces to private access-controlled zones.",

                fiscalizationSystemTitle: "Fiscalization – Compatible with All Devices",
                fiscalizationSystemParagraph1: "Our fiscal system is fully compliant with all legal requirements and integrates seamlessly with various self-service devices, regardless of their location or purpose. Whether it’s a street parking machine, a garage terminal, or a mobile app, the system ensures timely transmission of all required data to the Tax Authority.",
                fiscalizationSystemParagraph2: "Integration of fiscalization with our central software solution provides complete real-time oversight of issued receipts, confirmations, and transactions. System administrators and operators have access to detailed reports for quick analysis and business insight.",
                fiscalizationSystemParagraph3: "Special attention has been given to system security, data encryption, and protection of users’ personal information, ensuring full compliance with data protection regulations (GDPR). Our fiscal system allows easy and quick integration with any existing parking system, saving time and resources during implementation.",
                fiscalizationSystemParagraph4: "The system is reliable, robust, and built to handle high loads, enabling continuous and stable operation in all conditions.",

                privacyTitle: "Website Privacy Policy",
                privacyIntro: "This website does not collect personal data, does not use cookies, and does not collect or process information such as IP addresses, location data, or technical identifiers.",
                privacyNoTracking: "A language preference setting may be stored locally in the user's browser solely to improve content display. This setting is not linked to the user, does not leave the device, and is not accessible to third parties.",
                privacyLink: "Website Privacy Statement",

                ZastoBasPsTiliaTitle: "Why PS Tilia",
                ZastoGradoviTitle: "Urban deployment",
                ZastoGradoviText: "System deployed in many Croatian cities – from garages to open zones.",
                ZastoRazvojTitle: "In-house development",
                ZastoRazvojText: "Fast adaptations, no vendor lock-in.",
                ZastoIntegracijaTitle: "Real-time integration",
                ZastoIntegracijaText: "Instant communication with all devices.",
                ZastoSkalabilnostTitle: "Scalability",
                ZastoSkalabilnostText: "From small setups to city-wide networks — without rework.",
                ZastoSigurnostTitle: "Security and resilience",
                ZastoSigurnostText: "Advanced data protection and system resistance to faults and tampering.",
                ZastoGdprTitle: "GDPR and fiscalization",
                ZastoGdprText: "Fully compliant, secure and transparent."

            }
        }
    };

    const defaultLang = "hr";
    const savedLang = localStorage.getItem("lang") || defaultLang;
    const langLinks = {
        hr: document.getElementById("lang-hr"),
        en: document.getElementById("lang-en")
    };


    // Initialize i18next
    i18next.init({lng: savedLang, resources}, () => {
        updateContent();
        document.documentElement.lang = savedLang;
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
            // langLinks[lang].addEventListener("touchstart", (event) => changeLanguage(event, lang), { passive: false });
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


$(document).ready(function () {
    $('.faq-answer').hide();

    // Toggle answer when question is clicked
    $('.faq-question').on('click', function () {
        $(this).toggleClass('active');
        $(this).next('.faq-answer').slideToggle(200);
    });

    // Also, collapse the answer when it itself is clicked
    $('.faq-answer').on('click', function () {
        $(this).slideUp(200);
        $(this).prev('.faq-question').removeClass('active');
    });
});

window.onload = () => {
    document.body.classList.remove("is-preload");
};