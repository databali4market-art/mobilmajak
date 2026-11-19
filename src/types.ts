export type DoorType = 'offer' | 'game' | 'tip' | 'contest' | 'finale';

export interface QuizQuestion { q: string; options: string[]; answer: number; explain?: string }
export interface PersonaQuestion { q: string; options: { t: string; r: string }[] }
export interface PersonaResult { title: string; text: string; accessory: string }

export type Game =
  | { kind: 'quiz'; questions: QuizQuestion[]; reward?: string }
  | { kind: 'persona'; questions: PersonaQuestion[]; results: Record<string, PersonaResult> }
  | { kind: 'order'; prompt: string; items: { label: string; year: number }[] };

export interface Contest {
  /** email = stačí se zapojit, number = tip čísla, text = odpověď / popis, photo = text + fotku posílají mimo web */
  kind: 'email' | 'number' | 'text' | 'photo';
  prize: string;
  rules: string;
  placeholder?: string;
  /** u kind „photo“: kam fotku poslat */
  sendTo?: string;
}

export interface Door {
  day: number;
  type: DoorType;
  title: string;
  text: string;
  /** delší text (tip, postup) */
  more?: string;
  /** odrážky (např. 4 znaky umírající baterie) */
  list?: string[];
  /** kupón k předložení na pobočce */
  coupon?: { code: string; value: string; valid: string };
  game?: Game;
  contest?: Contest;
  url?: string;
  urlLabel?: string;
  /** produktové odkazy */
  links?: { label: string; url: string; note?: string }[];
  /** poznámka k potvrzení – zobrazí se jen v režimu draft */
  confirm?: string;
}

export interface User {
  uid: string;
  email: string;
  name: string | null;
}

export interface Progress {
  /** den -> ISO čas otevření */
  opened: Record<number, string>;
  /** dny, ve kterých uživatel odeslal soutěžní odpověď */
  entries: number[];
  newsletter: boolean;
}
