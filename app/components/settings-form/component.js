import Ember from 'ember';

export default Ember.Component.extend({
  editingName: false,
  editingEmail: false,
  editingPassword: false,
  isInvalidPassword: false,
  isInvalidRePassword: false,
  password: '',
  newPassword: '',
  rePassword: '',
  settingsInfo: {},
  inValidPasswordChange: Ember.computed('isInvalidPassword','isInvalidRePassword', function() {
    return !(!this.get('isInvalidPassword') && !this.get('isInvalidPassword'));
  }),
  actions: {
    logout() {
      this.get('logout')();
    },
    updateSettingsInfo(settingsInfo) {
      this.get('updateSettingsInfo')(settingsInfo);
      this.set('settingsInfo', {});
    },
    save(saveType) {
      const newVal = Ember.copy(this.settingsInfo, true);
      newVal[saveType] = this.password;
      this.set('settingsInfo', newVal);
      this.updateSettingsInfo(this.settingsInfo);
      this.send('editInfo', saveType);
    },
    editInfo(editType) {
      if (editType === 'name') {
        this.set('editingName', !this.editingName);
      } else if (editType === 'email') {
        this.set('editingEmail',!this.editingEmail);
      } else if (editType === 'password') {
        this.set('editingPassword', !this.editingPassword);
      }
    },
    verifyPassword() {
      this.set('isInvalidPassword', arguments[0].length < 8);
    },
    verifyRePassword() {
      this.set('isInvalidRePassword', this.rePassword < 8 || this.newPassword !== this.rePassword);
    }
  }
});
