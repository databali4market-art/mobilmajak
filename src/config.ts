/**
 * NASTAVENÍ WEBU
 *
 * 1) Firebase – zkopírujte z Firebase Console → Project settings → Your apps → Web app.
 *    Tyto hodnoty nejsou tajné. Dokud je apiKey prázdný, web běží v UKÁZKOVÉM režimu
 *    (přihlášení jen e-mailem bez ověření, data jen v prohlížeči).
 *    authDomain: po připojení vlastní domény na Firebase Hosting přepište na 'advent.mobilmajak.cz'
 *    (přihlášení přes Google pak spolehlivě funguje i v Safari / na iPhonu).
 */
export const FIREBASE = {
  apiKey: 'AIzaSyDQjGSOrxLNatm-xj059HOyp86qf5lTrko',
  authDomain: 'mobil-majak.firebaseapp.com',
  projectId: 'mobil-majak',
  storageBucket: 'mobil-majak.firebasestorage.app',
  messagingSenderId: '1098150973300',
  appId: '1:1098150973300:web:55d8c57bd86893f62ba621',
};

/** 'draft' = u nabídek a soutěží se ukazují poznámky „k potvrzení“. Před spuštěním přepněte na 'live'. */
export const CONTENT_MODE: 'draft' | 'live' = 'live';

/**
 * Klíč pro náhled všech okének před 1. prosincem: otevřete web s ?nahled=KLÍČ
 * (vypnutí: ?nahled=off). Kalendář je statický, takže nejde o zabezpečení – jen o pohodlné testování.
 */
export const PREVIEW_KEY = 'majakadvent';

export const firebaseEnabled = () => !!FIREBASE.apiKey && !!FIREBASE.projectId;

/**
 * UKÁZKOVÁ VERZE PRO PREZENTACI
 * true = vše je odemčené a dá se proklikat bez přihlášení (postup se ukládá jen v prohlížeči).
 * Před ostrým spuštěním kampaně přepněte na false.
 */
export const DEMO_MODE = false;

/**
 * Kdo smí na stránce /?admin stahovat e-maily a soutěžní odpovědi (Google účty, malými písmeny).
 * Stejný seznam MUSÍ být i ve firestore.rules (funkce isAdmin), jinak databáze data nevydá.
 */
export const ADMIN_EMAILS: string[] = [
  'databali4market@gmail.com',
];

/**
 * Znění souhlasu s newsletterem. Ukládá se ke každému kontaktu spolu s datem souhlasu (kvůli GDPR).
 * Když text změníte, zvyšte verzi – u kontaktu pak uvidíte, s jakým zněním souhlasil.
 */
export const NEWSLETTER_CONSENT = {
  version: 'v1-2026-11',
  text: 'Chci dostávat e-mailem novinky a nabídky Mobil Maják. Souhlas mohu kdykoli odvolat.',
};
