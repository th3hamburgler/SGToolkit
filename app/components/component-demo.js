import Component from '@ember/component';
import {
  equal
} from '@ember/object/computed';
import {
  getCodeSnippet
} from 'ember-code-snippet';

export default Component.extend({
  // Properties
  tab: 'preview',
  tagName: '',
  // Computed
  showPreview: equal('tab', 'preview'),
  showCode: equal('tab', 'code'),
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
    }
  }
});