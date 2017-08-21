import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('app', { path: '/'}, function() {
    this.route('index', { path: '/'},function() {
      this.route('settings', { path: 'settings'});
      this.route('reports', { path: '/'});
    });
  });
});

export default Router;
