import Ember from 'ember';

export default Ember.Component.extend({
  editingName: false,
  editingEmail: false,
  editingPassword: false,
  actions: {
    logout() {
      this.get('logout')();
    },
    editInfo(editType) {
      if (editType === 'name') {
        this.set('editingName', !this.editingName);
      } else if (editType === 'email') {
        this.set('editingEmail',!this.editingEmail);
      } else if (editType === 'password') {
        this.set('editingPassword', !this.editingPassword);
      }
    }
  }
});
