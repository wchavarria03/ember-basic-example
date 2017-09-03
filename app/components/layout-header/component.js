import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    openSettings() {
      this.get('openSettings')();
    },
    openReports() {
      this.get('openReports')();
    }
  }
});
