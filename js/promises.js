// More info about config & dependencies:
// - https://github.com/hakimel/reveal.js#configuration
// - https://github.com/hakimel/reveal.js#dependencies
Reveal.initialize({
  // width: "100%",
  // height: "100%",

  // Turns fragments on and off globally
  fragments: true,

  // Flags whether to include the current fragment in the URL,
  // so that reloading brings you to the same fragment position
  fragmentInURL: true,

  // Push each slide change to the browser history
  history: true,

  // Shows the slide number using default formatting
  slideNumber: true,

  // Slide number formatting can be configured using these variables:
  //  "h.v": 	horizontal . vertical slide number (default)
  //  "h/v": 	horizontal / vertical slide number
  //    "c": 	flattened slide number
  //  "c/t": 	flattened slide number / total slides
  slideNumber: 'c/t',

  // Display presentation control arrows
  controls: false,

  // Help the user learn the controls by providing hints, for example by
  // bouncing the down arrow when they first encounter a vertical slide
  controlsTutorial: true,

  // showNotes: true,

  dependencies: [
    { src: 'plugin/markdown/marked.js' },
    { src: 'plugin/markdown/markdown.js' },
    { src: 'plugin/notes/notes.js', async: true },
    { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
    { src: 'plugin/sampler/sampler.js' }
  ]
});

// This is a real gross hacky solution. I regret everything.
window._alert = alert;
const alertWrapper = document.querySelector('.alert-wrapper');
function alert(message) {
  const alertbox = document.createElement('div');
  alertbox.classList = 'alertbox';
  alertbox.innerHTML = DOMPurify.sanitize(message);
  alertWrapper.insertBefore(alertbox, alertWrapper.firstElementChild);
  alertbox.addEventListener('click', (event) => alertbox.remove(), {once: true, passive: false});
};
