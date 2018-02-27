import { html, render } from 'lit-html';
import loader from '@webcomponents/webcomponentsjs';
import 'web-animations-js/web-animations-next.min.js';
import Simpla from 'simpla';
import SimplaNetlify from 'simpla/adapters/netlify';



// Init Simpla
Simpla.init({

  // Github repo to store content in
  repo: 'sbesh91/simpla_cms_test',

  // Adapter to authenticate users with Github
  auth: new SimplaNetlify({ site: 'simplacmstest' }),

  // Public URL of your content (optional)
  source: 'https://simplacmstest.netlify.com'

});

// Add Simpla to window global for components to access
window.Simpla = Simpla;


const bodyTemplate = () => html`
  <style>
    img {
      max-width: 100%;
    }
  </style>

  <simpla-admin></simpla-admin>
  
  <simpla-text path="/header/text"></simpla-text>
  
  <img is="simpla-img" path="/header/image">
`;

render(bodyTemplate(), document.querySelector('#body'));