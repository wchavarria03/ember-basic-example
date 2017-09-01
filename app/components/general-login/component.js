import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    authenticate: function() {
      const credentials = this.getProperties('username', 'password');
      if (this.get('authenticate')(credentials)) {
        this.set('errorMessage', '');
        this.sendAction('loginSucceed');
      } else {
        this.set('errorMessage', 'Wrong username or password');
      }
    }
  }
});
