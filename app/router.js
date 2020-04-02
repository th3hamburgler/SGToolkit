import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('components', function() {
    this.route('buttons', function() {
      this.route('standard');
      this.route('secondary');
      this.route('action');
    });
    this.route('tooltips');
    this.route('navigation', function() {
      this.route('horizontal');
      this.route('vertical');
      this.route('tabs');
      this.route('pills');
    });
    this.route('tables', function() {
      this.route('standard');
      this.route('dark');
      this.route('striped');
      this.route('small');
    });
    this.route('images', function() {
      this.route('responsive');
      this.route('thumbnail');
      this.route('avatar');
    });
    this.route('alerts', function() {
      this.route('standard');
      this.route('close');
      this.route('link');
    });
    this.route('errors', function() {
      this.route('standard');
      this.route('large');
    });
    this.route('forms', function() {
      this.route('group');
      this.route('controls');
      this.route('checkbox-radios');
      this.route('validation');
    });
    this.route('lists', function() {
      this.route('standard');
      this.route('badges');
      this.route('resource');
      this.route('avatar');
    });
    this.route('pagination', function() {
      this.route('standard');
    });
    this.route('badges');
    this.route('cards', function() {
      this.route('body');
      this.route('text');
      this.route('images');
      this.route('kitchen');
      this.route('header');
      this.route('navigation');
      this.route('background');
      this.route('border');
    });
  });
  this.route('docs', {
    path: '/'
  }, function() {
    this.route('brand', function() {
      this.route('logo');
      this.route('typography');
      this.route('colour');
      this.route('icons');
    });
    this.route('general', function() {
      this.route('index'); // ui-elements
      this.route('structure');
      this.route('navigation');
      this.route('tables');
      this.route('forms');
      this.route('images');

    });
    this.route('components', function() {
      this.route('lists');
      this.route('pagination');
      this.route('cards');
      this.route('charts');
    });
    this.route('info', function() {
      this.route('alerts');
      this.route('errors');
    });
    this.route('layouts', function() {
      this.route('login');
    });
  });
});