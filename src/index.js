import ReactDOM from 'react-dom';
import { Quiz } from './quiz';

import './index.css';

// ========================================

ReactDOM.render(
  <Quiz />,
  document.getElementById('root')
);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./serviceWorker.js', {scope: './'})
  .then((reg) => {
    // registration worked
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch((error) => {
    // registration failed
    console.log('Registration failed with ' + error);
  });
} else {
  console.error('no service worker');
}