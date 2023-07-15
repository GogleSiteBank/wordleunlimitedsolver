// ==UserScript==
// @name         Wordle Solver
// @namespace    http://github.com/goglesitebank/wordleunlimitedsolver
// @version      1.0
// @description  Solve wordle unlimited.
// @author       GogleSiteBank
// @match        https://wordleunlimited.org
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const { solution }= JSON.parse(localStorage.getItem("gameState"));
    console.log(`${solution} (wordle answer)`);
    window.alert(`The word is: ${solution} (it has also been printed to console)`);
})();
