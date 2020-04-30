import Controller from '@ember/controller';

export default Controller.extend({
  init(){
    this._super(...arguments);
    this.icons = [
      'icon.alert-circle',
      'icon.arrow-down',
      'icon.arrow-left',
      'icon.arrow-right',
      'icon.arrow-up',
      'icon.attachment',
      'icon.calendar',
      'icon.call',
      'icon.check-circle',
      'icon.close',
      'icon.code',
      'icon.cog',
      'icon.download',
      'icon.expand',
      'icon.flash',
      'icon.group',
      'icon.location',
      'icon.mail',
      'icon.menu',
      'icon.navigate-circle',
      'icon.offshore',
      'icon.onshore',
      'icon.play-circle',
      'icon.resize-vertical',
      'icon.resize',
      'icon.search',
      'icon.secure',
      'icon.service',
      'icon.timer',
      'icon.wind-power',
      'icon.wind',
    ];
  }
});
