import { useMemo, useState } from 'react';
import { Check, RotateCcw, X } from 'lucide-react';
import type { Game } from '../types';

interface Props { game: Game; onDone: () => void; }

export function GameView({ game, onDone }: Props) {
  if (game.kind === 'quiz') return <Quiz game={game} onDone={onDone} />;
  if (game.kind === 'persona') return <Persona game={game} onDone={onDone} />;
  return <Order game={game} onDone={onDone} />;
}

function Quiz({ game, onDone }: { game: Extract<Game, { kind: 'quiz' }>; onDone: () => void }) {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const total = game.questions.length;

  if (finished) {
    const perfect = score === total;
    return (
      <div className="game-result">
        <strong>{score} z {total}</strong>
        <p>{perfect ? 'Všechno správně, skvělé!' : score >= total / 2 ? 'Pěkný výsledek!' : 'Příště to půjde lépe.'}</p>
        {game.reward && (perfect ? <div className="reward"><Check size={18} /> {game.reward}</div> : <div className="reward muted">Odměna je za všechny správné odpovědi. Zkuste to znovu.</div>)}
        <button className="btn ghost-dark" onClick={() => { setI(0); setScore(0); setPicked(null); setFinished(false); }}><RotateCcw size={16} /> Hrát znovu</button>
      </div>
    );
  }
  const q = game.questions[i];
  const answered = picked !== null;
  return (
    <div className="game">
      <div className="game-step">Otázka {i + 1} / {total}</div>
      <h3>{q.q}</h3>
      <div className="options">
        {q.options.map((o, k) => (
          <button key={k} disabled={answered} onClick={() => { setPicked(k); if (k === q.answer) setScore((s) => s + 1); }}
            className={'option' + (answered ? (k === q.answer ? ' right' : k === picked ? ' wrong' : '') : '')}>
            <span>{o}</span>{answered && k === q.answer && <Check size={18} />}{answered && k === picked && k !== q.answer && <X size={18} />}
          </button>
        ))}
      </div>
      {answered && (
        <div className="game-next">
          {q.explain && <p>{q.explain}</p>}
          <button className="btn primary" onClick={() => { if (i + 1 < total) { setI(i + 1); setPicked(null); } else { setFinished(true); onDone(); } }}>
            {i + 1 < total ? 'Další otázka' : 'Zobrazit výsledek'}
          </button>
        </div>
      )}
    </div>
  );
}

function Persona({ game, onDone }: { game: Extract<Game, { kind: 'persona' }>; onDone: () => void }) {
  const [i, setI] = useState(0);
  const [tally, setTally] = useState<Record<string, number>>({});
  const [result, setResult] = useState<string | null>(null);
  if (result) {
    const r = game.results[result];
    return (
      <div className="game-result">
        <small>Jste typ</small>
        <strong>{r.title}</strong>
        <p>{r.text}</p>
        <div className="reward"><Check size={18} /> Doporučujeme: {r.accessory}</div>
        <button className="btn ghost-dark" onClick={() => { setI(0); setTally({}); setResult(null); }}><RotateCcw size={16} /> Hrát znovu</button>
      </div>
    );
  }
  const q = game.questions[i];
  return (
    <div className="game">
      <div className="game-step">Otázka {i + 1} / {game.questions.length}</div>
      <h3>{q.q}</h3>
      <div className="options">
        {q.options.map((o, k) => (
          <button key={k} className="option" onClick={() => {
            const t = { ...tally, [o.r]: (tally[o.r] || 0) + 1 };
            setTally(t);
            if (i + 1 < game.questions.length) setI(i + 1);
            else { setResult(Object.entries(t).sort((a, b) => b[1] - a[1])[0][0]); onDone(); }
          }}><span>{o.t}</span></button>
        ))}
      </div>
    </div>
  );
}

function Order({ game, onDone }: { game: Extract<Game, { kind: 'order' }>; onDone: () => void }) {
  const sorted = useMemo(() => [...game.items].sort((a, b) => a.year - b.year), [game]);
  // pevné, ale zamíchané pořadí (neodpovídá správnému)
  const shuffled = useMemo(() => [...game.items].sort((a, b) => ((a.year * 7) % 11) - ((b.year * 7) % 11)), [game]);
  const [chosen, setChosen] = useState<string[]>([]);
  const [shake, setShake] = useState('');
  const done = chosen.length === sorted.length;
  return (
    <div className="game">
      <p className="game-step">{game.prompt}</p>
      <div className="options">
        {shuffled.map((it) => {
          const idx = chosen.indexOf(it.label);
          return (
            <button key={it.label} disabled={idx >= 0 || done} className={'option' + (idx >= 0 ? ' right' : '') + (shake === it.label ? ' shake' : '')}
              onClick={() => {
                if (sorted[chosen.length].label === it.label) { const n = [...chosen, it.label]; setChosen(n); if (n.length === sorted.length) onDone(); }
                else { setShake(it.label); setTimeout(() => setShake(''), 450); }
              }}>
              <span>{idx >= 0 ? `${idx + 1}. ` : ''}{it.label}</span>{idx >= 0 && <small>{it.year}</small>}
            </button>
          );
        })}
      </div>
      {done && <div className="game-result"><strong>Správně!</strong><p>Seřadili jste všechny telefony od nejstaršího po nejnovější.</p><button className="btn ghost-dark" onClick={() => setChosen([])}><RotateCcw size={16} /> Hrát znovu</button></div>}
    </div>
  );
}
