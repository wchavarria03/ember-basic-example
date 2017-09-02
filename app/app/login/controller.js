import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    authenticate(credentials) {
      if (credentials.username === 'admin' && credentials.password === 'admin') {
        localStorage.setItem('isAuthenticated', true);
        return true;
      } else {
        return false;
      }
    },
    loginSucceed() {
      this.transitionToRoute('/');
    }
  }
});