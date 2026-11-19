/**
 * NASTAVENÍ WEBU
 *
 * 1) Firebase – zkopírujte z Firebase Console → Project settings → Your apps → Web app.
 *    Tyto hodnoty nejsou tajné. Dokud je apiKey prázdný, web běží v UKÁZKOVÉM režimu
 *    (přihlášení jen e-mailem bez ověření, data jen v prohlížeči).
 */
export const FIREBASE = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
};

/** 'draft' = u nabídek a soutěží se ukazují poznámky „k potvrzení“. Před spuštěním přepněte na 'live'. */
export const CONTENT_MODE: 'draft' | 'live' = 'draft';

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
export const DEMO_MODE = true;
