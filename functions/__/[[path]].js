/**
 * Cloudflare Pages Function: přeposílá /__/auth/* a /__/firebase/* na Firebase (mobil-majak.firebaseapp.com).
 * Díky tomu běží přihlášení přes Google na stejné doméně jako web (advent.mobilmajak.cz),
 * takže funguje i v Safari / na iPhonu, který blokuje cookies třetích stran.
 * Postup podle dokumentace Firebase „Best practices for using signInWithRedirect“ (varianta reverse proxy).
 */
const FIREBASE_HOST = 'mobil-majak.firebaseapp.com';

export async function onRequest({ request }) {
  const url = new URL(request.url);
  url.hostname = FIREBASE_HOST;
  url.port = '';
  url.protocol = 'https:';
  return fetch(new Request(url, request));
}
