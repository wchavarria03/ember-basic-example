import Ember from 'ember';

export default Ember.Component.extend({
  displayMobileMenu: false,
  isSettingsOpen: false,
  isReportsOpen: true,
  actions: {
    openSettings() {
      console.log('Open Settings...');
      this.get('openSettings')();
      this.set('displayMobileMenu', false);
      this.set('isSettingsOpen', true);
      this.set('isReportsOpen', false);
    },
    openReports() {
      console.log('Open Reports...');
      this.get('openReports')();
      this.set('displayMobileMenu', false);
      this.set('isSettingsOpen', false);
      this.set('isReportsOpen', true);
    },
    openMobileMenu() {
      if (screen.width < 413) {
        this.set('displayMobileMenu', true);
      }
    },
    closeMobileMenu() {
      this.set('displayMobileMenu', false );
    },
    logout() {
      this.get('logout')();
    },
  }
});
