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
    logout() {
      localStorage.setItem('isAuthenticated', false);
      this.transitionToRoute('/login');
    }
  }
});
