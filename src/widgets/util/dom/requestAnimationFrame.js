// RequestAnimationFrame Polyfill (Android 4.3 and below)
/*! @author Paul Irish */
/*! @source https://gist.github.com/paulirish/1579671 */
(function() {
  var rafLastTime = 0;
  var win = window;
  if (!win.requestAnimationFrame) {
    win.requestAnimationFrame = function(inCallback) {
      var currTime = Date.now();
      var timeToCall = Math.max(0, 16 - (currTime - rafLastTime));

      var id = win.setTimeout(function() {
        inCallback(currTime + timeToCall);
      }, timeToCall);

      rafLastTime = currTime + timeToCall;
      return id;
    };
  }

  if (!win.cancelAnimationFrame) {
    win.cancelAnimationFrame = function(inId) {
      clearTimeout(inId);
    };
  }
})();
