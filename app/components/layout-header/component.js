import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    logout() {
      this.get('logout')();
    },
    openSettings() {
      this.get('openSettings')();
    },
    openReports() {
      this.get('openReports')();
    }
  }
});
