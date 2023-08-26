import ReactDOM from 'react-dom/client';
import { inject } from '@vercel/analytics';
import Router from './Router';
import './styles/globalStyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
inject();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router />
);
