import Component from '@glimmer/component';
import {
  action
} from '@ember/object';

export default class ColorSwatchComponent extends Component {
  @action
  copyHex(hex) {
    navigator.clipboard
      .writeText(hex)
      .then(() => {
        // alert('Text copied.');
      })
      .catch(() => {
        alert('Failed to copy text.');
      });
  }
}