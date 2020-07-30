'use strict';

(function() {
  // corner drops load animation
  window.addEventListener('beforeunload', () => {
    document.getElementById('pdrops').contentWindow.dispatchEvent(new CustomEvent("pdrops"));
  });
})();
