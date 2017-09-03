import Ember from 'ember';

export default Ember.Controller.extend({
  firstName: 'asd',
  lastName: 'as',
  email: 'asd',
  password: '',
  name: Ember.computed('firstName','lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  }),
  actions: {
    updateSettingsInfo(newInfo) {
      if(newInfo.hasOwnProperty('firstName')) {
        this.set('firstName', newInfo.firstName)
      }
      if(newInfo.hasOwnProperty('lastName')) {
        this.set('lastName', newInfo.lastName)
      }
      if(newInfo.hasOwnProperty('email')) {
        this.set('email', newInfo.email)
      }
      if(newInfo.hasOwnProperty('password')) {
        this.set('password', newInfo.password)
      }
    },
    logout() {
      localStorage.setItem('isAuthenticated', false);
      this.transitionToRoute('/login');
    }
  }
});
