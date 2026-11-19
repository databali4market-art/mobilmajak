# Adventní kalendář 2026 – Mobil Maják

Statický web (Vite + React + TypeScript): 24 okének, která se odemykají každý den o půlnoci (Europe/Prague). Přihlášení přes Google nebo odkaz do e-mailu (Firebase Authentication), data (otevřená okénka, soutěžní odpovědi, souhlas s novinkami) ve Firestore. Design podle mobilmajak.cz. Obsah vychází z tabulky „Mobil Maják – adventní kalendář 2026“.

## Co kde je

| Soubor | Co obsahuje |
| --- | --- |
| `src/content.ts` | obsah všech 24 okének; `confirm` = co je ještě potřeba potvrdit (zobrazí se jen v režimu `draft`) |
| `src/config.ts` | Firebase, `DEMO_MODE`, `CONTENT_MODE`, klíč náhledu `PREVIEW_KEY` |
| `src/components/Games.tsx` | kvízy (2, 6), řazení telefonů (16) a typový kvíz (20) |
| `src/styles.css` | design (barvy: navy `#1b2a5a`, růžová `#ea1d63`, azurová `#2bb3e6`) |
| `firestore.rules` | pravidla Firestore (soutěže ve dnech 5, 13, 19) |

## Vývoj

```bash
npm install
npm run dev      # http://localhost:5173/
npm run build    # výstup v dist/
```

## Nasazení na Cloudflare Pages (subdoména advent.mobilmajak.cz)

1. Cloudflare → Workers & Pages → Create → Pages → Connect to Git → repo `mobilmajak`.
2. Build command `npm run build`, output directory `dist`, proměnná `NODE_VERSION=22`.
3. Custom domains → `advent.mobilmajak.cz` (pokud je DNS jinde: CNAME `advent` → `<projekt>.pages.dev`).
4. `BASE_PATH` nechte nenastavený (kořen `/`).

## Firebase (sběr e-mailů a přihlášení)

1. Založte projekt, přidejte Web app a hodnoty vložte do `src/config.ts` (`FIREBASE`).
2. Authentication → zapnout Google a Email link; Authorized domains: `advent.mobilmajak.cz`.
3. Firestore → vytvořit databázi, do Rules vložit `firestore.rules`.
4. Newsletter: v `users/{uid}` je pole `newsletter` (souhlas); filtr `newsletter == true`.

Dokud je `apiKey` prázdný, web běží v ukázkovém režimu (data jen v prohlížeči).

## Před spuštěním (1. 12.)

- [ ] `DEMO_MODE = false`, `CONTENT_MODE = 'live'` v `src/config.ts`.
- [ ] Vyřešit všechny poznámky `confirm` v `src/content.ts` (ceny, kapacita, dárky, otevírací doba, výkup).
- [ ] Soutěž 19: doplnit, kam se posílá fotka (`sendTo`); případně přidat nahrávání fotek (Firebase Storage).
- [ ] Soutěž 5: pravidla soutěže; losování 24. 12.
- [ ] Doplnit logo (soubor) a odkaz na zásady ochrany osobních údajů ve footeru (`src/App.tsx`, sekce `#soukromi`).
- [ ] Zkontrolovat odkazy na mobilmajak.cz (`/servis/`, `/kamenne-prodejny/`, `/vykup/`, `/o-nas/` jsou odhad adres).
- [ ] Kupóny `MAJAK-xx` jsou jen identifikátory pro obsluhu; kapacitu („prvních 30 lidí“) web nehlídá.

> Web je statický, takže obsah budoucích okének je technicky součástí stránky. Správný počet oprav pro soutěž 13 záměrně v kódu není.

## Náhled před 1. prosincem

`?nahled=majakadvent` odemkne všechna okénka (vypnutí `?nahled=off`).
