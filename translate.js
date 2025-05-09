<script>
  // Übersetzungsobjekt: Alle Texte als Variablen für die unterstützten Sprachen
  const translations = {
    de: {
      nav: {
        home: "Home",
        faq: "FAQ",
        contact: "Kontakt"
      },
      hero: {
        title:       "EachPart",
        description: "Steigere deine Motivation, finde Anerkennung, lebe Fairness und bewahre Erinnerungen.",
        android:     "Für Android herunterladen",
        ios:         "Für iOS herunterladen"
      },
      about: {
        title: "Über EachPart",
        text1: "EachPart ist deine App, um gemeinsame Erfolge fair darzustellen, das Engagement jedes Teammitglieds sichtbar zu machen, wertvolle Erinnerungen zu bewahren – und dich zu motivieren: Wer kennt nicht die nie endenden Wäscheberge, den schmutzigen Geschirrstapel oder das Chaos im Zimmer?",
        text2: "Egal ob du ein Event organisierst, ein gemeinsames Projekt durchführst oder sportliche Herausforderungen bewältigst – EachPart unterstützt dich dabei, Leistungen aufzuschlüsseln und Gerechtigkeit herzustellen."
      },
      features: {
        title: "Unsere Highlights",
        feature1: {
          title: "Anerkennung",
          text:  "Sorge dafür, dass kein Einsatz übersehen wird und jeder seine verdiente Wertschätzung erhält."
        },
        feature2: {
          title: "Fairness",
          text:  "Behalte stets den Überblick, wer wie viel beigetragen hat, damit Erfolge transparent und gerecht aufgeteilt werden können."
        },
        feature3: {
          title: "Erinnerungen",
          text:  "Bewahre gemeinsam erzielte Meilensteine und schöne Erlebnisse."
        },
        feature4: {
          title: "Motivation",
          text:  "Stärke euren Teamgeist durch spielerisches Kräftemessen: Setzt euch gemeinsame Ziele, verfolgt eure Fortschritte in Echtzeit und feuert euch gegenseitig an, um immer das nächste Level zu erreichen."
        }
      },
      contact: {
        title:  "Kontakt",
        text:   "Du hast Fragen oder möchtest Feedback geben? Wir freuen uns darauf, von dir zu hören.",
        button: "E-Mail an Support"
      },
      datenschutz: {
        title:            "Datenschutzerklärung",
        intro:            "Wir nehmen den Schutz deiner persönlichen Daten sehr ernst. In dieser Datenschutzerklärung informieren wir dich über Art, Umfang und Zweck der Verarbeitung deiner Daten.",
        responsible:      "Verantwortlich für die Datenverarbeitung ist:",
        dataCollection:   "Beim Besuch unserer Website werden automatisch Informationen wie IP-Adresse, Browsertyp und Zugriffszeiten erfasst.",
        cookies:          "Unsere Website verwendet Cookies, um das Nutzererlebnis zu verbessern.",
        rights:           "Du hast das Recht auf Auskunft, Berichtigung und Löschung deiner Daten."
      },
      impressum: {
        title:                    "Impressum",
        company:                  "EachPart GmbH",
        address:                  "Musterstraße 1, 12345 Musterstadt",
        phone:                    "Telefon: +49 123 456789",
        email:                    "E-Mail: info@eachpart.com",
        representative:           "Vertreten durch: Max Mustermann",
        contentResponsibility:    "Verantwortlich für den Inhalt: Max Mustermann"
      },
      footer: {
        text: "&copy; 2025 EachPart. Alle Rechte vorbehalten."
      }
    },
    en: {
      nav: {
        home: "Home",
        faq:  "FAQ",
        contact: "Contact"
      },
      hero: {
        title:       "EachPart",
        description: "Boost your motivation, gain recognition, embrace fairness, and cherish memories.",
        android:     "Download for Android",
        ios:         "Download for iOS"
      },
      about: {
        title: "About EachPart",
        text1: "EachPart is your app for showcasing shared achievements fairly, highlighting every team member’s contributions, preserving treasured memories—and keeping you motivated: who doesn’t know never-ending laundry piles, a mountain of dirty dishes, or a chaotic room?",
        text2: "Whether you’re organizing an event, collaborating on a project, or tackling athletic challenges, EachPart supports you in breaking down achievements and ensuring fairness."
      },
      features: {
        title: "Our Highlights",
        feature1: {
          title: "Recognition",
          text:  "Ensure that no effort goes unnoticed and everyone receives their deserved appreciation."
        },
        feature2: {
          title: "Fairness",
          text:  "Keep track of each person's contributions so that successes can be shared transparently and fairly."
        },
        feature3: {
          title: "Memories",
          text:  "Preserve milestones and beautiful experiences."
        },
        feature4: {
          title: "Motivation",
          text:  "Strengthen your team spirit through playful competition: set shared goals, track progress in real time, and cheer each other on to reach the next level."
        }
      },
      contact: {
        title:  "Contact",
        text:   "Have questions or want to provide feedback? We look forward to hearing from you.",
        button: "Email Support"
      },
      datenschutz: {
        title:            "Privacy Policy",
        intro:            "We take the protection of your personal data very seriously. This privacy policy informs you about the nature, scope, and purpose of data processing on our website.",
        responsible:      "The person responsible for data processing is:",
        dataCollection:   "When you visit our website, information such as your IP address, browser type, and access times are automatically collected.",
        cookies:          "Our website uses cookies to enhance your browsing experience.",
        rights:           "You have the right to request access, correction, or deletion of your data."
      },
      impressum: {
        title:                 "Imprint",
        company:               "EachPart GmbH",
        address:               "Musterstraße 1, 12345 Musterstadt",
        phone:                 "Phone: +49 123 456789",
        email:                 "Email: info@eachpart.com",
        representative:        "Represented by: Max Mustermann",
        contentResponsibility: "Responsible for content: Max Mustermann"
      },
      footer: {
        text: "&copy; 2025 EachPart. All rights reserved."
      }
    }
  };

  function setLanguage(lang) {
    document.documentElement.lang = lang;

    // Navigation
    document.getElementById("nav-home")   .textContent = translations[lang].nav.home;
    document.getElementById("nav-faq")    .textContent = translations[lang].nav.faq;
    document.getElementById("nav-contact").textContent = translations[lang].nav.contact;

    // Hero
    document.getElementById("hero-title")      .textContent = translations[lang].hero.title;
    document.getElementById("hero-description").textContent = translations[lang].hero.description;
    document.getElementById("hero-android")    .textContent = translations[lang].hero.android;
    document.getElementById("hero-ios")        .textContent = translations[lang].hero.ios;

    // About
    document.getElementById("about-title") .textContent = translations[lang].about.title;
    document.getElementById("about-text1") .textContent = translations[lang].about.text1;
    document.getElementById("about-text2") .textContent = translations[lang].about.text2;

    // Features
    document.getElementById("features-title")     .textContent = translations[lang].features.title;
    document.getElementById("feature1-title")     .textContent = translations[lang].features.feature1.title;
    document.getElementById("feature1-text")      .textContent = translations[lang].features.feature1.text;
    document.getElementById("feature2-title")     .textContent = translations[lang].features.feature2.title;
    document.getElementById("feature2-text")      .textContent = translations[lang].features.feature2.text;
    document.getElementById("feature3-title")     .textContent = translations[lang].features.feature3.title;
    document.getElementById("feature3-text")      .textContent = translations[lang].features.feature3.text;
    document.getElementById("feature4-title")     .textContent = translations[lang].features.feature4.title;
    document.getElementById("feature4-text")      .textContent = translations[lang].features.feature4.text;

    // Contact
    document.getElementById("contact-title") .textContent = translations[lang].contact.title;
    document.getElementById("contact-text")  .textContent = translations[lang].contact.text;
    document.getElementById("contact-button").textContent = translations[lang].contact.button;

    // Datenschutz
    document.getElementById("datenschutz-title")         .textContent = translations[lang].datenschutz.title;
    document.getElementById("datenschutz-intro")         .textContent = translations[lang].datenschutz.intro;
    document.getElementById("datenschutz-responsible")   .textContent = translations[lang].datenschutz.responsible;
    document.getElementById("datenschutz-dataCollection").textContent = translations[lang].datenschutz.dataCollection;
    document.getElementById("datenschutz-cookies")       .textContent = translations[lang].datenschutz.cookies;
    document.getElementById("datenschutz-rights")        .textContent = translations[lang].datenschutz.rights;

    // Impressum
    document.getElementById("impressum-title")               .textContent = translations[lang].impressum.title;
    document.getElementById("impressum-company")             .textContent = translations[lang].impressum.company;
    document.getElementById("impressum-address")             .textContent = translations[lang].impressum.address;
    document.getElementById("impressum-phone")               .textContent = translations[lang].impressum.phone;
    document.getElementById("impressum-email")               .textContent = translations[lang].impressum.email;
    document.getElementById("impressum-representative")      .textContent = translations[lang].impressum.representative;
    document.getElementById("impressum-contentResponsibility").textContent = translations[lang].impressum.contentResponsibility;

    // Footer
    document.getElementById("footer-text").innerHTML = translations[lang].footer.text;
  }

  document.addEventListener("DOMContentLoaded", function() {
    let userLang = (navigator.language || navigator.userLanguage).slice(0,2).toLowerCase();
    if (!translations[userLang]) userLang = "de";
    setLanguage(userLang);
  });
</script>
