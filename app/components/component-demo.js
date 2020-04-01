import Component from '@ember/component';
import {
  computed
} from '@ember/object';
import {
  equal
} from '@ember/object/computed';
import {
  getCodeSnippet
} from 'ember-code-snippet';
import {
  inject as service
} from '@ember/service';

const dragDirections = ["right"];

export default Component.extend({
  // Service
  router: service(),
  // Properties
  tab: 'preview',
  tagName: '',
  width: 320,
  minWidth: 320,
  maxWidth: 1200,
  directions: dragDirections,
  // Computed
  showPreview: equal('tab', 'preview'),
  showCode: equal('tab', 'code'),
  url: computed('src', function() {
    return this.router.urlFor(this.src);
  }),
  // Actions
  actions: {
    setTab(tab) {
      this.set('tab', tab);
    },
    copyCode(snippetName) {
      const snippet = getCodeSnippet(snippetName);
      navigator.clipboard
        .writeText(snippet.source)
        .then(() => {
          // alert('Text copied.');
        })
        .catch(() => {
          alert('Failed to copy text.');
        });
    },
    resizeStart(direction, event, element) {
      // if the iframe is accepting mouse events when we are rezising
      // it will swallow up our mouse event and cause the drag to never end
      element.querySelector('.demo__frame').style.pointerEvents = "none";
    },
    resizeStop(direction, event, element) {
      // allow default iframe interaction after the drag ends
      element.querySelector('.demo__frame').style.pointerEvents = "auto";
    },
  }
});