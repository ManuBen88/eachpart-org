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

  function setText(id, value, isHtml = false) {
  const el = document.getElementById(id);
  if (!el) return; // <- wichtig: Seite hat evtl. dieses Element nicht
  if (isHtml) el.innerHTML = value;
  else el.textContent = value;
}

function setLanguage(lang) {
  document.documentElement.lang = lang;

  // Navigation
  setText("nav-home", translations[lang].nav.home);
  setText("nav-faq", translations[lang].nav.faq);
  setText("nav-contact", translations[lang].nav.contact);

  // Hero
  setText("hero-title", translations[lang].hero.title);
  setText("hero-description", translations[lang].hero.description);
  setText("hero-android", translations[lang].hero.android);
  setText("hero-ios", translations[lang].hero.ios);

  // About
  setText("about-title", translations[lang].about.title);
  setText("about-text1", translations[lang].about.text1);
  setText("about-text2", translations[lang].about.text2);

  // Features
  setText("features-title", translations[lang].features.title);
  setText("feature1-title", translations[lang].features.feature1.title);
  setText("feature1-text", translations[lang].features.feature1.text);
  setText("feature2-title", translations[lang].features.feature2.title);
  setText("feature2-text", translations[lang].features.feature2.text);
  setText("feature3-title", translations[lang].features.feature3.title);
  setText("feature3-text", translations[lang].features.feature3.text);
  setText("feature4-title", translations[lang].features.feature4.title);
  setText("feature4-text", translations[lang].features.feature4.text);

  // Contact
  setText("contact-title", translations[lang].contact.title);
  setText("contact-text", translations[lang].contact.text);
  setText("contact-button", translations[lang].contact.button);

  // Datenschutz (nur wenn Seite diese IDs hat)
  setText("datenschutz-title", translations[lang].datenschutz.title);
  setText("datenschutz-intro", translations[lang].datenschutz.intro);
  setText("datenschutz-responsible", translations[lang].datenschutz.responsible);
  setText("datenschutz-dataCollection", translations[lang].datenschutz.dataCollection);
  setText("datenschutz-cookies", translations[lang].datenschutz.cookies);
  setText("datenschutz-rights", translations[lang].datenschutz.rights);

  // Impressum (nur wenn Seite diese IDs hat)
  setText("impressum-title", translations[lang].impressum.title);
  setText("impressum-company", translations[lang].impressum.company);
  setText("impressum-address", translations[lang].impressum.address);
  setText("impressum-phone", translations[lang].impressum.phone);
  setText("impressum-email", translations[lang].impressum.email);
  setText("impressum-representative", translations[lang].impressum.representative);
  setText("impressum-contentResponsibility", translations[lang].impressum.contentResponsibility);

  // Footer (HTML, wegen &copy;)
  setText("footer-text", translations[lang].footer.text, true);
}


  document.addEventListener("DOMContentLoaded", function() {
    let userLang = (navigator.language || navigator.userLanguage).slice(0,2).toLowerCase();
    if (!translations[userLang]) userLang = "de";
    setLanguage(userLang);
  });
</script>
