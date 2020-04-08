import Component from '@glimmer/component';
import {
  action
} from '@ember/object';
import {
  inject as service
} from '@ember/service';

export default class ColorSwatchComponent extends Component {
  // Serices
  @service
  flashMessages
  // Actions
  @action
  copyHex(hex) {
    const flashMessages = this.flashMessages;

    navigator.clipboard
      .writeText(hex)
      .then(() => {
        flashMessages.add({
          message: `Hex value ${hex} copied`,
          type: 'dark',
        });
      })
      .catch(() => {
        flashMessages.danger(`Failed to copy hex ${hex}.`);
      });
  }
}