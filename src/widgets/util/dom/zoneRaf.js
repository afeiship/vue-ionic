(function() {
  // use native raf rather than the zone wrapped one
  let originalRaf = (window[window['Zone']['__symbol__']('requestAnimationFrame')] || window[window['Zone']['__symbol__']('webkitRequestAnimationFrame')]);
  // if the originalRaf from the Zone symbol is not available, we need to provide the polyfilled version
  export const nativeRaf = originalRaf !== undefined ? originalRaf['bind'](window) : window.requestAnimationFrame.bind(window);

  // zone wrapped raf
  export const raf = window.requestAnimationFrame.bind(window);
  export const cancelRaf = window.cancelAnimationFrame.bind(window);

  export const nativeTimeout = window[window['Zone']['__symbol__']('setTimeout')]['bind'](window);
  export const clearNativeTimeout = window[window['Zone']['__symbol__']('clearTimeout')]['bind'](window);

  export function rafFrames(inFramesToWait, inCallback) {
    let framesToWait = Math.ceil(inFramesToWait);
    if (framesToWait < 2) {
      nativeRaf(inCallback);
    } else {
      nativeTimeout(() => {
        nativeRaf(inCallback);
      }, (framesToWait - 1) * 16.6667);
    }
  }

  // TODO: DRY rafFrames and zoneRafFrames
  export function zoneRafFrames(inFramesToWait, inCallback) {
    let framesToWait = Math.ceil(inFramesToWait);
    if (framesToWait < 2) {
      raf(inCallback);
    } else {
      setTimeout(() => {
        raf(inCallback);
      }, (framesToWait - 1) * 16.6667);
    }
  }
})();
