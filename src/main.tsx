import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './fonts.css';
import './styles.css';
import App from './App';
import { Admin } from './components/Admin';

const isAdmin = new URLSearchParams(location.search).has('admin');

createRoot(document.getElementById('root')!).render(<StrictMode>{isAdmin ? <Admin /> : <App />}</StrictMode>);
