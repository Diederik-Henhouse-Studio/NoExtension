(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/content-script.ts.4720c225.js")
    );
  })().catch(console.error);

})();
