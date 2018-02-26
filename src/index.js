import { html, render } from 'lit-html';
import loader from '@webcomponents/webcomponentsjs';
import 'web-animations-js/web-animations-next.min.js';
// Import Simpla and OAuth adapter
import Simpla from 'simpla';
import SimplaNetlify from 'simpla/adapters/netlify';


const body = document.querySelector("#body");

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
  <link rel="import" href="/bower_components/simpla-text/simpla-text.html">
  <link rel="import" href="/bower_components/simpla-img/simpla-img.html">
  <link rel="import" href="/bower_components/simpla-admin/simpla-admin.html" async>

  <simpla-admin></simpla-admin>
  
  <simpla-text path="/header/text"></simpla-text>
  
  <img is="simpla-img" path="/header/image">
`;

render(bodyTemplate(), body);