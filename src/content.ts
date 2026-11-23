import type { Door } from './types';

/**
 * OBSAH KALENDÁŘE – všech 24 okének (podle tabulky „Mobil Maják – adventní kalendář 2026“).
 * Okénko se odemyká o půlnoci českého času (Europe/Prague).
 *
 * `confirm` = co je ještě potřeba potvrdit; zobrazí se jen při CONTENT_MODE = 'draft'.
 * Před spuštěním: vyřešit všechna `confirm`, doplnit kontakt u soutěže 19 a v src/config.ts přepnout na 'live'.
 */
export const YEAR = 2026;

export const BASE = import.meta.env.BASE_URL;
export const SHOP = 'https://www.mobilmajak.cz/';
/** Provozovatel kalendáře a pořadatel soutěží */
export const OPERATOR = {
  name: 'Codaruina s.r.o.',
  address: 'Litovelská 118/12, 779 00 Olomouc',
  ico: '04147537',
  dic: 'CZ04147537',
  email: 'obchod@mobilmajak.cz',
  phone: '+420 601 009 001',
};
export const RULES_URL = '?pravidla';
export const PRIVACY_URL = 'https://www.mobilmajak.cz/Stranky/Ochrana-osobnich-udaju';
export const PHONE = '601 009 001';

export const CONTEST_DAYS = [5, 13, 19];

export const doors: Door[] = [
  {
    day: 1, type: 'offer', title: 'Čištění telefonu zdarma',
    text: 'Základní čištění telefonu zdarma (hodnota 300 Kč). Adventní start, který vás zavede rovnou na pobočku.',
    coupon: { code: 'MAJAK-01', value: 'Základní čištění zdarma', valid: 'Pro prvních 30 lidí na každé pobočce' },
    urlLabel: 'Kamenné prodejny', url: SHOP + 'kamenne-prodejny/',
    confirm: 'Souhlas a kapacita poboček (30 lidí / pobočka).',
  },
  {
    day: 2, type: 'game', title: 'Poznej telefon podle fotoaparátu',
    text: 'Čtyři otázky o tom, jak vypadají záda telefonů. Za všechny správné odpovědi dostanete čisticí hadřík zdarma.',
    game: {
      kind: 'quiz',
      reward: 'Čisticí hadřík zdarma k nákupu na pobočce. Platí do 31. 12.',
      questions: [
        { q: 'Tři objektivy seskládané do čtverce na čtvercovém ostrůvku. Čí jsou záda?', options: ['iPhone Pro', 'Google Pixel', 'Samsung Galaxy S'], answer: 0, explain: 'Čtvercový ostrůvek se třemi objektivy je typický pro iPhony řady Pro.' },
        { q: 'Přes celá záda vede vodorovný pás s kamerami. Jaký telefon to je?', options: ['Nothing Phone', 'Google Pixel', 'iPhone 16e'], answer: 1, explain: 'Výrazný „camera bar“ přes celá záda mají telefony Google Pixel.' },
        { q: 'Každý objektiv vyčnívá samostatně, bez společného ostrůvku. Který výrobce to dělá?', options: ['Samsung (Galaxy S)', 'Nokia 3310', 'Aligator Senior'], answer: 0, explain: 'Samostatné objektivy mají například Galaxy S23 a S24.' },
        { q: 'Průhledná záda a světelné diody místo ozdob. Čí je to nápad?', options: ['Apple', 'Nothing', 'Xiaomi'], answer: 1, explain: 'Průhledný design a diody Glyph jsou poznávacím znamením Nothing Phone.' },
      ],
    },
    confirm: 'Souhlas s dárkem (čisticí hadřík). Otázky jsou textové; pokud chcete fotografie detailů foťáků, pošlete obrázky.',
  },
  {
    day: 3, type: 'tip', title: '4 znaky, že ti umírá baterie',
    text: 'Telefon vydrží málo a vy nevíte proč? Tohle jsou čtyři signály, že baterie dosluhuje.',
    list: [
      'Stav baterie je nízký: iPhone ukáže „Stav baterie“ v Nastavení → Baterie, u Samsungu ho najdete v aplikaci Samsung Members v diagnostice.',
      'Telefon se sám vypíná, často kolem 20 % nabití.',
      'Bez nabíječky se už nechce zapnout.',
      'Nabíjí se podezřele rychle, třeba za minutu skočí o 25 % hlavně od nuly.',
    ],
    more: 'Poznáte alespoň dva z nich? Baterii vyměníme na pobočce a diagnostiku stavu uděláme klidně hned.',
    url: SHOP + 'servis/', urlLabel: 'Výměna baterie',
  },
  {
    day: 4, type: 'offer', title: 'Výměna baterie a diagnostika zdarma',
    text: 'K výměně baterie dostanete diagnostiku celého telefonu zdarma. Navazuje na včerejší tip, platí 48 hodin.',
    coupon: { code: 'MAJAK-04', value: 'Diagnostika celého telefonu zdarma k výměně baterie', valid: 'Platí 48 hodin (4.–5. 12.)' },
    url: SHOP + 'servis/', urlLabel: 'Servis telefonů',
    confirm: 'Cena výměny baterie závisí na modelu (odhad 1 000–2 000 Kč), v textu zatím není uvedena.',
  },
  {
    day: 5, type: 'contest', title: 'Soutěž o bezdrátová sluchátka',
    text: 'Zapojte se jedním klikem a získejte šanci na bezdrátová sluchátka Marshall Major V. Losování proběhne 24. 12.',
    contest: {
      kind: 'email',
      prize: 'Bezdrátová sluchátka Marshall Major V (černá)',
      rules: 'Zapojit se lze do 23. 12. Výherce vylosujeme 24. 12. a oznámíme mu to e-mailem.',
    },
    url: SHOP + 'Nahlavni-bezdratova-sluchatka-Marshall-Major-V-cerna', urlLabel: 'Sluchátka v e-shopu',
    confirm: 'Doplnit pravidla soutěže (zveřejnění, ověření výherce).',
  },
  {
    day: 6, type: 'game', title: 'Kvíz: Jak moc znáš svůj mobil?',
    text: 'Pět rychlých otázek. Žádná odměna, jen dobrý pocit, že víte, co máte v kapse.',
    game: {
      kind: 'quiz',
      questions: [
        { q: 'Co znamená zkratka NFC, díky které platíte telefonem?', options: ['Near Field Communication', 'New Fast Charging', 'Network Frequency Control'], answer: 0 },
        { q: 'V kterém roce byl představen první iPhone?', options: ['2005', '2007', '2010'], answer: 1 },
        { q: 'Co znamená označení odolnosti IP68?', options: ['Odolnost proti pádu z 6 metrů', 'Prach a ponoření do vody', 'Skenování otisku do 8 sekund'], answer: 1 },
        { q: 'Jaký konektor mají dnes nabíječky nových iPhonů i většiny telefonů s Androidem?', options: ['Micro USB', 'Lightning', 'USB-C'], answer: 2 },
        { q: 'Co baterii telefonu škodí nejvíc?', options: ['Horko', 'Noční nabíjení', 'Tmavý režim'], answer: 0, explain: 'Dlouhodobé horko (třeba na slunci v autě) baterii opotřebuje nejrychleji.' },
      ],
    },
  },
  {
    day: 7, type: 'offer', title: 'Ke sklu nalepení a čištění zdarma',
    text: 'Ke tvrzenému sklu dostanete nalepení a čištění telefonu zdarma. Platíte jen sklo.',
    coupon: { code: 'MAJAK-07', value: 'Nalepení a čištění zdarma ke tvrzenému sklu', valid: 'Platí do 31. 12.' },
    more: 'Sklo stojí 399 nebo 599 Kč podle kvality.',
    url: SHOP + 'kamenne-prodejny/', urlLabel: 'Kamenné prodejny',
  },
  {
    day: 8, type: 'tip', title: 'Jaký telefon koupit babičce, puberťákovi nebo tátovi',
    text: 'Tři lidé, tři různé potřeby. Tady jsou naše tipy z e-shopu.',
    links: [
      { label: 'Babičce: Aligator Senior A830', url: SHOP + 'Aligator-Senior-A830-cerveny', note: 'Jednoduché ovládání, velká tlačítka' },
      { label: 'Puberťákovi: Samsung Galaxy A17', url: SHOP + 'Samsung-Galaxy-A17-4GB-128GB-Black', note: 'Rozumná cena, 128 GB paměti' },
      { label: 'Tátovi: iPhone 16e, použitý (A)', url: SHOP + 'Apple-iPhone-16e-128GB-cerny-pouzity-A-151983', note: 'Spolehlivý Apple za výhodnější cenu' },
    ],
    confirm: 'Přiřazení modelů ke třem osobám je návrh; ověřte, že sedí.',
  },
  {
    day: 9, type: 'offer', title: 'Čištění + hydrogel fólie za cenu čištění',
    text: 'Desinfekční čištění a hydrogel fólie dohromady za cenu čištění, tedy 600 Kč.',
    coupon: { code: 'MAJAK-09', value: 'Desinfekční čištění + hydrogel fólie za 600 Kč', valid: 'Platí do 31. 12.' },
    url: SHOP + 'kamenne-prodejny/', urlLabel: 'Kamenné prodejny',
    confirm: 'Souhlas s balíčkem.',
  },
  {
    day: 10, type: 'tip', title: 'Telefon pro dítě pod stromeček: 5 nastavení, než ho zabalíš',
    text: 'Než telefon zabalíte, projděte těchto pět věcí. Na pobočce vám je nastavíme za vás.',
    list: ['Rodičovská kontrola', 'Limity aplikací', 'Zákaz nákupů bez vašeho souhlasu', 'Sdílení polohy', 'Bezpečné heslo'],
    url: SHOP + 'kamenne-prodejny/', urlLabel: 'Kde nám telefon přinést',
  },
  {
    day: 11, type: 'offer', title: '2 hydrogel fólie za cenu 1',
    text: 'Jednu fólii pro sebe a druhou jako dárek. Platíte jen jednu.',
    coupon: { code: 'MAJAK-11', value: '2 hydrogel fólie za cenu jedné', valid: 'Platí do 31. 12.' },
    more: 'Fólie stojí 699 Kč včetně nalepení, nebo 499 Kč bez nalepení.',
    url: SHOP + 'kamenne-prodejny/', urlLabel: 'Kamenné prodejny',
  },
  {
    day: 12, type: 'tip', title: 'Než daruješ nový telefon: záloha a přenos dat',
    text: 'Nový telefon pod stromečkem je radost. Ztracené fotky a kontakty už méně. Záloha a přenos dat na pobočce vám to ušetří.',
    more: 'Na pobočce data zazálohujeme a přeneseme za vás. Přenos dat stojí 499 Kč.',
    url: SHOP + 'kamenne-prodejny/', urlLabel: 'Kde nám telefon přinést',
  },
  {
    day: 13, type: 'contest', title: 'Kolik telefonů jsme letos opravili?',
    text: 'Tipněte, kolik telefonů jsme v roce 2026 opravili. Kdo bude nejblíž, vyhraje poukaz na servis za 1 000 Kč.',
    contest: {
      kind: 'number', placeholder: 'Váš tip (celé číslo)',
      prize: 'Poukaz na servis v hodnotě 1 000 Kč',
      rules: 'Tipy lze posílat do 23. 12. Vyhrává tip nejblíže skutečnému počtu oprav za rok 2026, vyhodnotíme do 15. 1. 2027 a výherci napíšeme e-mailem.',
    },
    confirm: 'Správný počet oprav máme z tabulky, do webu ho nedáváme. Vyhodnotíte ho ručně z odpovědí.',
  },
  {
    day: 14, type: 'offer', title: 'K obalu nalepení skla nebo fólie zdarma',
    text: 'Koupíte obal a sklo (nebo fólii)? Nalepení vám uděláme zdarma.',
    coupon: { code: 'MAJAK-14', value: 'Nalepení skla nebo fólie zdarma k obalu', valid: 'Platí do 31. 12.' },
    url: SHOP + 'kamenne-prodejny/', urlLabel: 'Kamenné prodejny',
    confirm: 'Souhlas s nalepením zdarma. Dá se přidat i fólie zdarma, stojí nás 43 Kč.',
  },
  {
    day: 15, type: 'tip', title: 'Jak vyfotit vánoční světýlka mobilem',
    text: 'Světýlka v noci vypadají v mobilu často jako rozmazané tečky. Pár triků to spraví.',
    list: [
      'Otřete objektiv. Mastný otisk dělá z každého světýlka mlhu.',
      'Zapněte noční režim a držte telefon opřený, třeba o stůl nebo zeď.',
      'Klepněte na světýlka a posunutím jasu dolů zachovejte jejich barvy.',
      'Zkuste mírně rozostřit pozadí nebo fotit z blízka, světla se rozzáří do měkkých kruhů.',
    ],
    confirm: 'Obecné tipy; zkontrolujte, zda s nimi souhlasíte.',
  },
  {
    day: 16, type: 'game', title: 'Seřaď telefony podle roku vydání',
    text: 'Od Nokie 3310 po moderní skládačku. Klepejte na telefony od nejstaršího po nejnovější.',
    game: {
      kind: 'order',
      prompt: 'Klepejte od nejstaršího po nejnovější.',
      items: [
        { label: 'Nokia 3310', year: 2000 }, { label: 'iPhone (první generace)', year: 2007 },
        { label: 'Samsung Galaxy S', year: 2010 }, { label: 'Samsung Galaxy Fold', year: 2019 }, { label: 'iPhone 16', year: 2024 },
      ],
    },
  },
  {
    day: 17, type: 'offer', title: 'Tajný kupón jen pro pobočky',
    text: 'Ukažte tento kupón u pultu a dostanete malý dárek. Platí do 24. 12.',
    coupon: { code: 'MAJAK-17', value: 'Malý dárek na pobočce (kabel nebo čisticí hadřík)', valid: 'Platí do 24. 12.' },
    confirm: 'Dárek: hadříky můžeme rozdávat po desítkách, kabel je také v pořádku.',
  },
  {
    day: 18, type: 'offer', title: 'K opravě tvrzené sklo i s nalepením zdarma',
    text: 'K jakékoli opravě dostanete tvrzené sklo včetně nalepení zdarma.',
    coupon: { code: 'MAJAK-18', value: 'Tvrzené sklo i s nalepením zdarma k opravě', valid: 'Platí do 31. 12.' },
    more: 'Běžná cena skla je 499 až 599 Kč.',
    url: SHOP + 'servis/', urlLabel: 'Servis telefonů',
  },
  {
    day: 19, type: 'contest', title: 'Nejhůř rozbitý displej',
    text: 'Pošlete nám fotku svého rozbitého displeje. Ten nejhorší dostane opravu zdarma.',
    contest: {
      kind: 'photo', placeholder: 'Pár slov: jak se to stalo a o jaký telefon jde',
      prize: 'Oprava zdarma do 3 000 Kč',
      rules: 'Zapojit se lze do 23. 12. Nejhůř rozbitý displej vybereme 24. 12. Odesláním souhlasíte se zveřejněním fotky na našem webu a sociálních sítích.',
      sendTo: '[doplnit e-mail nebo Instagram]',
    },
    confirm: 'Doplnit, kam se pošle fotka. Limit 3 000 Kč zvládnete, většina telefonů se do něj vejde.',
  },
  {
    day: 20, type: 'game', title: 'Kvíz: Jaký jsi typ mobilního uživatele?',
    text: 'Čtyři otázky a my vám doporučíme příslušenství, které k vám sedí.',
    game: {
      kind: 'persona',
      questions: [
        { q: 'Kde nejčastěji používáte telefon?', options: [{ t: 'Na cestách, ve vlaku a v autě', r: 'travel' }, { t: 'V práci, od rána do večera', r: 'work' }, { t: 'Doma s hudbou nebo seriálem', r: 'music' }, { t: 'Všude a občas mi spadne', r: 'clumsy' }] },
        { q: 'Co vás na telefonu štve nejvíc?', options: [{ t: 'Vybitá baterie', r: 'travel' }, { t: 'Pomalé nabíjení', r: 'work' }, { t: 'Špatný zvuk', r: 'music' }, { t: 'Škrábance a praskliny', r: 'clumsy' }] },
        { q: 'Jak vypadá váš ideální večer?', options: [{ t: 'Výlet nebo cestování', r: 'travel' }, { t: 'Dopsat poslední e-mail', r: 'work' }, { t: 'Playlist a pohodlí', r: 'music' }, { t: 'Cokoliv, jen aby mi telefon přežil', r: 'clumsy' }] },
        { q: 'Kolik máte v telefonu aplikací?', options: [{ t: 'Spoustu map a letenek', r: 'travel' }, { t: 'Hlavně pracovní nástroje', r: 'work' }, { t: 'Hudba a podcasty', r: 'music' }, { t: 'Radši nepočítat', r: 'clumsy' }] },
      ],
      results: {
        travel: { title: 'Cestovatel', text: 'Telefon máte pořád u sebe a baterie vás zradí vždy v nejhorší chvíli.', accessory: 'Powerbanka' },
        work: { title: 'Pracant', text: 'Váš telefon nezná oddych, potřebuje rychlé a spolehlivé dobíjení.', accessory: 'Rychlonabíječka a pevný kabel' },
        music: { title: 'Posluchač', text: 'Hudba je váš život. Telefon je vaše koncertní síň.', accessory: 'Bezdrátová sluchátka' },
        clumsy: { title: 'Nešika', text: 'Telefon už zažil leccos. Zaslouží si pořádnou ochranu.', accessory: 'Odolný obal a tvrzené sklo' },
      },
    },
    url: SHOP, urlLabel: 'Příslušenství v e-shopu',
  },
  {
    day: 21, type: 'offer', title: 'Balíček „Jako z krabice“',
    text: 'Platíte sklo a obal, čištění máte navíc zdarma. Telefon bude vypadat jako nový.',
    coupon: { code: 'MAJAK-21', value: 'Čištění zdarma ke sklu a obalu', valid: 'Platí do 31. 12.' },
    more: 'Sklo stojí 399 až 450 Kč a obal 399 až 599 Kč.',
    url: SHOP + 'kamenne-prodejny/', urlLabel: 'Kamenné prodejny',
  },
  {
    day: 22, type: 'tip', title: 'Rozbitý mobil před Vánoci?',
    text: 'Telefon se rozbil těsně před svátky? Řešíme to na počkání a půjčíme vám náhradní telefon zdarma.',
    list: ['24. 12. otevřeno do 12:00', '25. a 26. 12. zavřeno', 'Do 30. 12. otevřeno jako obvykle', '31. 12. otevřeno do 18:00'],
    more: 'Otevírací doba se může lišit podle pobočky, ověřte si ji před návštěvou.',
    url: SHOP + 'kamenne-prodejny/', urlLabel: 'Pobočky a otevírací doba',
    confirm: 'Otevírací doba se u poboček liší. Potvrďte konkrétní provozovny.',
  },
  {
    day: 23, type: 'offer', title: 'Bonus k výkupu starého telefonu',
    text: 'Při výkupu starého telefonu a koupi nového dostanete bonus navíc. Platí do 24. 12.',
    coupon: { code: 'MAJAK-23', value: 'Bonus k výkupu starého telefonu při koupi nového', valid: 'Platí do 24. 12.' },
    url: SHOP + 'vykup/', urlLabel: 'Výkup telefonů',
    confirm: 'Výše bonusu: nyní 100 Kč s věrnostní kartou, lze navýšit na 500 Kč minus cena obalu nebo skla. Potvrdit, zda se výkup dělá na všech pobočkách.',
  },
  {
    day: 24, type: 'finale', title: 'Losování sluchátek a dárek pro všechny',
    text: 'Dnes vylosujeme výherce sluchátek Marshall Major V. A všichni dostanou dárek: povánoční kontrolu telefonu zdarma.',
    coupon: { code: 'MAJAK-24', value: 'Povánoční kontrola telefonu zdarma', valid: 'Platí do 31. 1. 2027' },
    more: 'Děkujeme, že jste byli s námi celý advent. Krásné Vánoce vám přeje celý tým Mobil Maják.',
  },
];

export function availableDay(now = new Date()): number {
  const parts = new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Prague', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(now);
  const get = (n: string) => Number(parts.find((x) => x.type === n)?.value);
  const y = get('year'), m = get('month'), d = get('day');
  if (y < YEAR || (y === YEAR && m < 12)) return 0;
  if (y > YEAR) return 24;
  return Math.min(24, d);
}
