
const translations = {
  
  en: {
    brand: "Nandi Travels Varanasi",
    tagline: "Trusted Taxi, Tours & Pilgrimage Packages",
    heroTitle: "Explore Kashi — Comfort, Care & Local Knowledge",
    heroDesc: "Airport pick-up, guided city tours, Ganga Aarti experiences and outstation travel. Clean cars, verified drivers and transparent fares.",
    bookNow: "Book Now",
    viewPackages: "View Packages",
    packages: "Packages",
    fleet: "Fleet",
    gallery: "Gallery",
    testimonials: "Testimonials",
    faq: "FAQ",
    contact: "Contact",
    kashiTitle: "Kashi Vishwanath Darshan",
    kashiDesc: "Guided darshan with local insights and hassle-free arrangements.",
    sarnathTitle: "Sarnath Heritage Tour",
    sarnathDesc: "Peaceful Buddhist sites, museum visit and spiritual walk.",
    prayagrajTitle: "Prayagraj Triveni Sangam",
    prayagrajDesc: "Day trip to Sangam with temple visits and comfortable transport.",
    airportTitle: "Varanasi Airport Transfer",
    airportDesc: "Punctual airport pickups & hotel transfers across Varanasi.",
    contactTitle: "Get in touch",
    phone: "+91 7268838241",
    email: "viveksinghsunny03@gmail.com",
    whatsappText: "Namaste! I want to book a ride with Nandi Travels:",
    defaultLang: "en"
  },

}

export function t(lang, key) {
  return (translations[lang] && translations[lang][key]) || translations['en'][key] || key;
}
