/**
 * Pravidla soutěží adventního kalendáře: stránka /?pravidla
 */
import { OPERATOR, PRIVACY_URL } from '../content';
import { Logo } from './Decor';

export function Rules() {
  return (
    <main className="rules-page wrap">
      <article className="rules-card">
        <a href="./" className="rules-logo"><Logo /></a>
        <h1>Pravidla soutěží Adventního kalendáře Mobil Maják 2026</h1>

        <h2>1. Pořadatel</h2>
        <p>Pořadatelem soutěží je společnost <b>{OPERATOR.name}</b>, se sídlem {OPERATOR.address}, IČ {OPERATOR.ico}, DIČ {OPERATOR.dic} (dále jen „pořadatel“). Kontakt: <a href={'mailto:' + OPERATOR.email}>{OPERATOR.email}</a>, {OPERATOR.phone}.</p>

        <h2>2. Soutěže a doba konání</h2>
        <ul>
          <li><b>Soutěž o bezdrátová sluchátka</b> (okénko 5. prosince): zapojit se lze od 5. 12. 2026 do 23. 12. 2026 23:59. Výhra: bezdrátová sluchátka Marshall Major V.</li>
          <li><b>Kolik telefonů jsme letos opravili?</b> (okénko 13. prosince): tipy lze posílat od 13. 12. 2026 do 23. 12. 2026 23:59. Výhra: poukaz na servis v hodnotě 1 000 Kč.</li>
          <li><b>Nejhůř rozbitý displej</b> (okénko 19. prosince): zapojit se lze od 19. 12. 2026 do 23. 12. 2026 23:59. Výhra: oprava displeje zdarma do hodnoty 3 000 Kč.</li>
        </ul>

        <h2>3. Kdo se může zapojit</h2>
        <p>Soutěžit může fyzická osoba starší 15 let s doručovací adresou v České republice; osoba mladší 18 let se zapojuje se souhlasem zákonného zástupce. Ze soutěže jsou vyloučeni zaměstnanci pořadatele a jejich blízké osoby.</p>

        <h2>4. Jak se zapojit</h2>
        <p>Účastník se přihlásí do adventního kalendáře účtem Google a v okénku dané soutěže odešle svou odpověď (u soutěže o sluchátka stačí kliknout na „Zapojit se“). Do každé soutěže se lze zapojit jen jednou; odpověď nelze měnit. Účast je zdarma a nepodmiňuje ji žádný nákup.</p>

        <h2>5. Určení výherců</h2>
        <ul>
          <li><b>Sluchátka:</b> výherce vylosujeme náhodně ze všech zapojených 24. 12. 2026.</li>
          <li><b>Počet oprav:</b> vyhrává tip nejbližší skutečnému počtu telefonů, které pořadatel opravil v roce 2026. Při shodném tipu rozhoduje dřívější čas odeslání. Výsledek vyhodnotíme do 15. 1. 2027.</li>
          <li><b>Rozbitý displej:</b> nejhůř rozbitý displej vybere porota složená ze zaměstnanců pořadatele do 24. 12. 2026.</li>
        </ul>

        <h2>6. Oznámení a předání výhry</h2>
        <p>Výherce kontaktujeme e-mailem, který je spojený s jeho účtem Google, do 3 pracovních dnů od určení výherce. Pokud výherce do 14 dnů neodpoví, výhra propadá a pořadatel může určit náhradníka stejným způsobem. Výhru si výherce vyzvedne na kterékoli pobočce Mobil Maják, případně se domluvíme na zaslání. Výhru nelze vyměnit za peníze. Křestní jméno a první písmeno příjmení výherců můžeme zveřejnit na webu a sociálních sítích pořadatele.</p>

        <h2>7. Fotografie</h2>
        <p>U soutěže „Nejhůř rozbitý displej“ účastník odesláním fotografie potvrzuje, že ji sám pořídil, a souhlasí s jejím zveřejněním na webu a sociálních sítích pořadatele v souvislosti se soutěží.</p>

        <h2>8. Osobní údaje</h2>
        <p>Pořadatel zpracovává e-mail, jméno z účtu Google a soutěžní odpovědi za účelem provedení soutěže a předání výhry, a to do 31. 3. 2027. Více v <a href={PRIVACY_URL} target="_blank" rel="noreferrer">zásadách ochrany osobních údajů</a>.</p>

        <h2>9. Závěrečná ustanovení</h2>
        <p>Pořadatel si vyhrazuje právo pravidla změnit nebo soutěž zrušit či přerušit; změnu zveřejní na této stránce. Pořadatel může vyloučit účastníka, který jedná v rozporu s pravidly nebo dobrými mravy (např. zakládá více účtů). Na výhru není právní nárok. Soutěž není hazardní hrou podle zákona č. 186/2016 Sb.</p>

        <p className="muted">Platné od 1. 12. 2026.</p>
        <a href="./" className="btn primary">Zpět do kalendáře</a>
      </article>
    </main>
  );
}
