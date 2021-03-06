import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return {
      companyDetails: {
        bussinessName: 'The Honest Company',
        address: '12130 Millennium Dr, Los Angeles, CA 90094',
        phoneNumber: '(888)862-8818',
        website: 'honest.com'
      },
      scoreDetails: {
        scoreTitle: 'Experian Credit Risk Score',
        factorsTitle: 'factors lowering this score',
        factors: [
          'Balance of recently delinquent commercial accounts',
          'Balance of commercial accounts at worst delinquency',
          'Commercial account delinquency in the last 6 months'
        ]
      }
    };
  }
});
