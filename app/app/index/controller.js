import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    logout() {
      localStorage.setItem('isAuthenticated', false);
      this.transitionToRoute('/login');
    },
    openSettings() {
      this.transitionToRoute('/settings');
    },
    openReports() {
      this.transitionToRoute('/');
    }
  }
});
