import { RULES_URL } from '../content';
import { NEWSLETTER_CONSENT } from '../config';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight, Check, ChevronLeft, ChevronRight, Copy, Share2, X } from 'lucide-react';
import type { Door } from '../types';
import { LABELS, typeIcon } from './DoorGrid';
import { GameView } from './Games';
import { Snow } from './Decor';

interface Props {
  door: Door | null;
  draft: boolean;
  entered: boolean;
  canPrev: boolean;
  canNext: boolean;
  onPrev: () => void;
  onNext: () => void;
  onClose: () => void;
  onShare: () => void;
  onCopy: (code: string) => void;
  onEnter: (day: number, answer: string) => Promise<void>;
  onWin: () => void;
  /** ukázat jednorázovou nabídku newsletteru */
  offerNewsletter: boolean;
  onNewsletterOffer: (v: boolean) => void;
}

export function DoorModal({ door, draft, entered, canPrev, canNext, onPrev, onNext, onClose, onShare, onCopy, onEnter, onWin, offerNewsletter, onNewsletterOffer }: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  const [busy, setBusy] = useState(false);
  const [formError, setFormError] = useState('');
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const d = ref.current!;
    if (door && !d.open) d.showModal();
    if (!door && d.open) d.close();
    setFormError('');
    bodyRef.current?.scrollTo(0, 0);
  }, [door]);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!door?.contest || busy) return;
    const f = new FormData(e.currentTarget);
    setBusy(true); setFormError('');
    try { await onEnter(door.day, door.contest.kind === 'email' ? 'registrace' : String(f.get('answer') || '')); }
    catch (er) { setFormError((er as Error).message); }
    finally { setBusy(false); }
  }

  const c = door?.contest;
  return (
    <dialog ref={ref} className="modal" aria-label={door?.title || 'Okénko'} onCancel={(e) => { e.preventDefault(); onClose(); }} onClick={(e) => { if (e.target === ref.current) onClose(); }}>
      {door && (
        <div className="modal-card" key={door.day}>
          <button className="modal-close" aria-label="Zavřít" onClick={onClose}><X size={20} /></button>
          <div className={'modal-head t-' + door.type}>
            <Snow count={26} />
            <span className="ribbon" aria-hidden="true"><i /></span>
            <div className="modal-day"><strong>{door.day}</strong><span>prosince</span></div>
            <div className="modal-glyph">{typeIcon(door.type, 56)}</div>
          </div>
          <div className="modal-body" ref={bodyRef}>
            <div className="eyebrow">{typeIcon(door.type, 14)} {LABELS[door.type]}</div>
            <h2>{door.title}</h2>
            <p className="lead">{door.text}</p>

            {door.list && <ul className="checklist">{door.list.map((x) => <li key={x}>{x}</li>)}</ul>}
            {door.more && <div className="more">{door.more}</div>}

            {door.links && (
              <ul className="link-cards">
                {door.links.map((l) => (
                  <li key={l.url}><a href={l.url} target="_blank" rel="noreferrer"><strong>{l.label}</strong>{l.note && <span>{l.note}</span>}<ArrowUpRight size={16} /></a></li>
                ))}
              </ul>
            )}

            {door.coupon && (
              <div className="coupon">
                <div className="coupon-top"><span>Kupón na pobočku</span><b>{door.coupon.value}</b></div>
                <div className="coupon-row">
                  <code>{door.coupon.code}</code>
                  <button onClick={() => onCopy(door.coupon!.code)}><Copy size={16} /> Kopírovat</button>
                </div>
                <small>{door.coupon.valid}. Ukažte tuto obrazovku u pultu.</small>
                <small>Kupón máte uložený i v sekci <b>Moje kupóny</b>.</small>
              </div>
            )}

            {door.game && <GameView game={door.game} onDone={onWin} />}

            {c && (
              <div className="contest">
                <div className="prize"><span>Výhra</span><b>{c.prize}</b></div>
                <p className="rules">{c.rules} <a href={RULES_URL} target="_blank" rel="noreferrer">Úplná pravidla</a></p>
                {entered ? (
                  <div className="success" role="status"><Check size={26} /><div><strong>Jste v soutěži.</strong><span>Výherce oznámíme e-mailem. Držíme palce!</span></div></div>
                ) : (
                  <form onSubmit={submit}>
                    {c.kind === 'number' && (<><label htmlFor="answer">Váš tip</label><input id="answer" name="answer" type="number" inputMode="numeric" min={0} max={1000000} required placeholder={c.placeholder} /></>)}
                    {(c.kind === 'text' || c.kind === 'photo') && (<><label htmlFor="answer">{c.kind === 'photo' ? 'Popis k fotce' : 'Vaše odpověď'}</label><textarea id="answer" name="answer" required minLength={3} maxLength={1000} rows={3} placeholder={c.placeholder || 'Napište nám…'} /></>)}
                    {c.kind === 'photo' && <p className="rules">Fotku pošlete na: <b>{c.sendTo}</b>. Přihlásit se můžete i tady, abychom ji spárovali.</p>}
                    <label className="check"><input type="checkbox" required /> <span>Souhlasím s <a href={RULES_URL} target="_blank" rel="noreferrer">pravidly soutěže</a> a se zpracováním údajů pro její účely.</span></label>
                    {formError && <div className="form-error" role="alert">{formError}</div>}
                    <button className="btn primary" disabled={busy}>{busy ? 'Odesílám…' : c.kind === 'email' ? 'Zapojit se do soutěže' : 'Odeslat'} <ArrowRight size={17} /></button>
                  </form>
                )}
              </div>
            )}

            {door.url && (
              <div className="cta-row"><a className="btn primary" href={door.url} target="_blank" rel="noreferrer">{door.urlLabel || 'Do e-shopu'} <ArrowUpRight size={16} /></a></div>
            )}

            {offerNewsletter && (
              <div className="nl-offer" role="region" aria-label="Novinky e-mailem">
                <div className="nl-offer-icon" aria-hidden="true">✉</div>
                <div>
                  <strong>Chcete vědět o dalších slevách dřív než ostatní?</strong>
                  <p>{NEWSLETTER_CONSENT.text}</p>
                  <div className="nl-offer-actions">
                    <button className="btn primary" onClick={() => onNewsletterOffer(true)}>Ano, chci novinky</button>
                    <button className="btn ghost-dark" onClick={() => onNewsletterOffer(false)}>Teď ne</button>
                  </div>
                  <small>Kupóny z kalendáře dostanete tak jako tak. Nastavení změníte kdykoli v Moje kupóny.</small>
                </div>
              </div>
            )}

            {draft && door.confirm && <div className="draft-note"><b>K potvrzení:</b> {door.confirm}</div>}

            <nav className="modal-nav" aria-label="Další okénka">
              <button disabled={!canPrev} onClick={onPrev}><ChevronLeft size={17} /> Předchozí</button>
              <button onClick={onShare}><Share2 size={15} /> Sdílet</button>
              <button disabled={!canNext} onClick={onNext}>Další <ChevronRight size={17} /></button>
            </nav>
          </div>
        </div>
      )}
    </dialog>
  );
}
