// translate.js
// Robust i18n for a static multi-page site (index / datenschutz / impressum)
// - Language selection priority: ?lang=xx -> localStorage -> browser -> fallback "de"
// - Safe DOM updates: only set text if element exists (prevents null errors across pages)

const translations = {
  de: {
    nav: {
      home: "Home",
      faq: "FAQ",
      contact: "Kontakt",
      how: "So funktioniert’s",
      features: "Highlights",
      world: "Spielwelt"
    },
    hero: {
      title: "EachPart",
      badge: "Nicht perfekt. Nur echt.",
      headline: "Mach aus heute etwas, das bleibt.",
      tagline: "Momente festhalten. Ziele schaffen. Gemeinsam dranbleiben.",
      bullets: [
        "Einfach festhalten, was wirklich zählt – ohne Perfektionsdruck.",
        "Mini-Ziele, die machbar sind – und sich gut anfühlen, wenn sie geschafft sind.",
        "Gemeinsam leichter: Reaktionen, Support und kleine Feiern."
      ],
      note: "Hinweis: Wir entwickeln aktiv weiter – transparent und Schritt für Schritt.",
      android: "Android herunterladen",
      ios: "iOS (TestFlight)",
      howto: "Video-Anleitung",
      more: "Mehr erfahren",
      videoCaption: "Tipp: Ein Klick auf „Mit Sound starten“ aktiviert den Ton.",
      soundBtn: "🔊 Mit Sound starten"
    },
    about: {
      title: "Warum EachPart?",
      text1: "Im Alltag gehen die guten Dinge oft leise unter: kleine Momente, kleine Fortschritte, kleine Siege.",
      text2: "EachPart gibt ihnen einen Platz – damit du dich erinnerst, was war, und ihr gemeinsam dranbleibt.",
      cardTitle: "Kurz erklärt",
      cardText:
        "Mini-Tagebuch + Motivation mit Freunden – belohnt durch eine Spielwelt, die euren Fortschritt sichtbar macht."
    },
    how: {
      title: "So funktioniert’s",
      step1Title: "Moment festhalten",
      step1Text: "Öffnen, aufnehmen, speichern. Ein Satz reicht.",
      step1Mini: "1 Moment → 1 Satz → gespeichert",
      step2Title: "Mini-Ziele setzen",
      step2Text: "Kleine Ziele, die du wirklich schaffst – mit Reactions und Support.",
      step2Mini: "Ziele → Support → Erfolg",
      step3Title: "Spielwelt als Belohnung",
      step3Text: "Fortschritt wird sichtbar – als gemeinsames Wachstum in eurer Welt.",
      step3Mini: "Dein Leben. Eure Welt."
    },
    features: {
      title: "Highlights",
      feature1: { title: "Spontane Momente", text: "Schnell festhalten statt später bereuen – ohne Perfektionismus." },
      feature2: { title: "Mini-Tagebuch", text: "Ein Satz reicht – damit du später wieder da bist, wo es passiert ist." },
      feature3: { title: "Ziele & Motivation", text: "Machbare Mini-Ziele. Support statt Druck." },
      feature4: { title: "Gemeinsam leichter", text: "Reactions, Kommentare, Feiern – zusammen dranbleiben macht den Unterschied." },
      feature5: { title: "Spielwelt-Fortschritt", text: "Dein Fortschritt wird sichtbar – und fühlt sich wie Belohnung an." },
      feature6: { title: "Aktive Entwicklung", text: "Performance, Stabilität und neue Inhalte kommen Schritt für Schritt." }
    },
    world: {
      title: "Die Spielwelt zeigt euren Fortschritt",
      text1: "Nicht als Zwang – sondern als sichtbare Belohnung. Ihr baut, erkundet und wachst gemeinsam.",
      li1: "Gemeinsam bauen & erkunden",
      li2: "Fortschritt wird sichtbar",
      li3: "Neue Inhalte über Updates"
    },
    faq: {
      title: "FAQ",
      q1: "Ist EachPart privat?",
      a1: "Ja. Du kannst private Gruppen nutzen (Freunde/Familie). Öffentliche Bereiche sind optional.",
      q2: "Muss ich täglich aktiv sein?",
      a2: "Nein. EachPart soll unterstützen – auch wenn du nur ab und zu Momente speicherst oder Ziele markierst.",
      q3: "Brauche ich viele Freunde?",
      a3: "Schon 1–2 Personen reichen, um Support und Motivation zu spüren.",
      q4: "Was bringt die Spielwelt?",
      a4: "Weil Fortschritt nicht nur „abgehakt“ ist, sondern sichtbar wird – als gemeinsames Erlebnis."
    },
    contact: {
      title: "Kontakt",
      text: "Du hast Fragen oder möchtest Feedback geben? Schreib uns gern.",
      button: "E-Mail an Support",
      note: "Tipp: Wenn du Feedback zur Spielwelt oder Motivation-Features hast, schick gern Screenshots mit."
    },
    datenschutz: {
      title: "Datenschutzerklärung",
      intro:
        "Wir nehmen den Schutz deiner persönlichen Daten sehr ernst. In dieser Datenschutzerklärung informieren wir dich über Art, Umfang und Zweck der Verarbeitung deiner Daten.",
      responsible: "Verantwortlich für die Datenverarbeitung ist:",
      dataCollection:
        "Beim Besuch unserer Website werden automatisch Informationen wie IP-Adresse, Browsertyp und Zugriffszeiten erfasst.",
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
      text: "&copy; 2026 EachPart. Alle Rechte vorbehalten."
    }
  },

  en: {
    nav: {
      home: "Home",
      faq: "FAQ",
      contact: "Contact",
      how: "How it works",
      features: "Highlights",
      world: "World"
    },
    hero: {
      title: "EachPart",
      badge: "Not perfect. Just real.",
      headline: "Turn today into something that lasts.",
      tagline: "Capture moments. Achieve small goals. Keep going together.",
      bullets: [
        "Capture what matters – without perfection pressure.",
        "Small goals that are doable – and feel great when completed.",
        "Easier together: reactions, support, and small celebrations."
      ],
      note: "Note: We’re actively building – transparently, step by step.",
      android: "Download for Android",
      ios: "iOS (TestFlight)",
      howto: "Video guide",
      more: "Learn more",
      videoCaption: "Tip: Click “Start with sound” to enable audio.",
      soundBtn: "🔊 Start with sound"
    },
    about: {
      title: "Why EachPart?",
      text1: "In everyday life, the good things often fade quietly: small moments, small progress, small wins.",
      text2: "EachPart gives them a place – so you remember what happened, and keep going together.",
      cardTitle: "In short",
      cardText:
        "A mini diary + motivation with friends — rewarded by a game world that makes your progress visible."
    },
    how: {
      title: "How it works",
      step1Title: "Capture a moment",
      step1Text: "Open, snap, save. One sentence is enough.",
      step1Mini: "1 moment → 1 sentence → saved",
      step2Title: "Set mini goals",
      step2Text: "Doable mini goals — with reactions and support.",
      step2Mini: "Goals → support → success",
      step3Title: "A world as reward",
      step3Text: "Progress becomes visible — as shared growth in your world.",
      step3Mini: "Your life. Your world."
    },
    features: {
      title: "Highlights",
      feature1: { title: "Spontaneous moments", text: "Capture now instead of regretting later — no perfectionism." },
      feature2: { title: "Mini diary", text: "One sentence is enough — so you can return to that moment later." },
      feature3: { title: "Goals & motivation", text: "Doable mini goals. Support, not pressure." },
      feature4: { title: "Easier together", text: "Reactions, comments, celebrations — together makes the difference." },
      feature5: { title: "World progress", text: "Your progress becomes visible — and feels like a reward." },
      feature6: { title: "Active development", text: "Performance, stability, and content arrive step by step." }
    },
    world: {
      title: "The world shows your progress",
      text1: "Not as pressure — but as a visible reward. Build, explore, and grow together.",
      li1: "Build & explore together",
      li2: "Progress becomes visible",
      li3: "New content through updates"
    },
    faq: {
      title: "FAQ",
      q1: "Is EachPart private?",
      a1: "Yes. You can use private groups (friends/family). Public areas are optional.",
      q2: "Do I have to be active every day?",
      a2: "No. EachPart is meant to support you — even if you only capture moments or check off goals sometimes.",
      q3: "Do I need many friends?",
      a3: "Even 1–2 people can be enough to feel support and motivation.",
      q4: "What’s the point of the world?",
      a4: "Because progress isn’t just “checked off” — it becomes visible as a shared experience."
    },
    contact: {
      title: "Contact",
      text: "Have questions or want to share feedback? We’d love to hear from you.",
      button: "Email Support",
      note: "Tip: If you share feedback on the world or motivation features, screenshots help a lot."
    },
    datenschutz: {
      title: "Privacy Policy",
      intro:
        "We take the protection of your personal data very seriously. This policy informs you about the nature, scope, and purpose of data processing on our website.",
      responsible: "The person responsible for data processing is:",
      dataCollection:
        "When you visit our website, information such as your IP address, browser type, and access times may be collected automatically.",
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
      text: "&copy; 2026 EachPart. All rights reserved."
    }
  }
};

// ---------------------
// Helpers
// ---------------------
function setText(id, value) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = value;
}

function setHTML(id, value) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = value;
}

function getQueryLang() {
  const p = new URLSearchParams(window.location.search);
  const q = (p.get("lang") || "").toLowerCase();
  return translations[q] ? q : null;
}

function normalizeLang(lang) {
  if (!lang) return "de";
  const l = String(lang).slice(0, 2).toLowerCase();
  return translations[l] ? l : "de";
}

// ---------------------
// Public API (optional)
// ---------------------
function switchLanguage(lang) {
  const next = normalizeLang(lang);
  localStorage.setItem("eachpart_lang", next);
  setLanguage(next);
}

// Expose to window so you can call it from HTML later if you add a toggle
window.switchLanguage = switchLanguage;

// ---------------------
// Apply language
// ---------------------
function setLanguage(lang) {
  const t = translations[lang] || translations.de;
  document.documentElement.lang = lang;

  // NAV (only if IDs exist)
  setText("nav-home", t.nav.home);
  setText("nav-faq", t.nav.faq);
  setText("nav-contact", t.nav.contact);
  setText("nav-how", t.nav.how);
  setText("nav-features", t.nav.features);
  setText("nav-world", t.nav.world);

  // HERO (IDs from older + newer versions)
  setText("hero-title", t.hero.title);
  setText("hero-badge", t.hero.badge);
  setText("hero-description", t.hero.tagline); // fallback mapping if you still use hero-description
  setText("hero-tagline", t.hero.tagline);
  setText("hero-note", t.hero.note);

  setText("hero-android", t.hero.android);
  setText("hero-ios", t.hero.ios);
  setText("hero-howto", t.hero.howto);
  setText("hero-more", t.hero.more);

  setText("hero-video-caption", t.hero.videoCaption);
  setText("soundOverlay", t.hero.soundBtn);

  // If you use the new text IDs:
  setText("hero-headline", t.hero.headline);

  // Bullets if you added IDs
  setText("hero-b1", t.hero.bullets[0]);
  setText("hero-b2", t.hero.bullets[1]);
  setText("hero-b3", t.hero.bullets[2]);

  // ABOUT
  setText("about-title", t.about.title);
  setText("about-text1", t.about.text1);
  setText("about-text2", t.about.text2);
  setText("about-card-title", t.about.cardTitle);
  setText("about-card-text", t.about.cardText);

  // HOW
  setText("how-title", t.how.title);
  setText("how-1-title", t.how.step1Title);
  setText("how-1-text", t.how.step1Text);
  setText("how-1-mini", t.how.step1Mini);
  setText("how-2-title", t.how.step2Title);
  setText("how-2-text", t.how.step2Text);
  setText("how-2-mini", t.how.step2Mini);
  setText("how-3-title", t.how.step3Title);
  setText("how-3-text", t.how.step3Text);
  setText("how-3-mini", t.how.step3Mini);

  // FEATURES
  setText("features-title", t.features.title);
  setText("feature1-title", t.features.feature1.title);
  setText("feature1-text", t.features.feature1.text);
  setText("feature2-title", t.features.feature2.title);
  setText("feature2-text", t.features.feature2.text);
  setText("feature3-title", t.features.feature3.title);
  setText("feature3-text", t.features.feature3.text);
  setText("feature4-title", t.features.feature4.title);
  setText("feature4-text", t.features.feature4.text);

  // Optional extra features (if you add IDs later)
  setText("feature5-title", t.features.feature5?.title || "");
  setText("feature5-text", t.features.feature5?.text || "");
  setText("feature6-title", t.features.feature6?.title || "");
  setText("feature6-text", t.features.feature6?.text || "");

  // WORLD
  setText("world-title", t.world.title);
  setText("world-text1", t.world.text1);
  setText("world-li1", t.world.li1);
  setText("world-li2", t.world.li2);
  setText("world-li3", t.world.li3);

  // FAQ
  setText("faq-title", t.faq.title);
  setText("faq-q1", t.faq.q1);
  setText("faq-a1", t.faq.a1);
  setText("faq-q2", t.faq.q2);
  setText("faq-a2", t.faq.a2);
  setText("faq-q3", t.faq.q3);
  setText("faq-a3", t.faq.a3);
  setText("faq-q4", t.faq.q4);
  setText("faq-a4", t.faq.a4);

  // CONTACT
  setText("contact-title", t.contact.title);
  setText("contact-text", t.contact.text);
  setText("contact-button", t.contact.button);
  setText("contact-note", t.contact.note);

  // DATENSCHUTZ (only if on that page)
  setText("datenschutz-title", t.datenschutz.title);
  setText("datenschutz-intro", t.datenschutz.intro);
  setText("datenschutz-responsible", t.datenschutz.responsible);
  setText("datenschutz-dataCollection", t.datenschutz.dataCollection);
  setText("datenschutz-cookies", t.datenschutz.cookies);
  setText("datenschutz-rights", t.datenschutz.rights);

  // IMPRESSUM (only if on that page)
  setText("impressum-title", t.impressum.title);
  setText("impressum-company", t.impressum.company);
  setText("impressum-address", t.impressum.address);
  setText("impressum-phone", t.impressum.phone);
  setText("impressum-email", t.impressum.email);
  setText("impressum-representative", t.impressum.representative);
  setText("impressum-contentResponsibility", t.impressum.contentResponsibility);

  // FOOTER (HTML because of &copy;)
  setHTML("footer-text", t.footer.text);
}

// ---------------------
// Init
// ---------------------
document.addEventListener("DOMContentLoaded", () => {
  const qLang = getQueryLang();
  const stored = localStorage.getItem("eachpart_lang");

  const browser = (navigator.language || navigator.userLanguage || "de").slice(0, 2).toLowerCase();

  const chosen = normalizeLang(qLang || (translations[stored] ? stored : null) || browser || "de");
  setLanguage(chosen);
});
