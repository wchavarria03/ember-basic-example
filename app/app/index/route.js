import Ember from 'ember';

export default Ember.Route.extend({
    beforeModal: function() {
        this.transitionTo('app/reports');
    }
});
