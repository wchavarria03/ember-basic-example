import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    openSettings() {
      this.transitionToRoute('/settings');
    },
    openReports() {
      this.transitionToRoute('/');
    },
    logout() {
      localStorage.setItem('isAuthenticated', false);
      this.transitionToRoute('/login');
    }
  }
});
