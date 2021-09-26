import WcShell from './wc-app.js';
const elName = 'scf-wcapp';
!customElements.get(elName) && customElements.define(elName, WcShell);
