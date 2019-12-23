"use strict";

(function() {
    window.addEventListener("load", init);

    const id = id => document.getElementById(id);
    const qsa = selector => document.querySelectorAll(selector);

    function init() {
        qsa("main > .card > button").forEach(btn => btn.addEventListener("click", overlayAnimation));
    }

    function overlayAnimation() {
        id("overlay").classList.add("visible");
        setTimeout((() => {
            location.href = "/project/" + this.parentNode.id;
        }).bind(this), 1100)
    }
})();
