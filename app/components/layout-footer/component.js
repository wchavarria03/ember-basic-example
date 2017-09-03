import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['inSettings'],
  inSettings: function() {
    return this.get('inSettings');
  },
});
