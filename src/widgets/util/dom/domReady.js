export function ready(inCallback) {
  let promise = null;

  if (!inCallback) {
    // a callback wasn't provided, so let's return a promise instead
    promise = new Promise(resolve => {
      callback = resolve;
    });
  }

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    inCallback();
  } else {
    document.addEventListener('DOMContentLoaded', completed, false);
    window.addEventListener('load', completed, false);
  }

  return promise;

  function completed() {
    document.removeEventListener('DOMContentLoaded', completed, false);
    window.removeEventListener('load', completed, false);
    inCallback();
  }
}

export function windowLoad(inCallback) {
  let promise = null;

  if (!inCallback) {
    // a callback wasn't provided, so let's return a promise instead
    promise = new Promise(resolve => {
      inCallback = resolve;
    });
  }

  if (document.readyState === 'complete') {
    inCallback();
  } else {
    window.addEventListener('load', completed, false);
  }

  return promise;

  function completed() {
    window.removeEventListener('load', completed, false);
    inCallback();
  }
}
