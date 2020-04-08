import Component from '@glimmer/component';
import {
  action
} from '@ember/object';
import {
  inject as service
} from '@ember/service';

export default class CodeSnippetComponent extends Component {
  // Serices
  @service
  flashMessages
  // Actions
  @action
  copyCode(code) {
    const flashMessages = this.flashMessages;

    if (code) {
      navigator.clipboard
        .writeText(code)
        .then(() => {
          flashMessages.add({
            message: `Code ${code} copied`,
            type: 'dark',
          });
        })
        .catch(() => {
          flashMessages.danger(`Failed to copy code ${code}.`);
        });
    }
  }
}