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
        title: "EachPart",
        description: "Finde Anerkennung, erreiche Fairness und bewahre Erinnerungen.",
        button: "Jetzt downloaden"
      },
      about: {
        title: "Über EachPart",
        text1: "EachPart ist eine App, die dir hilft, gemeinsam erreichte Ziele fair zu dokumentieren, das Engagement einzelner Teammitglieder sichtbar zu machen und Erinnerungen für die Zukunft zu bewahren.",
        text2: "Egal ob du ein Event organisierst, ein gemeinsames Projekt durchführst oder sportliche Herausforderungen bewältigst – EachPart unterstützt dich dabei, Leistungen aufzuschlüsseln und Gerechtigkeit herzustellen."
      },
      features: {
        title: "Unsere Highlights",
        feature1: {
          title: "Anerkennung",
          text: "Sorge dafür, dass kein Einsatz übersehen wird und jeder seine verdiente Wertschätzung erhält."
        },
        feature2: {
          title: "Fairness",
          text: "Behalte stets den Überblick, wer wie viel beigetragen hat, damit Erfolge transparent und gerecht aufgeteilt werden können."
        },
        feature3: {
          title: "Erinnerungen",
          text: "Bewahre gemeinsam erzielte Meilensteine und schöne Erlebnisse für die Zukunft."
        }
      },
      contact: {
        title: "Kontakt",
        text: "Du hast Fragen oder möchtest Feedback geben? Wir freuen uns darauf, von dir zu hören.",
        button: "E-Mail an Support"
      },
      datenschutz: {
        title: "Datenschutzerklärung",
        intro: "Wir nehmen den Schutz deiner persönlichen Daten sehr ernst. In dieser Datenschutzerklärung informieren wir dich über Art, Umfang und Zweck der Verarbeitung deiner Daten.",
        responsible: "Verantwortlich für die Datenverarbeitung ist:",
        dataCollection: "Beim Besuch unserer Website werden automatisch Informationen wie IP-Adresse, Browsertyp und Zugriffszeiten erfasst.",
        cookies: "Unsere Website verwendet Cookies, um das Nutzererlebnis zu verbessern.",
        rights: "Du hast das Recht auf Auskunft, Berichtigung und Löschung deiner Daten."
      },
      impressum: {
        title: "Impressum",
        company: "EachPart GmbH",
        address: "Musterstraße 1, 12345 Musterstadt",
        phone: "Telefon: +49 123 456789",
        email: "E-Mail: info@eachpart.com",
        representative: "Vertreten durch: Max Mustermann",
        contentResponsibility: "Verantwortlich für den Inhalt: Max Mustermann"
      },
      footer: {
        text: "&copy; 2025 EachPart. Alle Rechte vorbehalten."
      }
    },
    en: {
      nav: {
        home: "Home",
        faq: "FAQ",
        contact: "Contact"
      },
      hero: {
        title: "EachPart",
        description: "Find recognition, achieve fairness, and cherish memories.",
        button: "Download now"
      },
      about: {
        title: "About EachPart",
        text1: "EachPart is an app that helps you fairly document collectively achieved goals, make team members' contributions visible, and preserve memories for the future.",
        text2: "Whether you're organizing an event, running a joint project, or facing athletic challenges, EachPart supports you in breaking down achievements and ensuring fairness."
      },
      features: {
        title: "Our Highlights",
        feature1: {
          title: "Recognition",
          text: "Ensure that no effort goes unnoticed and everyone receives their deserved appreciation."
        },
        feature2: {
          title: "Fairness",
          text: "Keep track of each person's contributions so that successes can be shared transparently and fairly."
        },
        feature3: {
          title: "Memories",
          text: "Preserve milestones and beautiful experiences achieved together for the future."
        }
      },
      contact: {
        title: "Contact",
        text: "Have questions or want to provide feedback? We look forward to hearing from you.",
        button: "Email Support"
      },
      datenschutz: {
        title: "Privacy Policy",
        intro: "We take the protection of your personal data very seriously. In this privacy policy, we inform you about the nature, scope, and purpose of data processing on our website.",
        responsible: "The person responsible for data processing is:",
        dataCollection: "When you visit our website, information such as your IP address, browser type, and access times are automatically collected.",
        cookies: "Our website uses cookies to enhance your browsing experience.",
        rights: "You have the right to request access, correction, or deletion of your data."
      },
      impressum: {
        title: "Imprint",
        company: "EachPart GmbH",
        address: "Musterstraße 1, 12345 Musterstadt",
        phone: "Phone: +49 123 456789",
        email: "Email: info@eachpart.com",
        representative: "Represented by: Max Mustermann",
        contentResponsibility: "Responsible for content: Max Mustermann"
      },
      footer: {
        text: "&copy; 2025 EachPart. All rights reserved."
      }
    }
  };

  // Beispiel-Funktion, um den Inhalt anhand der erkannten Sprache zu setzen
  function setLanguage(lang) {
    // Aktualisiere auch das lang-Attribut des <html>-Elements
    document.documentElement.lang = lang;

    // Navigation
    if (document.getElementById("nav-home")) {
      document.getElementById("nav-home").textContent = translations[lang].nav.home;
    }
    if (document.getElementById("nav-faq")) {
      document.getElementById("nav-faq").textContent = translations[lang].nav.faq;
    }
    if (document.getElementById("nav-contact")) {
      document.getElementById("nav-contact").textContent = translations[lang].nav.contact;
    }

    // Hero / Header-Section
    if (document.getElementById("hero-title")) {
      document.getElementById("hero-title").textContent = translations[lang].hero.title;
    }
    if (document.getElementById("hero-description")) {
      document.getElementById("hero-description").textContent = translations[lang].hero.description;
    }
    if (document.getElementById("hero-button")) {
      document.getElementById("hero-button").textContent = translations[lang].hero.button;
    }

    // About / Über EachPart
    if (document.getElementById("about-title")) {
      document.getElementById("about-title").textContent = translations[lang].about.title;
    }
    if (document.getElementById("about-text1")) {
      document.getElementById("about-text1").textContent = translations[lang].about.text1;
    }
    if (document.getElementById("about-text2")) {
      document.getElementById("about-text2").textContent = translations[lang].about.text2;
    }

    // Features / Unsere Highlights
    if (document.getElementById("features-title")) {
      document.getElementById("features-title").textContent = translations[lang].features.title;
    }
    if (document.getElementById("feature1-title")) {
      document.getElementById("feature1-title").textContent = translations[lang].features.feature1.title;
    }
    if (document.getElementById("feature1-text")) {
      document.getElementById("feature1-text").textContent = translations[lang].features.feature1.text;
    }
    if (document.getElementById("feature2-title")) {
      document.getElementById("feature2-title").textContent = translations[lang].features.feature2.title;
    }
    if (document.getElementById("feature2-text")) {
      document.getElementById("feature2-text").textContent = translations[lang].features.feature2.text;
    }
    if (document.getElementById("feature3-title")) {
      document.getElementById("feature3-title").textContent = translations[lang].features.feature3.title;
    }
    if (document.getElementById("feature3-text")) {
      document.getElementById("feature3-text").textContent = translations[lang].features.feature3.text;
    }

    // Kontakt
    if (document.getElementById("contact-title")) {
      document.getElementById("contact-title").textContent = translations[lang].contact.title;
    }
    if (document.getElementById("contact-text")) {
      document.getElementById("contact-text").textContent = translations[lang].contact.text;
    }
    if (document.getElementById("contact-button")) {
      document.getElementById("contact-button").textContent = translations[lang].contact.button;
    }

    // Datenschutzerklärung
    if (document.getElementById("datenschutz-title")) {
      document.getElementById("datenschutz-title").textContent = translations[lang].datenschutz.title;
    }
    if (document.getElementById("datenschutz-intro")) {
      document.getElementById("datenschutz-intro").textContent = translations[lang].datenschutz.intro;
    }
    if (document.getElementById("datenschutz-responsible")) {
      document.getElementById("datenschutz-responsible").textContent = translations[lang].datenschutz.responsible;
    }
    if (document.getElementById("datenschutz-dataCollection")) {
      document.getElementById("datenschutz-dataCollection").textContent = translations[lang].datenschutz.dataCollection;
    }
    if (document.getElementById("datenschutz-cookies")) {
      document.getElementById("datenschutz-cookies").textContent = translations[lang].datenschutz.cookies;
    }
    if (document.getElementById("datenschutz-rights")) {
      document.getElementById("datenschutz-rights").textContent = translations[lang].datenschutz.rights;
    }

    // Impressum
    if (document.getElementById("impressum-title")) {
      document.getElementById("impressum-title").textContent = translations[lang].impressum.title;
    }
    if (document.getElementById("impressum-company")) {
      document.getElementById("impressum-company").textContent = translations[lang].impressum.company;
    }
    if (document.getElementById("impressum-address")) {
      document.getElementById("impressum-address").textContent = translations[lang].impressum.address;
    }
    if (document.getElementById("impressum-phone")) {
      document.getElementById("impressum-phone").textContent = translations[lang].impressum.phone;
    }
    if (document.getElementById("impressum-email")) {
      document.getElementById("impressum-email").textContent = translations[lang].impressum.email;
    }
    if (document.getElementById("impressum-representative")) {
      document.getElementById("impressum-representative").textContent = translations[lang].impressum.representative;
    }
    if (document.getElementById("impressum-contentResponsibility")) {
      document.getElementById("impressum-contentResponsibility").textContent = translations[lang].impressum.contentResponsibility;
    }

    // Footer
    if (document.getElementById("footer-text")) {
      document.getElementById("footer-text").innerHTML = translations[lang].footer.text;
    }
  }

  // Sobald der DOM geladen ist, ermitteln wir die Browsersprache und setzen die Sprache
  document.addEventListener("DOMContentLoaded", function() {
    // Ermittelt die Sprache des Nutzers (z. B. "de" oder "en")
    let userLang = (navigator.language || navigator.userLanguage).slice(0,2).toLowerCase();
    if (!translations[userLang]) {
      userLang = "de"; // Fallback auf Deutsch, wenn die erkannte Sprache nicht unterstützt wird
    }
    setLanguage(userLang);
  });
</script>
