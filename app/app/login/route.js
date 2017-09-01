import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    willTransition: function (transition) {
      const isAuthenticated = localStorage.getItem('isAuthenticated');
      if (Boolean(isAuthenticated) && transition.targetName.match('login')) {
        this.transitionTo('/');
      } else if(!Boolean(isAuthenticated) && !transition.targetName.match('login') && this.get('routeName').match('login')) {
        transition.abort();
      } else if(!Boolean(isAuthenticated) && !transition.targetName.match('login') && !this.get('routeName').match('login')) {
        this.transitionTo('/login');
      } else {
        return true;
      }
    }
  }
});
