import Ember from 'ember';

export default Ember.Component.extend({
  displayEmptyScore: false,
  displayCalculatedInfo: false,
  doubleClick() {
    this.toggleProperty('displayEmptyScore');
  },
  actions: {
    toggleDisplayCalculatedInfo() {
      this.toggleProperty('displayCalculatedInfo');
    }
  }
});
