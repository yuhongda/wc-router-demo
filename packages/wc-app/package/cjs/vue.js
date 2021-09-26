"use strict";

var _wcApp = _interopRequireDefault(require("./wc-app.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var elName = 'scf-wcapp';
!customElements.get(elName) && customElements.define(elName, _wcApp["default"]);
