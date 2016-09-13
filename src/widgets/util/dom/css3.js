(function() {

  export let CSS = {
    transform: null,
    transition: null,
    transitionDuration: null,
    transitionDelay: null,
    transitionTimingFn: null,
    transitionStart: null,
    transitionEnd: null,
    transformOrigin: null
  };

  //nomrallise
  (function() {
    // transform
    var i
    var keys = ['webkitTransform', 'transform', '-webkit-transform', 'webkit-transform',
      '-moz-transform', 'moz-transform', 'MozTransform', 'mozTransform', 'msTransform'
    ];

    for (i = 0; i < keys.length; i++) {
      if (document.documentElement.style[keys[i]] !== undefined) {
        CSS.transform = keys[i];
        break;
      }
    }

    // transition
    keys = ['webkitTransition', 'mozTransition', 'msTransition', 'transition'];
    for (i = 0; i < keys.length; i++) {
      if (document.documentElement.style[keys[i]] !== undefined) {
        CSS.transition = keys[i];
        break;
      }
    }

    // The only prefix we care about is webkit for transitions.
    var isWebkit = CSS.transition.indexOf('webkit') > -1;

    // transition duration
    CSS.transitionDuration = (isWebkit ? '-webkit-' : '') + 'transition-duration';

    // transition timing function
    CSS.transitionTimingFn = (isWebkit ? '-webkit-' : '') + 'transition-timing-function';

    // transition delay
    CSS.transitionDelay = (isWebkit ? '-webkit-' : '') + 'transition-delay';

    // To be sure transitionend works everywhere, include *both* the webkit and non-webkit events
    CSS.transitionEnd = (isWebkit ? 'webkitTransitionEnd ' : '') + 'transitionend';

    // transform origin
    CSS.transformOrigin = (isWebkit ? '-webkit-' : '') + 'transform-origin';
  })();


  export function transitionEnd(inElement, inCallback) {
    if (inElement) {
      CSS.transitionEnd.split(' ').forEach(eventName => {
        inElement.addEventListener(eventName, onEvent);
      });

      return unregister;
    }

    function unregister() {
      CSS.transitionEnd.split(' ').forEach(eventName => {
        inElement.removeEventListener(eventName, onEvent);
      });
    }

    function onEvent(inEvent) {
      if (inElement === inEvent.target) {
        unregister();
        inCallback(inEvent);
      }
    }
  }

})();
